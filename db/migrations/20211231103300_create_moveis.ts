import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.2/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.query("CREATE TABLE IF NOT EXISTS movies (id bigint NOT NULL AUTO_INCREMENT,title varchar(255) NOT NULL,published_at datetime,PRIMARY KEY (id))");
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.query("DROP TABLE movies");
    }
}
