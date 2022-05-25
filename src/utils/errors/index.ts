import NewError from './NewError';

export const TOKEN_INVALID = new NewError(401, 'Invalid token');

export const MISSING_TOKEN = new NewError(401, 'Token not found');

export const USER_NOT_EXIST = new NewError(404, 'User not exist');

export const USER_EXIST = new NewError(409, 'Email already exist');

export const INCORRECT_USER = new NewError(401, 'Incorrect username or password');

export const TASK_NOT_EXIST = new NewError(404, 'Task not found');
