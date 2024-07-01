import { validationResult } from "express-validator";
import SponsorService from "./SponsorService.js";
import Payment from "../PaymentType/Payment.js";

class SponsorController {
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: "Access denied", errors });
    }
    try {
      const paymentType = await Payment.findOne({ id: req.body.payment_type });
      if (!paymentType) {
        return res.status(400).json({ message: "Payment type not found" });
      }
      const sponsor = await SponsorService.create({
        ...req.body,
        payment_type: paymentType,
      });
      res.json(sponsor);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getOne(req, res) {
    try {
      const sponsor = await SponsorService.getOne(req.params.id);
      res.json(sponsor);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getAll(req, res) {
    try {
      const sponsors = await SponsorService.getAll();
      res.json(sponsors);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async update(req, res) {
    try {
      const updatedSponsor = await SponsorService.update(
        req.params.id,
        req.body
      );
      res.json(updatedSponsor);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async delete(req, res) {
    try {
      const sponsor = await SponsorService.delete(req.params.id);
      res.json(sponsor);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new SponsorController();
