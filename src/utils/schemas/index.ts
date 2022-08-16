import Joi from 'joi';

export const SCHEMALogin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export const SCHEMAUser = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  password: Joi.string().required(),
});

export const SCHEMATask = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
});

export const SCHEMAUpdateTask = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
});
