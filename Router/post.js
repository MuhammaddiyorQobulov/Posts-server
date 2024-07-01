import Router from "express";
import PostController from "../api/Post/PostController.js";
const postRouter = new Router();

postRouter.post("", PostController.create);
postRouter.get("", PostController.getAll);
postRouter.get("/:id", PostController.getOne);
postRouter.put("/:id", PostController.update);
postRouter.delete("/:id", PostController.delete);

export default postRouter;
