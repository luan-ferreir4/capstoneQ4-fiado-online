import { Response } from 'express';

const verifyAcceptedKeys = async (data: any): Promise<Response> => {
  const acceptedKeys: Array<string> = process.env.ACCEPTED_USER_KEYS.split(',');

  const mapping = Array(data).map((item) => item);
  console.log(mapping);
  return data;
};
export default verifyAcceptedKeys;
