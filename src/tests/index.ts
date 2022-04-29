import { createConnection, getConnection } from 'typeorm';
import { existsSync } from 'fs';
import { unlink } from 'fs/promises';
import path from 'path';

class ConnectionTestJest {
  dbPath: string;

  constructor() {
    this.dbPath = path.join(__dirname, '../../dbTest.sqlite');
  }

  create = async () => {
    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }

    await createConnection('default');
  };

  close = async () => {
    await getConnection('default').close();

    if (existsSync(this.dbPath)) {
      await unlink(this.dbPath);
    }
  };

  clear = async () => {
    const connection = getConnection('default');
    const entities = connection.entityMetadatas;

    entities.forEach(async (entity) => {
      const repository = connection.getRepository(entity.name);
      await repository.query(`DELETE FROM ${entity.tableName}`);
    });
  };
}

export { ConnectionTestJest };
