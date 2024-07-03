import mongoose from "mongoose";

const StudentSponsor = new mongoose.Schema({
  full_name: { type: String, required: true },
  get_status_display: { type: String, default: "Yangi" },
  given: { type: Number, required: true },
  _id: { type: String, required: true },
  sponsors: [
    {
      _id: { type: String, required: true },
      summa: { type: Number, required: true },
      sponsor: {
        _id: { type: String, required: true },
        full_name: { type: String, required: true },
      },
    },
  ],
});

export default mongoose.model("StudentSponsor", StudentSponsor);
