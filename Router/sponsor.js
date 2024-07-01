import Router from "express";
import SponsorController from "../Sponsor/SponsorController.js";
import { check } from "express-validator";
const sponsorsRouter = new Router();

sponsorsRouter.post(
  "/",
  [
    check("full_name", "Full name must be").notEmpty(),
    check(
      "phone",
      "Phone must be at least 7 and not more than 12 characters"
    ).isMobilePhone(),
  ],
  SponsorController.create
);
sponsorsRouter.get("/:id", SponsorController.getOne);
sponsorsRouter.get("", SponsorController.getAll);
sponsorsRouter.put("/:id", SponsorController.update);
sponsorsRouter.delete("/:id", SponsorController.delete);

export default sponsorsRouter;
