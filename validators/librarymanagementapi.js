import Joi from "joi";

export const bookSchema = Joi.object({
  title: Joi.string().min(3).required(),
  author: Joi.string().min(3).required(),
  publishedYear: Joi.number().integer().min(1000).max(new Date().getFullYear()).required(),
  genre: Joi.string().min(3).required(),
  availableCopies: Joi.number().integer().min(0).required()
});