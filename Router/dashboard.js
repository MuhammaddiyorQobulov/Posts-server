import { Router } from "express";
import DashboardController from "../api/Dashboard/DashboardController.js";

const DashboardRouter = new Router();

DashboardRouter.get("", DashboardController.getAll);
export default DashboardRouter;
