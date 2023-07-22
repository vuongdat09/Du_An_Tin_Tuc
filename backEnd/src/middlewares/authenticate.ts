import { Request, Response } from "express";
import { NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "../interfaces/user";
import User from "../models/User";

interface AuthRequest extends Request {
  user?: IUser;
}
export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader)
      throw new Error("Bạn phải đăng nhập để thực hiện hành động này");
    const token = authHeader && (authHeader.split(" ")[1] as string);
    const { _id }: any = jwt.verify(token, "123456");

    const user = (await User.findById(_id)) as IUser;
    if (!user) {
      throw new Error("Không tìm thấy người dùng");
    }
    req.user = user;
    console.log(user);

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
