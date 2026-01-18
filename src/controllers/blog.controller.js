import Blog from "../models/blog.model.js";

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
