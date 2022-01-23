import { DataTypes, Database, Model, MySQLConnector, Relationships } from 'https://deno.land/x/denodb/mod.ts';

const connection = new MySQLConnector({
  host: 'localhost',
  port: 13316,
  username: 'deno_user',
  password: 'password',
  database: 'deno_db',
});

const db = new Database(connection);

// モデル定義
class Author extends Model {
  static table = "authors";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }

  static books() {
    return this.hasMany(Book);
  }
}

class Book extends Model {
  static table = "books";
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.BIG_INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    released_at: {
      type: DataTypes.DATETIME,
      allowNull: false
    }
  }

  static author() {
    return this.hasOne(Author);
  }
}

Relationships.belongsTo(Book, Author);

db.link([Author, Book]);

// await db.sync({ drop: true });

// transactionを利用する前にコネクションを接続している必要がある
await db.ping();

// Transactionの引数で渡した内容は実行されない（原因不明
await db.transaction(async () => {
  const author = await Author.create({ name: '掌田津耶乃', email: 't.syoda@example.com' });
  await Book.create({ title: 'Vue.js3超入門', released_at: '2020/12/25 00:00:00', authorId: author.lastInsertId })
});

await db.close();
