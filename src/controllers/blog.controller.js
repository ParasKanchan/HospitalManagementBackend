import Blog from "../models/blog.model.js";

const defaultHealthTips = [
  {
    title: "Stay Hydrated",
    content: "Drink at least 8 glasses of water daily to maintain proper hydration. Water helps regulate body temperature, lubricate joints, and transport nutrients to your cells.",
    category: "general",
  },
  {
    title: "Benefits of Regular Exercise",
    content: "Aim for at least 150 minutes of moderate-intensity exercise per week. Regular physical activity improves cardiovascular health, strengthens bones, and boosts mental well-being.",
    category: "fitness",
  },
  {
    title: "Balanced Diet for Health",
    content: "Include plenty of fruits, vegetables, whole grains, and lean proteins in your diet. A balanced diet provides essential nutrients and helps maintain a healthy weight.",
    category: "nutrition",
  },
  {
    title: "Sleep and Recovery",
    content: "Get 7-9 hours of quality sleep each night. Good sleep is crucial for immune function, cognitive performance, and emotional regulation.",
    category: "general",
  },
  {
    title: "Stress Management",
    content: "Practice relaxation techniques like meditation, deep breathing, or yoga. Managing stress reduces the risk of chronic diseases and improves overall well-being.",
    category: "mental-health",
  },
  {
    title: "Healthy Breakfast",
    content: "Never skip breakfast. A healthy breakfast provides energy and essential nutrients to start your day. Include proteins, whole grains, and fruits.",
    category: "nutrition",
  },
  {
    title: "Regular Health Checkups",
    content: "Schedule regular health checkups to monitor your health and catch potential issues early. Prevention is better than cure.",
    category: "general",
  },
  {
    title: "Limit Sugar Intake",
    content: "Reduce consumption of sugary drinks and snacks. High sugar intake can lead to obesity, diabetes, and dental problems.",
    category: "nutrition",
  },
  {
    title: "Walk Every Day",
    content: "Walking is a simple yet effective form of exercise. Try to walk for at least 30 minutes daily to improve your cardiovascular health.",
    category: "fitness",
  },
  {
    title: "Mental Health Matters",
    content: "Don't neglect your mental health. If you're feeling stressed, anxious, or depressed, don't hesitate to seek professional help.",
    category: "mental-health",
  },
  {
    title: "Healthy Posture",
    content: "Maintain good posture to prevent back and neck pain. Sit with your shoulders relaxed, spine straight, and feet flat on the ground.",
    category: "fitness",
  },
  {
    title: "Eat More Greens",
    content: "Include leafy greens like spinach, kale, and lettuce in your meals. They're packed with vitamins, minerals, and antioxidants.",
    category: "nutrition",
  },
];

export const createBlog = async (req, res) => {
  const { title, content, category } = req.body;

  const blog = await Blog.create({
    title,
    content,
    category,
    createdBy: req.user._id,
  });

  res.status(201).json({ message: "Blog created", blog });
};

export const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json({ blogs });
};

export const getRandomTip = async (req, res) => {
  try {
    const randomTip = defaultHealthTips[Math.floor(Math.random() * defaultHealthTips.length)];
    res.json({ tip: randomTip });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch random tip" });
  }
};
