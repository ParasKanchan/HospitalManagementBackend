import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";

export const registerUser = async (req, res) => {
  const { name, email, password, age, gender, phone, role } = req.body;

  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: "User already exists" });

  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const displayName = role === "doctor" ? `Dr. ${name}` : name;

  const user = await User.create({
    name: displayName,
    email,
    password: hashedPassword,
    age,
    gender,
    phone,
    role,
  });

  res.status(201).json({
    message: "User registered successfully",
    token: generateToken({ id: user._id }),
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  res.json({
    message: "Login success",
    token: generateToken({ id: user._id }),
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
};

export const getMe = async (req, res) => {
  res.json({ user: req.user });
};

export const getDoctors = async (req, res) => {
  const doctors = await User.find({ role: "doctor" }).select(
    "name email phone"
  );
  res.json({ doctors });
};
