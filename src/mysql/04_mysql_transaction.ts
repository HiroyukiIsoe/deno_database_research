import { connection } from "./mysql_connection.ts";

// create table
try {
  const createResult = await connection.execute(`
    create table if not exists tweets (
      id bigint NOT NULL AUTO_INCREMENT,
      user_id bigint NOT NULL,
      tweet varchar(140) NOT NULL,
      created_at timestamp NOT NULL default current_timestamp,
      updated_at timestamp NOT NULL default current_timestamp,
      PRIMARY KEY (id),
      foreign key fk_user_id (user_id) references users(id)
    );
  `);
  console.log(createResult);
} catch (error) {
  console.log(error);
}


const insertResult = await connection.transaction(async (conn) => {
  const insertUser = await conn.execute("INSERT INTO users (name, created_at, updated_at) VALUES(?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);", ['insert_user']);
  return await conn.execute ("INSERT INTO tweets (user_id, tweet, created_at, updated_at) VALUES(?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);", [insertUser.lastInsertId, 'つぶやき'])
});
console.log(insertResult);

// 重複しているカラムは後方のカラムで上書きされる
const selectResult = await connection.query(`
  select
    t.*,
    u.*
  from
    tweets t
  inner join users u on
    t.user_id = u.id
  where
    t.id = ?
`, [insertResult.lastInsertId]);
console.log(selectResult);

await connection.close();
