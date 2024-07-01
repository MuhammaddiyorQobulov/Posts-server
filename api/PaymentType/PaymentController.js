import Payment from "./Payment.js";
class PaymentController {
  async getAll(req, res) {
    const payments = await Payment.find();
    res.json(payments);
  }
}

export default new PaymentController();
