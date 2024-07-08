import StudentSponsor from "../StudentSponsor/StudentSponsor.js";
import StudentsService from "./StudentsService.js";
import Institutes from "../Institutes/Institutes.js";
class StudentsController {
  async create(req, res) {
    try {
      const student = await StudentsService.create({
        full_name: req.body.full_name,
        contract: req.body.contract,
        phone: req.body.phone,
        type: req.body.type,
        institute: await Institutes.findOne({ id: req.body.institute }),
      });

      await StudentSponsor.create({
        full_name: req.body.full_name,
        given: 0,
        get_status_display: "Yangi",
        _id: student._id,
        sponsors: [],
      });
      res.json(student);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const { page = 1, size = 10, search = "" } = req.query;
      const students = await StudentsService.getAll();
      const searchedStudents = students.filter((student) =>
        student.full_name.includes(search)
      );
      const paginatedStudents = {
        students: searchedStudents.slice((page - 1) * size, page * size),
        count: searchedStudents.length,
        page: parseInt(page),
        size: parseInt(size),
        search,
      };
      res.json(paginatedStudents);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getOne(req, res) {
    try {
      const student = await StudentsService.getOne(req.params.id);
      res.json(student);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedStudent = await StudentsService.update(
        req.params.id,
        req.body
      );
      res.json(updatedStudent);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const student = await StudentsService.delete(req.params.id);
      res.json(student);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}

export default new StudentsController();
