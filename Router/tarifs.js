import { Router } from "express";
import TarifsController from "../api/Tarifs/TarifsController.js";

const TarifsRouter = new Router();

TarifsRouter.get("", TarifsController.getAll);

export default TarifsRouter;
