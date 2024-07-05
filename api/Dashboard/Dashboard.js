import mongoose from "mongoose";

const Dashboard = new mongoose.Schema({
  total_must_pay: { type: Number, default: 0 },
  total_need: { type: Number, default: 0 },
  total_paid: { type: Number, default: 0 },
});

export default mongoose.model("Dashboard", Dashboard);
