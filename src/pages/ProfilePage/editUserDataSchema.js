import joi from 'joi';

const editUserDataSchema = joi.object({
    name: joi.string().min(3).max(255).required(),
    email: joi.string().email({ tlds: { allow: false } }).required(),
  });

const editUserPasswordSchema = joi.object({
    name: joi.string().min(3).max(255).required(),
    email: joi.string().email({ tlds: { allow: false } }).required(),
    password: joi.string().min(6).max(255).required(),
    confirmPassword: joi.any().valid(joi.ref('password')).required().messages({
        'any.only': 'As senhas não batem.',
    }),
});
  
 export {
     editUserDataSchema,
     editUserPasswordSchema
 };

