import Query from "../models/query.model.js";

export const createQuery = async (req, res) => {
  const { name, email, message } = req.body;

  const query = await Query.create({ name, email, message });

  res.status(201).json({ message: "Query submitted successfully", query });
};

export const getAllQueries = async (req, res) => {
  const queries = await Query.find().sort({ createdAt: -1 });
  res.json({ queries });
};
