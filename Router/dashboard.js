import { Router } from "express";
import DashboardController from "../api/Dashboard/DashboardController.js";
import roleMiddleWaree from "../middlewaree/role.js";

const DashboardRouter = new Router();

DashboardRouter.get(
  "",
  roleMiddleWaree(["USER", "ADMIN"]),
  DashboardController.getAll
);
export default DashboardRouter;
