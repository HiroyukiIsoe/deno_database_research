import { Client } from "https://deno.land/x/mysql/mod.ts";

export const connection = await new Client().connect({
  hostname: "localhost",
  port: 13316,
  username: "root",
  db: "deno_mysql",
  poolSize: 3, // connection limit
  // password: "",
});
