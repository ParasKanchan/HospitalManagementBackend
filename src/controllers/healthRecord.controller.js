import HealthRecord from "../models/healthRecord.model.js";

export const addHealthRecord = async (req, res) => {
  const record = await HealthRecord.create({
    user: req.user._id,
    ...req.body,
  });

  res.status(201).json({ message: "Health record added", record });
};

export const getMyHealthRecords = async (req, res) => {
  const records = await HealthRecord.find({ user: req.user._id }).sort({ date: -1 });
  res.json({ records });
};

export const deleteHealthRecord = async (req, res) => {
  const { id } = req.params;

  const record = await HealthRecord.findOneAndDelete({
    _id: id,
    user: req.user._id,
  });

  if (!record) return res.status(404).json({ message: "Record not found" });

  res.json({ message: "Health record deleted" });
};
