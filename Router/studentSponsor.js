import Router from "express";
import StudentSponsorController from "../api/StudentSponsor/StudentSponsorController.js";

const studentSponsorRouter = new Router();
studentSponsorRouter.get("", StudentSponsorController.getAll);
studentSponsorRouter.get("/:id", StudentSponsorController.getOne);
studentSponsorRouter.post("/:id", StudentSponsorController.create);
studentSponsorRouter.delete("/:id", StudentSponsorController.delete);
studentSponsorRouter.put("/:id", StudentSponsorController.update);

export default studentSponsorRouter;
