import { DataTypes, Database, Model, MySQLConnector } from 'https://deno.land/x/denodb/mod.ts';

const connection = new MySQLConnector({
  host: 'localhost',
  port: 13316,
  username: 'deno_user',
  password: 'password',
  database: 'deno_db',
});

const db = new Database(connection);

class Movies extends Model {
  static table = "movies";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    published_at: DataTypes.DATETIME
  }
}

db.link([Movies]);

await db.sync({ drop: false });

await Movies.create({
  title: 'deno_db_title',
  published_at: '2022-01-03 00:00:00'
});

const allMovies = await Movies.all();

console.log(allMovies);

await db.close();
