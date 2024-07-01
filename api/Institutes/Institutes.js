import mongoose from "mongoose";

const Institute = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
});

export default mongoose.model("Institute", Institute);