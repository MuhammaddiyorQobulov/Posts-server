import Student from "./Student.js";
class StudentsService {
  async create(student) {
    return await Student.create(student);
  }

  async getOne(id) {
    return await Student.findOne({ _id: id });
  }

  async getAll() {
    return await Student.find();
  }

  async update(id, student) {
    return await Student.updateOne({ _id: id }, student);
  }

  async delete(id) {
    return await Student.deleteOne({ _id: id });
  }
}

export default new StudentsService();
