import Sponsor from "./Sponsor.js";
class SponsorService {
  async create(sponsor) {
    return await Sponsor.create(sponsor);
  }
  async getAll() {
    return await Sponsor.find();
  }
  async getOne(id) {
    if (!id) {
      throw new Error("id not found");
    }
    return await Sponsor.findById(id);
  }
  async update(id, sponsor) {
    if (!id) {
      throw new Error("id not found");
    }
    return await Sponsor.findByIdAndUpdate(id, sponsor);
  }
  async delete(id) {
    if (!id) {
      throw new Error("id not found");
    }
    return await Sponsor.findByIdAndDelete(id);
  }
}

export default new SponsorService();
