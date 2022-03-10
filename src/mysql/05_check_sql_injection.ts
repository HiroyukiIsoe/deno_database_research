import { connection } from "./mysql_connection.ts";
import { buildQuery } from "https://deno.land/x/mysql@v2.10.2/src/packets/builders/query.ts";
import { decode } from "https://deno.land/x/mysql@v2.10.2/src/buffer.ts";

// パラメータを利用してSQLインジェクションを試みる場合は、失敗する
const selectResult = await connection.query("SELECT id, name, created_at, updated_at FROM users where id = ?;",
  ['2 or 1 = 1']
);
console.log(selectResult);

// ライブラリ内のクエリ作成処理
const query = buildQuery("SELECT id, name, created_at, updated_at FROM users where id = ?;",
['2 or 1 = 1']);
console.log(decode(query));

// テンプレートリテラルでパラメータをSQLに埋め込む
// これは実行時にエラーになる
// const selectId = '2;select * from users'
// 以下は全件取得されてしまう
const selectId = '2 or 1 = 1'
const sql = `SELECT id, name, created_at, updated_at FROM users where id = ${selectId};`;
const result = await connection.query(sql);
console.log(result);

await connection.close();
