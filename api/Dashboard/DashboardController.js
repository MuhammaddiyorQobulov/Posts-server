import Dashboard from "./Dashboard.js";

class DashboardController {
  async getAll(req, res) {
    const dashboard = await Dashboard.findById("6687e1d6cc0a0babd4c9cc7f");
    res.json({
      total_must_pay: dashboard.total_must_pay,
      total_need: dashboard.total_need,
      total_paid: dashboard.total_paid,
    });
  }
}
export default new DashboardController();
