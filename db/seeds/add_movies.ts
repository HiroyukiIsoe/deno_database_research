import { AbstractSeed, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.2/mod.ts";

export default class extends AbstractSeed<ClientMySQL> {
    /** Runs on seed */
    async run(info: Info): Promise<void> {
        for (let i = 0; i < 11; i++) {
            await this.client.query(`INSERT INTO deno_db.movies (title, published_at) VALUES('movie ep${i}', NOW());`);
        }
    }
}
