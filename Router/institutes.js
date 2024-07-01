import Router from "express";
import InstitutesController from "../api/Institutes/InstitutesController.js";

const institutesRouter = new Router();
institutesRouter.get("", InstitutesController.getAll);
institutesRouter.post("", InstitutesController.create);

export default institutesRouter;
