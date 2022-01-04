import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.2/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.query("CREATE USER 'deno_user'@'%' identified by 'password';")
        await this.client.query("GRANT ALL ON deno_db.* TO 'deno_user'@'%';")
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.query("DROP USER 'deno_user'@'%';")
    }
}
