import Joi from "joi";

export const postSchema = Joi.object({
  title: Joi.string().required().messages({
    "string.empty": "Bạn chưa nhập title!",
    "any.required": "Bạn chưa nhập title!",
  }),
  content: Joi.string().required().messages({
    "string.empty": "Bạn chưa nhập nội dung!",
    "any.required": "Bạn chưa nhập nội dung!",
  }),
  author: Joi.string().required().messages({
    "string.empty": "Bạn chưa nhập tên tác giả!",
    "any.required": "Bạn chưa nhập tên tác giả!",
  }),
  image: Joi.string().required().messages({
    "string.empty": "Bạn chưa nhập tên tác giả!",
    "any.required": "Bạn chưa nhập tên tác giả!",
  }),
  categoryId: Joi.string().required().messages({
    "string.empty": "Bạn chưa nhập thể loại!",
    "any.required": "Bạn chưa nhập thể loại!",
  }),
  createdAt: Joi.date().default(() => new Date()),
  updatedAt: Joi.date().default(() => new Date()),
});

//   title: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   categoryId: {
//     type: mongoose.Types.ObjectId,
//     required: true,
//     ref: "Category",
//   },
