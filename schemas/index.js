import Joi from 'joi';

const userSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email().required(),
    phone_number: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .optional()
        .allow(null, ''),
    password: Joi.string()
        .min(8)
        .required()
});

const bookSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    barcode: Joi.string().required(),
    book_type: Joi.string().required(),
    year: Joi.number().required(),
    author: Joi.string().required()
});

export { userSchema, bookSchema };
