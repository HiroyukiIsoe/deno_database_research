import { Client } from "https://deno.land/x/mysql/mod.ts";

const client = await new Client().connect({
  hostname: "localhost",
  port: 13316,
  username: "root",
  // db: "",
  poolSize: 3, // connection limit
  // password: "",
});

const result = await client.execute('CREATE DATABASE IF NOT EXISTS deno_mysql;')
console.log(result);

await client.close();
