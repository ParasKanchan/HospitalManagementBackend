import Appointment from "../models/appointment.model.js";

export const createAppointment = async (req, res) => {
  const { doctorName, department, appointmentDate, timeSlot, notes } = req.body;

  const appointment = await Appointment.create({
    patient: req.user._id,
    doctorName,
    department,
    appointmentDate,
    timeSlot,
    notes,
  });

  res.status(201).json({ message: "Appointment booked", appointment });
};

export const getMyAppointments = async (req, res) => {
  const appointments = await Appointment.find({ patient: req.user._id }).sort({
    createdAt: -1,
  });
  res.json({ appointments });
};

export const updateAppointmentStatus = async (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const appointment = await Appointment.findOne({ _id: id, patient: req.user._id });
  if (!appointment) return res.status(404).json({ message: "Appointment not found" });

  if (status) appointment.status = status;
  if (notes !== undefined) appointment.notes = notes;

  await appointment.save();
  res.json({ message: "Appointment updated", appointment });
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  const appointment = await Appointment.findOneAndDelete({
    _id: id,
    patient: req.user._id,
  });

  if (!appointment) return res.status(404).json({ message: "Appointment not found" });

  res.json({ message: "Appointment deleted" });
};
