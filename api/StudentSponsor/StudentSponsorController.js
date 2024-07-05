import Sponsor from "../Sponsor/Sponsor.js";
import Student from "../Students/Student.js";
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
      const student = await Student.findById(req.body.student);

      if (!student || !sponsor || !studentSponsor) {
        return res
          .status(400)
          .json({ message: "Sponsor or student not found" });
      }
      const summa = await StudentSponsor.updateOne(
        { _id: studentSponsor._id },
        {
          given: student.given + req.body.summa,
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
      await Student.updateOne(
        { _id: studentSponsor._id },
        {
          given: student.given + req.body.summa,
        }
      );

      res.json(summa);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const studentSponsor = await StudentSponsor.findById(req.params.id);
      const student = await Student.findById(req.params.id);
      if (!student || !studentSponsor) {
        return res
          .status(400)
          .json({ message: "Sponsor or student not found" });
      }

      let given = student.given;
      const sponsors = studentSponsor.sponsors.filter((s) => {
        if (s._id == req.body.sponsorId) {
          given = given - s.summa;
        }
        return s._id !== req.body.sponsorId;
      });

      await Student.updateOne(
        { _id: req.params.id },
        {
          given,
        }
      );
      const summa = await StudentSponsor.updateOne(
        { _id: studentSponsor._id },
        {
          given,
          sponsors,
        }
      );
      res.json(summa);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new StudentSponsorController();
