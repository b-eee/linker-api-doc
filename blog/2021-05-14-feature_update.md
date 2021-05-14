---
title: Feature Update 2021-05-14
author: hx-support
author_title: hx-support
author_url: https://github.com/b-eee
tags: [API, CLI, update, 2021]
---


### API：全文検索APIを追加

全文検索が可能な global_search API を追加しました。ワークスペース内のデータリソースに対して全文検索を行うことができます。

- [GlobalSearch API](/docs/v0/items-search/GlobalSearch)


### API：アクションスクリプトでPromiseを返却

ExecuteAction APIによりアクションを呼び出した場合、アクションスクリプトからPromiseを返却できるようになりました。

この機能により、API呼び出しの実行結果を元にして、エラー処理などを実現できるようになりました。

- 現在、値を返却できる対象となるのは ActionScriptのPreScript です。PostScriptでは、値の返却はされません。
- 結果は、resolve() / reject() により返します。

対象API

- [CreateItem](/docs/v0/item-actions/CreateItem)
- [UpdateItem](/docs/v0/item-actions/UpdateItem)
- [ExecuteAction API](/docs/v0/item-actions/ExecuteAction)

サンプルコードも更新されています
```
(async function(data) {
    return new Promise((resolve, reject) => {

        const appId = "TestApp";
        const datastoreId = "TODO-SAMPLE"
    
        logger.log("Process starting...")
    
        // first call
        const url = `api/v0/applications/${appId}/datastores/${datastoreId}/items/search`;
        const payload = {
            use_display_id: true,
            omit_fields_data: true,
            conditions: [],
            per_page: 1,
            page: 1
        }
        callAPIAsync('POST', url, payload).then(res => {
            logger.log("Proc1 Called")

            // next call
            const url = `api/v0/applications/${appId}/datastores/${datastoreId}/items/search`;
            const payload = {
                use_display_id: true,
                omit_fields_data: true,
                conditions: [],
                per_page: 1,
                page: 1
            } 
            return callAPIAsync('POST', url, payload)  // you can return promise
        }).then(res => {
            logger.log("Proc2 Called")

            // call resolve() if you want to proceed
            resolve(); 

        }).catch(e => {
            logger.error("ERR !!")

            // call reject() if you want to stop action execution
            reject({
                 "result":  "Stopped", 
                 "error" : "error messages"
            });  // result object will be returned to Hexabase's API result 
        });    

    });
})
```
各APIの返却値（PreActionScriptで、reject()をコールした場合）
```
{
    "details": {
        "result": {
            "error": "error messages",
            "result": "Stopped"
        },
        "status": "REJECTED",
        "stop_execution": true
    },
    "error": ""
}
```

### CLI：コマンドエイリアスの追加

Hexabase CLI に、コマンドエイリアスを追加しました。このコマンドエイリアスは、Hexabase CLIのショートカットとして利用できます。

これらのコマンドは、引数として対象を記述しなくても、インタラクティブに選択できます。

主なコマンドエイリアスは、次の通りです。

|ALIASES|COMMAND|Usage|
|:----|:----|:----|
|hx env|hx contexts:get|コンテキスト一覧を取得|
|hx use|hx contexts:use|コンテキストを選択|
|hx login|hx contexts:login|コンテキストにログイン|
|hx ws|hx workspaces:get|ワークスペース一覧を取得|
|hx sel|hx workspaces:use|ワークスペースを選択|
|hx pj|hx projects:get|プロジェクト/アプリケーションを選択|
|hx ds|hx datastores:get|データベースを選択|
|hx fd|hx fields:get|フィールド一覧を取得|
|hx st|hx statuses:get|ステータス一覧を取得|
|hx ac|hx actions:get|アクション一覧を取得|


このほかのコマンドエイリアスは、"hx help [Command]" または[hexabase-cli - npm](https://www.npmjs.com/package/hexabase-cli)で確認ください。

Hexabase CLI をアップデートするには、以下のコマンドを実行してください。

```
$ npm update -g hexabase-cli
```


### 機能拡張：自動採番型のゼロ埋め

自動採番型フィールドに「ゼロ埋めする」オプションを追加しました。これは、指定の桁数に満たない場合、上位の桁を自動的にゼロで埋める機能です。

この機能は、CSVアップデート・CSV追加インポートでも有効となります。新規インポートには対応しておりません。

「ゼロ埋めする」オプションを使用するには、次のように操作します。

1. アイテム詳細を表示する
2. 「項目を編集・追加する」を呼び出す
3. 自動採番型フィールドの画面項目設定を呼び出す
4. 画面項目の種類で、「ゼロ埋めする」オプションをオンにする

![ゼロ埋めするオプション](/img/blogs/2021-05-14/zeropadding.png)


### 機能改善：ワークスペースにリダイレクト設定を追加

従来、管理画面にアクセスする権限を持たないユーザーが管理画面にログインすると、ワークスペースの作成画面が表示され、ワークスペースの作成ができてしまっていました。

今回、このようなユーザーのリダイレクト設定を追加しました。

リダイレクト設定は、ワークスペース設定 > リダイレクト設定でおこないます。

![リダイレクト設定](/img/blogs/2021-05-14/redirect_settings.png)

### 機能改善：画面項目に「検索インデックスの有無」オプションを追加しました

画面項目に、「検索インデックスの有無」オプションを追加して、データベースインデックスの作成有り無しを設定できるようにしました。

![検索インデックスの有無](/img/blogs/2021-05-14/has_db_index.png)

### 機能改善：ユーザーアカウント関連

- RemoveUser APIを使用してユーザーを削除した場合、グループからユーザを削除しても、アプリケーションのロールが削除されない現象を解消しました。
- 初期ユーザー登録画面とパスワードリセット画面で、パスワードポリシーを有効にしました。

### 機能改善：画面項目IDのエラーチェックを強化

画面項目IDの設定時、特定のIDや既存IDを利用できないようエラーチェックを強化しました。
画面項目のIDに以下の値は利用できません。
- _id
- a_id
- access_keys
- created_at
- created_by
- d_id
- i_id
- p_id
- rev_no
- status_id
- title
- unread


