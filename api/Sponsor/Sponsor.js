import mongoose from "mongoose";

const Sponsor = new mongoose.Schema({
  full_name: { type: String, required: true },
  phone: { type: String, required: true },
  sum: { type: Number, default: 0 },
  payment_type: [
    {
      id: { type: Number, required: true },
      title: { type: String, require: true },
    },
  ],
  firm: { type: String, default: "" },
  spent: { type: String, default: 0 },
  comment: { type: String, default: "" },
  created_at: { type: Date, default: Date.now() },
  get_status_display: { type: String, default: "Yangi" },
  is_legal: { type: Boolean, default: false },
});

export default mongoose.model("Sponsor", Sponsor);
