import Router from "express";
import StudentsController from "../api/Students/StudentsController.js";
import { check } from "express-validator";
const studentsRouter = new Router();

studentsRouter.post(
  "/",
  [
    check("full_name", "Full name must be").notEmpty(),
    check("institute", "Institute must be").notEmpty(),
    check(
      "phone",
      "Phone must be at least 7 and not more than 12 characters"
    ).isMobilePhone(),
  ],
  StudentsController.create
);
studentsRouter.get("/:id", StudentsController.getOne);
studentsRouter.get("", StudentsController.getAll);
studentsRouter.put("/:id", StudentsController.update);
studentsRouter.delete("/:id", StudentsController.delete);

export default studentsRouter;
