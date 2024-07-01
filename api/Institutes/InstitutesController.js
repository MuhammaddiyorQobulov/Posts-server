import axios from "axios";
import Institutes from "./Institutes.js";

class InstitutesController {
  async getAll(req, res) {
    try {
      const institutes = await Institutes.find();
      res.json(institutes);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async create(req, res) {
    try {
      const data = await axios.get(
        "https://club.metsenat.uz/api/v1/institute-list/"
      );
      const institute = await Institutes.create(data.data);
      res.json(institute);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new InstitutesController();
