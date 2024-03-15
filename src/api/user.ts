import { fakeDelay } from '../utils/common';
import { LoginForm, SignupFormType, SignupUserType, UpdateForm } from './../types/index';
import axios from 'axios';

export const getAllUsers = async () => {
  const users = await axios<SignupFormType[]>('/api/user');
  return users.data;
};

export const createUser = async (formdata: SignupFormType) => {
  const users = await fakeDelay(axios.post<SignupUserType[]>('/api/signup', formdata));
  return users.data;
};

export const updateUser = async ({ id, name, file }: UpdateForm) => {
  const user = await fakeDelay(axios.patch('/api/profile', { id, name, file }));
  return user.data;
};

export const signIn = async ({ id, password }: LoginForm) => {
  const user = await fakeDelay(axios.post('/api/login', { id, password }));
  return user.data;
};
