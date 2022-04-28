// import { describe, expect, test, jest } from '@jest/globals';
import { NextFunction, Request, Response } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import request from 'supertest';
import app from '../../app';
import { verifyEmailAlreadyExists } from '../../middlewares';

describe('Route signup Tests', () => {
  const customer = {
    name: 'Leonam',
    email: 'leonam_5000@hotmail.com',
    phone_number: '27-99999-8888',
  };

  test('201 Created: return user and push user to companies DB', async () => {
    const response = await request(app).post('/customer/create').send(customer);

    const expectedStatusCode = 201;
    expect(response.statusCode).toBe(expectedStatusCode);

    // const expectedBodyKeys = Object.keys(user);
    // expectedBodyKeys.push('vehicles', 'id');
  });

  //   const mockReq: Partial<Request> = {};
  //   const mockRes: Partial<Response> = {};
  //   const nextFn = jest.fn();

  //   beforeEach(() => {
  //     mockRes.json = jest.fn().mockReturnValue(mockRes);
  //     mockRes.status = jest.fn().mockReturnValue(mockRes);
  //   });
});
