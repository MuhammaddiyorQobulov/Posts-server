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
        return res.status(400).json({ student, sponsor, studentSponsor });
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
      await Sponsor.updateOne(
        { _id: sponsor._id },
        {
          spent: sponsor.spent + req.body.summa,
        }
      );

      res.json(summa);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const sponsor = await Sponsor.findById(req.query.sponsorId);
      const studentSponsor = await StudentSponsor.findById(req.params.id);
      const student = await Student.findById(req.params.id);
      const sponsors = studentSponsor.sponsors.filter(
        (s) => s._id !== req.query.sponsorId
      );
      if (!sponsor || !studentSponsor || !student || !sponsors) {
        return res
          .status(400)
          .json({ message: "Sponsor or student not found" });
      }
      const updatedStudentSponsor = await StudentSponsor.findByIdAndUpdate(
        req.params.id,
        {
          sponsors: [
            ...sponsors,
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
      await Sponsor.updateOne(
        { _id: sponsor._id },
        {
          spent:
            sponsor.spent -
            (studentSponsor.sponsors.find((s) => s._id == req.query.sponsorId)
              .summa -
              req.body.summa),
        }
      );
      await Student.updateOne(
        { _id: req.params.id },
        {
          given:
            student.given -
            (studentSponsor.sponsors.find((s) => s._id == req.query.sponsorId)
              .summa -
              req.body.summa),
        }
      );
      res.json(updatedStudentSponsor);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const studentSponsor = await StudentSponsor.findById(req.params.id);
      const student = await Student.findById(req.params.id);
      const sponsor = await Sponsor.findById(req.query.sponsorId);
      let given = student.given;
      if (!student || !studentSponsor) {
        return res
          .status(400)
          .json({ message: "Sponsor or student not found" });
      }

      const sponsors = studentSponsor.sponsors.filter((s) => {
        if (s._id == req.query.sponsorId) {
          given = given - s.summa;
        }
        return s._id !== req.query.sponsorId;
      });

      const summa = await StudentSponsor.updateOne(
        { _id: studentSponsor._id },
        {
          given,
          sponsors,
        }
      );
      await Sponsor.updateOne(
        { _id: sponsor._id },
        {
          spent:
            sponsor.spent -
            studentSponsor.sponsors.find((s) => s._id == req.query.sponsorId)
              .summa,
        }
      );
      await Student.updateOne(
        { _id: req.params.id },
        {
          given,
        }
      );
      res.json(summa);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new StudentSponsorController();
