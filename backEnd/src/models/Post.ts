import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Category",
    },
  },
  { timestamps: true, versionKey: false }
);

postSchema.plugin(mongoosePaginate);

export const Post = mongoose.model("Post", postSchema);
