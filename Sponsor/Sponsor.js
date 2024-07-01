import mongoose from "mongoose";

const Sponsor = new mongoose.Schema({
  full_name: { type: String, required: true },
  phone: { type: String, required: true },
  sum: { type: Number, default: 0 },
  payment_type: { type: Number, required: true },
  firm: { type: String, default: "" },
  spent: { type: String, default: "" },
  comment: { type: String, default: "" },
});

export default mongoose.model("Sponsor", Sponsor);
