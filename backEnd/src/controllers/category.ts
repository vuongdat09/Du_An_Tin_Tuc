import { Category } from "../models/Category";
import { Request, Response } from "express";

export const getCategory = async (req: Request, res: Response) => {
  try {
    const id = await req.params.id;
    const category = await Category.findById(id).populate("posts");
    return res.status(200).json({ message: "Đã tìm thấy danh mục!", category });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find().populate("posts");
    return res
      .status(200)
      .json({ message: "Đã tìm thấy danh mục!", categories });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  try {
    const body = await req.body;
    const category = await Category.create(body);
    return res
      .status(200)
      .json({ message: "Tạo danh mục thành công!", category });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
