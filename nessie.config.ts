import {
    ClientMySQL,
    NessieConfig,
} from "https://deno.land/x/nessie@2.0.2/mod.ts";

const client = new ClientMySQL({
    hostname: "localhost",
    port: 13316,
    username: "root",
    // password: "pwd", // uncomment this line for <8
    db: "deno_db",
});

/** This is the final config object */
const config: NessieConfig = {
    client,
    migrationFolders: ["./db/migrations"],
    seedFolders: ["./db/seeds"],
};

export default config;
