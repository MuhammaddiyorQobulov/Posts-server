import mongoose from "mongoose";

const Payment = new mongoose.Schema({
  id: { type: Number },
  title: { type: String },
});

export default mongoose.model("Payment", Payment);
