import { SignupFormType, LoginForm, SignupUserType, UpdateForm } from './../types/index';
import { http, HttpResponse } from 'msw';
import moment from 'moment';

const users: SignupUserType[] = [];

export const handlers = [
  http.get('/api/user', async () => {
    return HttpResponse.json(users);
  }),
  http.post('/api/signup', async ({ request }) => {
    const formdata = (await request.json()) as SignupFormType;

    const existedId = users.find((user) => user.id === formdata.id);
    if (existedId) return new HttpResponse(null, { status: 404 });

    users.push({
      ...formdata,
      createdBy: moment().format('YYYY.MM.DD HH:mm:ss'),
      updatedBy: moment().format('YYYY.MM.DD HH:mm:ss'),
    });
    return HttpResponse.json(users, { status: 200 });
  }),

  http.post('/api/login', async ({ request }) => {
    const { id, password } = (await request.json()) as LoginForm;
    const user = users.find((user) => user.id === id && user.password === password);

    if (!user) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json(user, { status: 200 });
  }),

  http.patch('/api/profile', async ({ request }) => {
    const { id, name, file } = (await request.json()) as UpdateForm;
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) return new HttpResponse(null, { status: 404 });

    const updateedUser = {
      ...users[userIndex],
      name,
      file,
      updatedBy: moment().format('YYYY.MM.DD HH:mm:ss'),
    };
    users[userIndex] = updateedUser;
    return HttpResponse.json(updateedUser, { status: 200 });
  }),
];
