import { Request, Response } from 'express';
import User from "../models/User";
import { IUser } from '../interfaces/user';
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { signInSchema, signupSchema } from "../schemas/auth";


export const signup = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        const { error } = await signupSchema.validate(
            {
                name,
                email,
                password,
                confirmPassword,
            },
            { abortEarly: false }
        );
        if (error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors,
            });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({
                message: "Email đã tồn tại",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user: IUser = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        const token = jwt.sign({ _id: user._id }, "123456", {
            expiresIn: "1d",
          });

        return res.status(201).json({
            message: "Đăng ký thành công",
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            },
        });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const signin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const { error } = signInSchema.validate({ email, password }, { abortEarly: false });
        if (error) {
            const errors = error.details.map((error) => error.message);
            return res.status(400).json({
                message: errors,
            });
        }
        const user: IUser | null = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Tài khoản không tồn tại" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: "Mật khẩu không khớp" });
        }

        const token = jwt.sign({ _id: user._id }, "123456");

        res.status(200).json({
            message: "Đăng nhập thành công",
            data: user,
            accessToken: token,
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({ message: error.errors[0] });
        }
        res.status(500).json({ message: "Internal Server Error" });
    }
};
