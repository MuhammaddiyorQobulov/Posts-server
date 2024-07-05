import mongoose from "mongoose";

const Tarifs = new mongoose.Schema({
  value: { type: Number, unique: true },
});

export default mongoose.model("Tarifs", Tarifs);
