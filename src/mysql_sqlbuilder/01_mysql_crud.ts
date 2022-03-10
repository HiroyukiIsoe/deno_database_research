// import { connection } from "../mysql/mysql_connection.ts";
import { Query } from "https://deno.land/x/sql_builder/mod.ts";

const builder = new Query();

const insertParams = {
  name: 'insert_user',
  created_at: 'CURRENT_TIMESTAMP',
  updated_at: 'CURRENT_TIMESTAMP'
}

const sql = builder
  .table('users')
  .insert(insertParams)
  .build();

console.log(sql);

// await client.close();
