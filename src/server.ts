import { createConnection } from 'typeorm';
import app from './app';

const port = process.env.PORT ?? 3000;

createConnection()
  .then(() => {
    app.listen(port, () => {
      console.log(`Running in http://localhost:${port}`);
    });
  })
  .catch((error: any) => console.log(error));
