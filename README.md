# deno_database_research

## nessie の導入

```sh
# マイグレーション用フォルダ作成
deno run -A --unstable https://deno.land/x/nessie/cli.ts init --mode folders
# コンフィグファイル作成
deno run -A --unstable https://deno.land/x/nessie/cli.ts init --mode config --dialect mysql
# マイグレーション用ファイル作成
deno run -A --unstable https://deno.land/x/nessie/cli.ts make:migration create_moveis
# マイグレーション実行
deno run -A --unstable https://deno.land/x/nessie/cli.ts migrate
# シード用ファイル作成
deno run -A --unstable https://deno.land/x/nessie/cli.ts make:seed add_movies
# シード実行
deno run -A --unstable https://deno.land/x/nessie/cli.ts seed
deno run -A --unstable https://deno.land/x/nessie/cli.ts seed seed_file.js
```

### 調査事項

- [ ] DB接続情報を環境変数から取得する
- [ ] マイグレーション実行にSQLビルダーライブラリを組み合わせる

## denodb 検証事項

- 基本操作
- Transaction
- Index

## mysqlの導入

導入はあり
