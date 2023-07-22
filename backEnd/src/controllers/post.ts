import { Category } from "../models/Category";
import { Post } from "../models/Post";
import { postSchema } from "../schemas/post";
import { Request, Response } from "express";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate("categoryId");
    return res.status(200).json({ message: "Đã tìm thấy bài viết!", posts });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getPost = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);
    return res.status(200).json({ message: "Đã tìm thấy bài viết!", post });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createPost = async (req: Request, res: Response) => {
  try {
    const body = await req.body;
    const { error } = postSchema.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ message: errors });
    }
    const post = await Post.create(body);
    await Category.findByIdAndUpdate(post.categoryId, {
      $addToSet: {
        posts: post._id,
      },
    });
    if (!post) {
      return res.status(400).json({ message: "Tạo post không thành công!" });
    }
    return res.status(200).json({ message: "Tạo post thành công!", post });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const removePost = async (req: Request, res: Response) => {
  try {
    const id = await req.params.id;
    const deletedPost = await Post.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ message: "Bài viết đã bị xóa!", deletedPost });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const id = await req.params.id;
    const body = await req.body;
    const { error } = postSchema.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ message: errors });
    }
    const post = await Post.findByIdAndUpdate(id, body, { new: true });
    if (!post) {
      return res.status(400).json({ message: "Cập nhật không thành công!" });
    }
    return res.status(200).json({ message: "Cập nhật thành công!", post });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
