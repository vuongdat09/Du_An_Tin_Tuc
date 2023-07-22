import mongoose from "mongoose";

const categoryShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: true, versionKey: false }
);

export const Category = mongoose.model("Category", categoryShema);
