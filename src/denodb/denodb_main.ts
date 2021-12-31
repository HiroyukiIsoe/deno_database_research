import { DataTypes, Database, Model, MySQLConnector } from 'https://deno.land/x/denodb/mod.ts';

const connection = new MySQLConnector({
  host: 'localhost:13316',
  username: 'admin',
  password: '',
  database: 'deno_db',
});

const db = new Database(connection);

console.log(db)
