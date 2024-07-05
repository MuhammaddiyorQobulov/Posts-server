import Tarifs from "./Tarifs.js";

class TarifsController {
  async getAll(req, res) {
    try {
      const tarifs = await Tarifs.find();
      res.json(tarifs);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new TarifsController();