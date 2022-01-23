import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.2/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.query('ALTER TABLE authors ADD UNIQUE INDEX author_idx1(email);')
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.query('ALTER TABLE authors DROP INDEX author_idx1;')
    }
}
