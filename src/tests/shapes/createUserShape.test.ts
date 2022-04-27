import { describe, expect, test } from '@jest/globals';
// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from '../../app';

describe('createUserShape shape test', () => {
  const user = {
    name: 'Leonam',
    email: 'leonam_5000@hotmail.com',
    cpf: '131.448.157-22',
    password: 'abc',
    balance: 500,
  };

  test('400 Bad Request: error, name is a required field', async () => {
    const { name, ...sendUser } = user;

    const response = await request(app).post('/user/register').send(sendUser);
    const expectStatusCode = 400;
    expect(response.statusCode).toBe(expectStatusCode);

    const expectResponseBody = { error: ['name is a required field'] };
    expect(response.body).toStrictEqual(expectResponseBody);
  });
});
