import Router from "express";
import InstitutesController from "../api/Institutes/InstitutesController.js";

const institutesRouter = new Router();
institutesRouter.get("", InstitutesController.getAll);

export default institutesRouter;
