import Joi from "joi";

export const signupSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email().required().messages({
        "string.base": `"Email" phải là kiểu "text"`,
        "string.empty": `"Email" không được bỏ trống`,
        "string.email": `"Email" phải có định dạng là email`,
        "any.required": `"Email" là trường bắt buộc`,
    }),
    password: Joi.string().min(6).required().messages({
        "string.base": `"Password" phải là kiểu "text"`,
        "string.empty": `"Password" không được bỏ trống`,
        "string.min": `"Password" phải chứa ít nhất {#limit} ký tự`,
        "any.required": `"Password" là trường bắt buộc`,
    }),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
        "string.base": `"ConfirmPassword" phải là kiểu "text"`,
        "string.empty": `"ConfirmPassword" không được bỏ trống`,
        "any.only": `"ConfirmPassword" phải giống "password"`,
        "any.required": `"ConfirmPassword" là trường bắt buộc`,
    }),
});
export const signInSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.base": `"Email" phải là kiểu "text"`,
        "string.empty": `"Email" không được bỏ trống`,
        "string.email": `"Email" phải có định dạng là email`,
        "any.required": `"Email" là trường bắt buộc`,
    }),
    password: Joi.string().required().messages({
        "string.base": `"Password" phải là kiểu "text"`,
        "string.empty": `"Password" không được bỏ trống`,
        "string.min": `"Password" phải chứa ít nhất {#limit} ký tự`,
        "any.required": `"Password" là trường bắt buộc`,
    }),
});
