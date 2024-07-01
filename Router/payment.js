import Router from "express";
import PaymentController from "../api/PaymentType/PaymentController.js";
const PaymentRouter = new Router();

PaymentRouter.get("/", PaymentController.getAll);

export default PaymentRouter;