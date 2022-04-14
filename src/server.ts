import { createConnection } from 'typeorm';
import expressListEndpoints from 'express-list-endpoints';
import app from './app';

const port = process.env.PORT ?? 3000;

console.table(
  expressListEndpoints(app).map(({ methods, path }) => {
    return { methods, path };
  })
);
createConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Running in http://localhost:${port}`);
    });
  })
  .catch((error: any) => console.log(error));
