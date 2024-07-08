import Router from "express";
import SponsorController from "../api/Sponsor/SponsorController.js";
import { check } from "express-validator";
import roleMiddleWaree from "../middlewaree/role.js";
const sponsorsRouter = new Router();

sponsorsRouter.post(
  "/",
  [check("full_name", "Full name must be").notEmpty()],
  roleMiddleWaree(["ADMIN"]),
  SponsorController.create
);
sponsorsRouter.get("/:id", SponsorController.getOne);
sponsorsRouter.get("", SponsorController.getAll);
sponsorsRouter.put("/:id", SponsorController.update);
sponsorsRouter.delete("/:id", SponsorController.delete);

export default sponsorsRouter;
