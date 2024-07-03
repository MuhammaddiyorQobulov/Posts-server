import Sponsor from "../Sponsor/Sponsor.js";
import StudentSponsor from "./StudentSponsor.js";

class StudentSponsorController {
  async getAll(req, res) {
    try {
      const studentSponsors = await StudentSponsor.find();
      res.json(studentSponsors);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async getOne(req, res) {
    try {
      const studentSponsor = await StudentSponsor.findById(req.params.id);
      res.json(studentSponsor);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
  async create(req, res) {
    try {
      const studentSponsor = await StudentSponsor.findById(req.params.id);
      const sponsor = await Sponsor.findById(req.body.sponsor);
      const summa = await StudentSponsor.updateOne(
        { _id: studentSponsor._id },
        {
          _id: studentSponsor._id,
          full_name: studentSponsor.full_name,
          get_status_display: "Moderatsiyada",
          given: studentSponsor.given + req.body.summa,
          sponsors: [
            ...studentSponsor.sponsors,
            {
              _id: sponsor._id,
              summa: req.body.summa,
              sponsor: {
                _id: sponsor._id,
                full_name: sponsor.full_name,
              },
            },
          ],
        }
      );
      res.json(summa);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new StudentSponsorController();
