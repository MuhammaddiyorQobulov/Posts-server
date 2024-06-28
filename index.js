import express from "express";
import mongoose from "mongoose";
import router from "./router.js";
import fileUpload from "express-fileupload";

const DB_URL =
  "mongodb+srv://user:user@nodejs.4z0f8vg.mongodb.net/?retryWrites=true&w=majority&appName=Nodejs";
const PORT =process.env.PORT || 5002;
const app = express();

app.use(express.json());
app.use(express.static('pictures'));
app.use(fileUpload({}));
app.use("/api", router);
app.post("/", );

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
