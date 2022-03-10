import { connection } from "./mysql_connection.ts";

const result = await connection.execute(`
  CREATE TABLE IF NOT EXISTS users (
    id bigint NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    created_at timestamp NOT NULL default current_timestamp,
    updated_at timestamp NOT NULL default current_timestamp,
    PRIMARY KEY (id)
  );
`);

console.log(result);

await connection.close();
