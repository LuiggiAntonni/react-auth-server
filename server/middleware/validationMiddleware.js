const Joi = require("joi"); //SQL Injection protection

// Define password complexity rules
const passwordComplexity = Joi.string()
  .min(8)
  .max(30)
  .pattern(new RegExp('(?=.*[a-z])'))         // At least one lowercase letter
  .pattern(new RegExp('(?=.*[A-Z])'))         // At least one uppercase letter
  .pattern(new RegExp('(?=.*[0-9])'))         // At least one number
  .pattern(new RegExp('(?=.*[!@#$%^&*])'))    // At least one special character
  .required()
  .messages({
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    'string.min': 'Password must be at least 8 characters long.',
    'string.max': 'Password must be no more than 30 characters long.'
  });

const registerValidation = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().max(30).allow('').optional(),
    password: passwordComplexity,
    email: Joi.string().email().required(),
  });
  //validation schema

  const { error } = schema.validate(req.body); //validation process

  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
};

module.exports = { registerValidation };
