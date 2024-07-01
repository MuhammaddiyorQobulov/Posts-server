import express from "express";
import mongoose from "mongoose";
import postRouter from "./Router/post.js";
import authRouter from "./Router/auth.js";
import sponsorsRouter from "./Router/sponsor.js";
import fileUpload from "express-fileupload";
import cors from "cors";
const DB_URL =
  "mongodb+srv://user:user@nodejs.4z0f8vg.mongodb.net/?retryWrites=true&w=majority&appName=Nodejs";
const PORT = process.env.PORT || 5002;
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static("pictures"));
app.use(fileUpload({}));
app.post("/");
app.use("/api/posts", postRouter);
app.use("/api/sponsors", sponsorsRouter);
app.use("/api/auth", authRouter);
const startApp = async () => {
  try {
    await mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
