import StudentsService from "./StudentsService.js";

class StudentsController {
  async create(req, res) {
    try {
      const student = await StudentsService.create(req.body);
      res.json(student);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    try {
      const students = await StudentsService.getAll();
      res.json(students);
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
