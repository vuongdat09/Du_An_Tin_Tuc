import express from "express";
import {authenticate} from "../middlewares/authenticate"
import {authorization} from "../middlewares/authorization"
import {
  createPost,
  getPost,
  getPosts,
  removePost,
  updatePost,
} from "../controllers/post";
const router = express.Router();

router.get("/posts", getPosts);
router.get("/posts/:id", getPost);
router.delete("/posts/:id",authenticate, authorization, removePost);
router.post("/posts",authenticate, authorization, createPost);
router.put("/posts/:id",authenticate, authorization, updatePost);
export default router;
