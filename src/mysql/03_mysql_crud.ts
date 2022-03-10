import { connection } from "./mysql_connection.ts";

// Insert
console.log("==INSERT==");
const insertResult = await connection.execute("INSERT INTO users (name, created_at, updated_at) VALUES(?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);", ['insert_user']);
console.log(insertResult);

// Select
console.log("==SELECT==");
const insertedUser = await connection.query("SELECT id, name, created_at, updated_at FROM users where id = ?;", [insertResult.lastInsertId]);
console.log(insertedUser);

// Update
console.log("==UPDATE==");
const updateResult = await connection.execute("UPDATE users SET name='updated_user', updated_at=CURRENT_TIMESTAMP WHERE id = ?;", [insertResult.lastInsertId]);
console.log(updateResult);

const updatedUser = await connection.query("SELECT id, name, created_at, updated_at FROM users where id = ?;", [insertResult.lastInsertId]);
console.log(updatedUser);

// Delete
console.log("==DELETE==");
const deleteResult = await connection.execute("DELETE FROM users WHERE id=?;", [insertResult.lastInsertId]);
console.log(deleteResult);

const deletedUser = await connection.query("SELECT id, name, created_at, updated_at FROM users where id = ?;", [insertResult.lastInsertId]);
console.log(deletedUser);

await connection.close();
