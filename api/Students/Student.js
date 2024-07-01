import mongoose from "mongoose";

const Student = new mongoose.Schema({
  contract: { type: Number, required: true },
  full_name: { type: String, required: true },
  given: { type: Number, required: true },
  institute: {
    id: { type: Number, required: true },
    name: { type: String, required: true },
  },
  phone: { type: String, required: true },
  type: { type: Number, required: true },
  created_at: { type: Date, default: Date.now() },
});

export default mongoose.model("Student", Student);
