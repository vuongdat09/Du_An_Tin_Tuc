import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import postRouters from "./routers/post";
import categoryRouters from "./routers/category";
import authRouters from "./routers/auth";


const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", postRouters);
app.use("/api", categoryRouters);
app.use("/api", authRouters);
mongoose.connect("mongodb://127.0.0.1:27017/angular");

export const viteNodeApp = app;
