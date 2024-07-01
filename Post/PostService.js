import Post from "./Post.js";
import fileService from "./fileService.js";
class PostService {
  async create(post, picture) {
    const fileName = fileService.saveFile(picture);
    return await Post.create({ ...post, picture: fileName });
  }
  async getAll() {
    return await Post.find();
  }
  async getOne(id) {
    if (!id) {
      throw new Error("id not found");
    }
    return await Post.findById(id);
  }
  async update(id, post) {
    if (!id) {
      throw new Error("id not found");
    }
    return await Post.findByIdAndUpdate(id, post);
  }
  async delete(id) {
    if (!id) {
      throw new Error("id not found");
    }
    return await Post.findByIdAndDelete(id);
  }
}

export default new PostService();
