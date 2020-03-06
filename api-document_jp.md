Hexalink APIの解説
==================

## 本ドキュメントの目的
本ドキュメントは、Hexalinkプラットホームを外部から利用するAPIについて説明しています。


## バージョン

```
Version 0
```

## 事前準備

- HexalinkプラットホームのベースURIを確認します。ベースURIは、テナントごとに異なります
- Hexalinkプラットホームでユーザー登録します


## APIトークンの取得

- 本APIでは、ログインAPIでユーザーを指定します。各APIは、このユーザが持つ権限に従って実行されます
- 本APIを使用するには、最初にログインAPIを実行して、トークンを取得します
- ログインAPIを除く各APIの実行時には、HTTPリクエストヘッダに以下のようにトークンを指定します

```
Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX(発行したトークン)
```

## API一覧

- 画面入力ID(display_id)に対応しているAPIは、app-id, datastore-id, field-id として、画面から入力したIDを指定することが可能です。


### 認証関連API

本APIを使用するには、最初にログインAPIを実行して、トークンを取得します

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|1|POST|/api/v0/login|ログイン|メールアドレス|JSON|-|
|60|POST|/api/v0/users/logout|ログアウト| トークン|JSON|-|

### ワークスペース関連API

「ワークスペース」は、Hexalinkのアプリケーションをまとめる領域です。業務の種類や内容に合わせてワークスペースを用意して、複数の業務アプリケーションをまとめておきます。

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|2|GET|/api/v0/workspaces|ワークスペース一覧を取得|-|JSON|-|
|3|POST|/api/v0/workspaces/:workspace-id/select|ワークスペースを選択|ワークスペースID|-|-|

### グループ関連API

「グループ」は、ユーザーを役割りに応じてまとめる機能です。

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|4|GET|/api/v0/grouptree|ワークスペース内のグループ情報を取得|-|ツリー型JSON|-|
|49|GET|/api/v0/groups/:group-id|指定したグループ情報とその配下のグループ一覧を取得|-|JSON|-|
|44|GET|/api/v0/groups|グループツリー一覧取得|グループ名、ID、子グループ|JSON|-|
|45|POST|/api/v0/groups/:parent-group-id|新規でグループを指定グループ配下に作成|アクセスキー、グループID|JSON|-|
|5|POST|/api/v0/groups|グループを作成|グループ名、ID|成功／エラー|-|
|6|PUT|/api/v0/groups/:group-id|グループを更新|グループ名、ID|成功／エラー|-|
|7|DELETE|/api/v0/groups/:group-id|グループを削除|-|成功／エラー|-|
|63|POST|/api/v0/grouproles/:group-id|グループにひも付くロールの洗い変えをする|-|成功／エラー|-|
|64|PUT|/api/v0/grouproles/:group-id|グループにロールを追加する|-|成功／エラー|-|

### ユーザー関連API

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|10|GET|/api/v0/users/all/g/:group-id|ユーザー一覧の取得|グループID|JSON|-|
|46|GET|/api/v0/groups/:group-id/users|指定されたグループのユーザー一覧の取得|グループID|JSON|-|
|43|GET|/api/v0/userinfo|ユーザーの関連情報取得|ユーザーID|JSON|-|
|47|POST|/api/v0/users|グループに新規ユーザーを作成|ユーザーID|JSON|-|
|51|DELETE|/api/v0/users|グループからユーザーを削除|グループID、ユーザーID|成功／エラー|-|
|50|GET|/api/v0/workspaces/:workspace-id/users|指定されたワークスペースのユーザー一覧の取得|ワークスペースID|JSON|-|
|52|POST|/api/v0/userinvite|ユーザーを招待|ユーザーメール、ドメイン|JSON|-|
|53|POST|/api/v0/users/registration|ユーザーの初期登録開始|ユーザー登録情報|JSON|-|
|54|GET|/api/v0/users/registration/confirm|ユーザーの初期登録の確認|無|JSON|-|
|55|POST|/api/v0/users/registration/confirm|ユーザーの初期登録、パスワード登録|無|JSON|-|
|56|POST|/api/v0/users/password/forgot|ログイン前、パスワード初期化 開始|登録されているemailの有無|JSON|-|
|57|PUT|/api/v0/users/password/forgot|ログイン前、パスワード初期化 パスワードを変更|パスワードが変更される|JSON|-|
|58|GET|/api/v0/users/password/validate|ログイン前、パスワード初期化　パスワー変更状態の確認|更新時刻の状態取得|JSON|-|
|59|PUT|/api/v0/users/password|ログイン後、パスワード変更|変更成功の有無|JSON|-|
|61|PUT|/api/v0/userinfo|ユーザー名、情報の更新|email, ユーザー名、画像|JSON|-|
|65|POST|/api/v0/applications/:project-id/userroles|ユーザーにアプリケーションのロールを付与する|ロールID、ユーザーID|JSON|-|
|66|DELETE|/api/v0/applications/:project-id/userroles|ユーザーからアプリケーションのロールを外す|ロールID、ユーザーID|JSON|-|

### アプリケーション関連API

Hexalinkでは、「アプリケーション」ごとに、データベース・データレポート・ダッシュボードなどをまとめています。新しくワークプレースを作成すると「新しいアプリケーション」という名前のアプリケーションが作成されています。

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|11|GET|/api/v0/workspaces/:workspace-id/applications|アプリケーション一覧の取得|ワークスペースID|JSON|-|



### フィールド関連API

Hexalinkでは、「アイテム」のカラムを「フィールド」または「画面項目」と呼びます。

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|15|GET|/api/v0/applications/:app-id/datastores/:datastore-id/fields|フィールド一覧を取得|データストアID|JSON|✓|


### アイテム関連API

Hexalinkでは、データベースの各データを「アイテム」と呼びます。表の横１行がアイテムになります。一般的なRDBのレコードに相当します。

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|19|POST|/api/v0/applications/:app-id/datastores/:datastore-id/items/search|アイテム一覧を取得|検索条件|JSON|✓|
|20|POST|/api/v0/applications/:app-id/datastores/:datastore-id/items/new|新規アイテムを作成|新規登録データ|JSON|✓|
|21|POST|/api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id|アイテムを編集|更新データ|JSON|✓|
|22|DELETE|/api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id|アイテムを削除|-|JSON|✓|
|23|DELETE|/api/v0/applications/:app-id/datastores/:datastore-id/items/delete|条件を指定してアイテムを削除|検索条件|JSON|✓|
|24|POST|/api/v0/applications/:app-id/datastores/:datastore-id/items/addlink/:item-id|関連アイテムとのリンクを追加|-|JSON|✓|
|25|POST|/api/v0/applications/:app-id/datastores/:datastore-id/items/updatelink/:item-id|関連アイテムとのリンクを更新|-|JSON|✓|
|26|DELETE|/api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id|関連アイテムとのリンクを削除|-|JSON|✓|
|27|GET|/api/v0/datastores/:datastore-id/items/:item-id|アイテムの詳細情報、アクションリストを取得|アイテムID|JSON|-|
|62|POST|/api/v0/applications/:project-id/datastores/:datastore-id/items/action/:action-id|指定アクションを実行する|アイテム更新|JSON|✓|
|28|GET|/api/v0/datastores/:datastore-id/items/:item-id/links/:linked-datastore-id"|アイテムに関連するアイテム一覧を取得|アイテムID,関連先データベースID|JSON|-|
|31|POST|/api/v0/items/:item-id/actions/:action-id|アクションを実行|アクションID|成功／エラー|-|
|33|POST|/api/v0/datastores/:datastore-id/items/new|新規アイテムの作成|データストアID|JSON|✓|
|34|GET|/api/v0/datastores/:datastore-id/items/:item-id/histories|履歴を取得|アイテムID|JSON|-|
|67|POST|/api/v0/datastores/:datastore-id/items/histories|コメント履歴を登録|アイテムID|null|-|

### データインポート関連API
|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|16|データインポート|POST|/api/v0/applications/:project-id/datastores/:datastore-id/import|✗|CSVデータのインポート|CSVデータ(multipart)、ほか|処理ID(:id)|-
|17|　|GET|/api/v0/datastores/:datastore-id/import/:id|✗|CSVインポートの結果取得|処理ID(:id)|処理結果JSON|-

### 添付ファイル関連API

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|29|POST|/api/v0/items/:item-id/fields/:field-id/attachments|添付ファイルフィールドにファイルをアップロード|-|file_id|-|
|30|DELETE|/api/v0/items/:item-id/fields/:field-id/attachments/:attachment-id|添付ファイルフィールドのファイルを削除|添付ファイルID|成功／エラー|-|
|35|GET|/api/v0/files/:file-id|添付ファイルデータを取得|ファイルID|該当ファイルデータ（バイナリデータ）|-|


### データレポート関連API

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|37|GET|/api/v0/applications/:project-id/reports/:report-id|レポートデータの取得|-|JSON|✓|
|38|GET|/api/v0/applications/:project-id/reports/:report-id/conditions|レポートの検索条件を取得|-|JSON|✓|
|39|POST|/api/v0/applications/:project-id/reports/:report-id/filter|条件を指定してレポートデータを取得|検索条件|JSON|✓|


### チャート(ダッシュボード)関連API

|No    |Method  |URI  |目的|主なパラメータ|結果|画面入力ID(display_id)への対応|
|:---------:|:----------|:-------|:------|:-----|:------------|:-----|
|40|GET|/api/v0/applications/:project-id/charts/:chart-id|チャートデータの取得|-|JSON|✓|
|41|GET|/api/v0/applications/:project-id/charts/:chart-id/conditions|チャートの検索条件を取得|-|JSON|✓|
|42|POST|/api/v0/applications/:project-id/charts/:chart-id/filter|条件を指定してチャートデータを取得|検索条件|JSON|✓|




## API仕様詳細

### 認証関連API

本APIを使用するには、最初にログインAPIを実行して、トークンを取得します

#### ログイン
Hexalinkにログインして、トークンを取得します
##### Method
POST
##### Request Format
```
/api/v0/login
```
##### Params
`Content-Type : application/json`
```JSON
{
  "email": "Hexalinkに登録してあるユーザーのメールアドレス",
  "password": "パスワード"
}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/login
```
##### Response Sample
```JSON
{
    "token": "xxxxxxxxx"
}
```

#### ログアウト
トークンを使用しログアウトを行う
##### Method
POST
##### Request Format
```
/api/v0/users/logout
```
##### Params
`Content-Type : application/json`
```
無
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/users/logout
```
##### Response Sample
```
無
```

### ワークスペース関連API

「ワークスペース」は、Hexalinkのアプリケーションをまとめる領域です。業務の種類や内容に合わせてワークスペースを用意して、複数の業務アプリケーションをまとめておきます。

#### ワークスペース一覧
ワークスペースの一覧を取得します
##### Method
GET
##### Request Format
```
/api/v0/workspaces
```
##### Params
```
特になし
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/workspaces
```

##### Response Sample
```JSON
{
    "workspaces": [
        {
            "workspace_id": "582b26d7fb90a15e0c24ad80",
            "workspace_name": "Testワークスペース"
        },
        {
            "workspace_id": "58dfcd20fbfcba39c881021e",
            "workspace_name": "ABC株式会社"
        },
        {
            "workspace_id": "58ca3597cce5fe3ea0a42fa8",
            "workspace_name": "XXXX部門"
        },
        {
            "workspace_id": "58ca3211cce5fe2e84446cd3",
            "workspace_name": "○○○プロジェクト"
        },
    ]
}
```
#### ワークスペースの選択
利用したいワークスペースを選択します
##### Method
POST
##### Request Format
```
/api/v0/workspaces/:workspace-id/select
```
##### Params
```
workspace-id    : ワークスペースID
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/select
```
##### Response Sample
```
null
```

### グループ関連API

「グループ」は、ユーザーを役割に応じてまとめる機能です。

#### グループ情報を取得
ワークスペース内のグループをツリー形式のJSONにて取得します

##### Method
GET
##### Request Format
```
/api/v0/grouptree
```
##### Params
```
特になし
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/grouptree
```
##### Response Sample
```JSON
{
    "error": null,
    "result": [
        {
            "childGroups": [
                {
                    "childGroups": [
                        {
                            "childGroups": [],
                            "display_id": "addfaa",
                            "id": "5972e630cce5fe6c280cd242",
                            "name": "test",
                            "show_child": true
                        }
                    ],
                    "display_id": "ssss",
                    "id": "5972ebebcce5fe6c280cd246",
                    "name": "sss",
                    "show_child": true
                },
                {
                    "childGroups": [
                        {
                            "childGroups": [
                                {
                                    "childGroups": [],
                                    "display_id": "etsetse",
                                    "id": "5972d10dcce5fe6c280cd240",
                                    "name": "test",
                                    "show_child": true
                                }
                            ],
                            "display_id": "aaa",
                            "id": "593b9674fbfcba27707e2345",
                            "name": "aaaa",
                            "show_child": true
                        }
                    ],
                    "display_id": "TEST_G",
                    "id": "593b9660fbfcba27707e2343",
                    "name": "テスト用グループ2",
                    "show_child": true
                },
                {
                    "childGroups": [
                        {
                            "childGroups": [
                                {
                                    "childGroups": [],
                                    "display_id": "TEST333",
                                    "id": "593b9688fbfcba27707e2347",
                                    "name": "test3",
                                    "show_child": true
                                }
                            ],
                            "display_id": "123",
                            "id": "593a7ee5cce5fe9fc0192326",
                            "name": "下の階層",
                            "show_child": true
                        }
                    ],
                    "display_id": "583278f6fb90a122e2646527",
                    "id": "583278f6fb90a122e2646527",
                    "name": "NEW",
                    "show_child": true
                }
            ],
            "display_id": "582b26d8fb90a15e0c24ad81",
            "id": "582b26d8fb90a15e0c24ad81",
            "name": "WORKSPACE.DEFAULT_GROUP_NAME",
            "show_child": true
        }
    ]
}
```
#### 指定したグループ情報とその配下のグループ一覧を取得

##### Method
GET
##### Request Format
```
/api/v0/groups/:group-id
```
##### Params

`Content-Type : application/json`

##### Request Sample
```
POST https://api.xxx.com/api/v0/groups
```
##### Response Sample
```JSON
{
    "error": "",
    "group": {
        "g_id": "親グループID",
        "group_id": "親グループのDISPLAY_ID",
        "name": "親グループ名",
        "index": 0　//("親グループ位置")
    },
    "children": [], //("配下グループのグループID")
    "count": 0 //（"親グループの配下数"）
}
```

##### Request Sample2
```
POST https://api.xxx.com/api/v0/groups/5c5fd6c084f4be2574e2bcb2
```
##### Response Sample2
```JSON
{
    "error": "",
    "group": {
        "g_id": "親グループID",
        "group_id": "親グループのDISPLAY_ID",
        "name": "親グループ名",
        "index": 0 //("親グループ位置")
    },
    "children": [
        {
            "g_id": "配下グループID",
            "group_id": "配下グループのDISPLAY_ID",
            "name": "配下グループ名,　例：事業部A2",
            "index": 0 //("配下グループ位置")
        },
        {
            "g_id": "配下グループID",
            "group_id": "配下グループのDISPLAY_ID",
            "name": "配下グループ名,　例：事業部A2",
            "index": 1//("配下グループ位置")
        }
    ],
    "count": 2 //（"親グループの配下数"
}
```

#### 新規でグループを指定グループ配下に作成

##### Method
POST
##### Request Format
```
/api/v0/groups/:parent-group-id
```
##### Params

`Content-Type : application/json`
```JSON
{
  "workspace-id": "必須　ワークスペース配下を指定してグループを作成",
  "parent-group-id": "必須　グループ配下を指定してグループを作成"
}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/groups/:parent-group-id
```
##### Response Sample
```JSON
{
    "group": {
        "access_key": "作成されたグループのアクセスキー",
        "created_at": "作成時間　年-月-日時刻",
        "display_id": "グループのDisplay_ID",
        "g_id": "作成されたグループID",
        "id": "作成されたグループID",
        "index": 0, //("int このグループレイヤーのindex位置")
        "is_root": false, //("bool グループツリー上最上位に位置される場合true")
        "name": "グループ名"
    },
    "groupTree_datastores_res": null　// ("配下にグループ有るかどうか")
}
```

#### グループの登録
新しいグループを登録します。登録したグループをツリーの直下に配置します
##### Method
POST
##### Request Format
```
/api/v0/workspaces/:workspace-id/groups
```
##### Params
```
workspace-id    : ワークスペースID
```
`Content-Type : application/json`
```JSON
{
  "name": "グループ名",
  "display_id": "グループを識別するID（組織コードなど）"
}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups
```
##### Response Sample
```JSON
{
    "group": {
        "name": "グループ名"
        "id": "59bf3b300e24791418da1aa1",
        "g_id": "59bf3b300e24791418da1aa1",
        "access_key": "59bf3b300e24791418da1aa2",
        "display_id": "グループを識別するID（組織コードなど）",
        "created_at": "2017-09-18T12:19:12.007119961+09:00",
    }
}
```



#### グループの更新
指定したグループ名を更新します。
##### Method
PUT
##### Request Format
```
/api/v0/groups/:group-id
```
##### Params
```
workspace-id    : ワークスペースID
group-id        : グループID
```
`Content-Type : application/json`
```JSON
{
  "name": "グループ名→new name",
  "display_id": "グループを識別するID（組織コードなど）"
}
```
##### Request Sample
```
PUT https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups/59bf3b300e24791418da1aa1
```
##### Response Sample
```
null
```

#### グループを削除
指定したグループ名を削除します
##### Method
DELETE
##### Request Format
```
/api/v0/groups/:group-id
```
##### Params
```
group-id        : グループID
```
`Content-Type : application/json`
```JSON
{
  "workspace-id": "グループ名→new name",
  "group-id": "グループを識別するID（組織コードなど）"
}
```
##### Request Sample
```
DELETE https://api.xxx.com/api/v0/groups/59bf3b300e24791418da1aa1
```
##### Response Sample
```
null
```

#### グループにひも付くロールの洗い変えをする

##### Method
POST
##### Request Format
```
/api/v0/grouproles/:group-id
```
##### Params
`Content-Type : application/json`
```JSON
{
  "group_roles":
  [
    {
      "app_id":"アプリケーションディスプレイＩＤ-１",
      "role_id":"ロールディスプレイID-1"
    },
    {
      "app_id":"アプリケーションデイスプレイＩＤ-２",
      "role_id":"ロールディスプレイID-2"
    }
  ]
}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/grouproles/:group-id
```
##### Response Sample
```
{} //空のオブジェクトが返ってくる
```
#### グループにロールを追加する

##### Method
PUT
##### Request Format
```
/api/v0/grouproles/:group-id
```
##### Params
URL Param
```
group-id :  グループID
```

`Content-Type : application/json`
```JSON
{
  "group_roles":
  [
    {
      "app_id":"追加対象のアプリケーションディスプレイＩＤ-１",
      "role_id":"追加対象のロールディスプレイID-1"
    },
    {
      "app_id":"追加対象のアプリケーションデイスプレイＩＤ-２",
      "role_id":"追加対象のロールディスプレイID-2"
    }
  ]
}
```
##### Request Sample
```
PUT https://api.xxx.com/api/v0/grouproles/:group-id
```
##### Response Sample
```
{} //空のオブジェクトが返ってくる
```

### ユーザー関連API

#### 指定されたグループのユーザー一覧の取得
指定されたグループのユーザー一覧を取得する
##### Method
GET
##### Request Format
```
/api/v0/users/api/v0/groups/:group-id/users
```
##### Params
URL Param
```
group-id :  グループID
```
`Query Param`
```
recursive        : bool  //複数ユーザー取得
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/groups/5df9d7d7aeae8e2fa894e324/users
```

##### Response Sample

```JSON
{
    "members": [
        {
            "u_id": "ユーザーID",
            "username": "ユーザー名",
            "email": "ユーザーのemail",
            "profile_pic": "https://storage.googleapis.com/linker/pub/default.png", //("画像のストレージ領域")
            "confirmed": true, //("bool, このユーザーが確認済みかどうか")
            "email_sent": true,//("bool, このユーザーにemailが送られたかどうか")
            "is_sv": true //("bool, このユーザーがスーパバイザー型かどうか、true=supervisorである")
        } //("ユーザー毎にオブジェクトが返される")
    ],
    "count": 1//("int、このグループ内部にいるユーザー数")
}
```

#### ユーザーの関連情報取得
tokenで指定されたユーザーに関連した情報取得
##### Method
GET
##### Request Format
```
/api/v0/userinfo
```
##### Params

##### Request Sample
```
GET https://api.xxx.com/api/v0/userinfo
```

##### Response Sample
```JSON
{
    "u_id": "現在のユーザ",
    "username": "ユーザー名",
    "email": "現在のユーザーのemailアドレス",
    "profile_pic": "ユーザーのプロファイル画像の保存先",
    "current_workspace_id": "現在使用しているワークスペースのID",
    "is_ws_admin": true   //(bool このユーザーにワークスペースのアドミン権限が付与されているかどうか, trueはアドミン権限有り)
}
```

#### グループに新規ユーザーを作成
指定されたグループに新規ユーザーを作成する
##### Method
POST
##### Request Format
```
/api/v0/users
```
##### Params
`Content-Type : application/json`
```JSON
{
  "email": "グループに追加したいemailアドレス",　//必須
  "g_id": "グループを識別するID", //必須
  "w_id": "ワークスペースのID",
  "username": "グループに追加したいユーザー名"
}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/users
```

##### Response Sample
```JSON
{
    "added": false,　//("bool 追加済みかどうか")
    "exists": false, //("b0ol 既に存在するユーザー　false=新規で存在しない新しいユーザー")
    "user_profile": { //("ユーザープロファイルオブジェクト")
        "confirmed": false,　//("bool ユーザーemail確認済み　false=email上確認されていない")
        "email": "登録されたユーザーのemail", 
        "email_sent": false, //("bool emailが送られたかどうか　false=既に対象emailにemailが送られている")
        "profile_pics": [//("ユーザープロファイル画像オブジェクト")
            {
                "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"　//("ユーザープロファイルに使用されている画像の保存先")
            }
        ],
        "u_id": "登録されたユーザーのID",
        "username": "登録されたユーザー名"
    }
}
```

#### ユーザーの初期登録開始
ユーザーの初期登録開始、指定ユーザーのメールに登録リンク送信
##### Method
POST
##### Request Format
```
/api/v0/users/registration
```
##### Params
```JSON
{
  "email":"メールを送信したい対象 例:test@gmail.com", //必須
  "username":"登録したいユーザー名",
  "registration_domain":"登録するドメイン",　//必須
  "registration_path":"サインアップしたユーザーを確認するためのパス", // オプション　(デフォルト： 'confirm_email'）
  "hostname":"登録するホスト名",　//必須
  "protocol":"例　http, https", 
  "additional_info":
    {
      "ユーザーの指定したいフィールド１":"ユーザー指定の値１",
      "ユーザーの指定したいフィールド2":"ユーザー指定の値2"
    }
　}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/users/registration
```

##### Response Sample
```JSON
{
  "confirmation_id": "確認ID", 
  "email": "初期登録されたemail", 
  "status": 200
}
```

#### ユーザーの初期登録の確認
ユーザーの初期登録の確認、確認情報を確認済みにする

##### Method
GET
##### Request Format
```
/api/v0/users/registration/confirm
```
##### Params
```Qury Params
id:sdafasdfasdfadsffdsafasdf //必須　ユーザー初期登録シーケンスのconfirmation_id
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/users/registration/confirm?sdafasdfasdfadsffdsafasdf
```

##### Response Sample
```
無
```

#### ユーザーの初期登録、パスワード登録
ユーザーの初期登録、パスワード登録
##### Method
POST
##### Request Format
```
/api/v0/users/registration/confirm
```
##### Params
```JSON
{
  "confirmation_id":"確認用のID", //必須
  "email":"登録されるemail",　//必須
  "username":"登録されるユーザー名",
  "workspace":"作成するワークスペース名", 
  "password": "設定するパスワード",　// 必須
  "additional_info":{"自由入力フィールド1":"自由入力された値1","自由入力フィールド2":"自由入力された値2"}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/users/registration/confirm
```

##### Response Sample
```JSON

{​
　"token": "ログイン用アクセストークン取得　例：dfgsdfsdfsdgfafas213dfdc2"
}
```

#### ログイン前、パスワード初期化 開始
ログインしていない状態でのパスワード初期化処理を開始する, emailを送信する
##### Method
POST
##### Request Format
```
/api/v0/users/password/forgot
```
##### Params
```JSON
{
  "email":"パスワードをリセットしたいユーザーのemail",　//必須
  "host":"例：https://stg.xxxxxx.com" //必須
}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/password/forgot
```

##### Response Sample
```JSON
{
  "valid_email": true //パスワード初期化をしたいemailの有無
}
```

#### ログイン前、パスワード初期化 パスワードを変更する
ログインしていない状態でのパスワードを変更する、前提条件として変更用のパスワード初期化用のIDが必要
##### Method
PUT 
##### Request Format
```
/api/v0/users/password/forgot
```
##### Params
```JSON
{
  "new_password":"必須　新規作成パスワード　例：test",
  "confirm_password":"必須　確認用パスワード 例：test この値は新規作成の値と同じでなければならない",
  "id":"必須　パスワード初期化開始のapi送信後にemailのリンク内部に埋め込まれた情報をここに入れる"
}
```
##### Request Sample
```
PUT https://api.xxx.com/api/v0/users/password/forgot
```

##### Response Sample
```
無
```

#### ログイン前、パスワード初期化　パスワー変更状態の確認
ログインしていない状態でのパスワード変更状態の確認
##### Method
GET 
##### Request Format
```
/api/v0/users/password/validate
```
##### Params
```Query Params
id: laskdhoifvoasdijflasmdlm //必須　emailで取得されたid情報
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/users/password/validate
```

##### Response Sample
```
{​
 "_id": "5e1484d4aeae8e202819528d",
 "accessed": true,　// bool パスワード変更処理開始後アクセス済みかどう
 "created_at": "2020-01-07T13:17:08.01Z", //パスワード作成日
 "isElapsed": false,　// bool パスワード変更処理の期限切れかどうか
 "updated_at": "2020-01-07T13:31:20.961Z"　// パスワード更新日
}
```

#### ログイン後、パスワード変更
ログインしているユーザーのパスワードを変更する
##### Method
PUT
##### Request Format
```
/api/v0/users/password
```
##### Params
```JSON
{
  "confirm_password":"必須　新しいパスワードの確認 //入力内容はnew_paswordと同じで有る必要が有る",
  "new_password":"必須　新しいパスワード",
  "old_password":"必須　今まで使用していたパスワード"
}
```
##### Request Sample
```
PUT https://api.xxx.com/api/v0/users/password
```

##### Response Sample
```
{
  "error": null //エラーの有無
}
```

#### ユーザー名、情報の更新
ユーザーの名、画像を更新する
##### Method
PUT
##### Request Format
```
/api/v0/userinfo
```
##### Params
```JSON
{
  "email":"ユーザのemail",　//必須
  "username":"ユーザー名",　
  "user_id":"ユーザーID",　//必須
}

```
##### Request Sample
```
PUT https://api.xxx.com/api/v0/userinfo
```

##### Response Sample
```
{"error": null //エラーの有無}
```

#### ユーザーにアプリケーションのロールを付与する

##### Method
POST
##### Request Format
```
/api/v0/applications/:project-id/userroles
```
##### Params
URL Params
```
project-id: アプリケーション表示ID
```

```JSON
{
    "user_id": "ロールを付加したい対象のユーザーID",
    "role_id": "ロール表示ID" 
}
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/:project-id/userroles
```

##### Response Sample
Status 200
```
{"error": null //エラーの有無}
```
Status 403
```
{
    "code": 999,
    "message": "No privileges to the Application"//ユーザーのプロジェクト権限を追加する権限が無い
}
```

#### ユーザーからアプリケーションのロールを外す

##### Method
DELETE
##### Request Format
```
/api/v0/applications/:project-id/userroles
```
##### Params
URL Params
```
project-id: アプリケーション表示ID
```

```JSON
{
    "user_id": "ロールを外したい対象のユーザーID",
    "role_id": "ロール表示ID" 
}
```
##### Request Sample
```
DELETE https://api.xxx.com/api/v0/applications/:project-id/userroles
```

##### Response Sample
Status 200
```
{"error": null //エラーの有無}
```
Status 403
```
{
    "code": 999,
    "message": "No privileges to the Application"//ユーザーのプロジェクト権限を外す権限が無い
}
```



#### ワークスペースのユーザー一覧の取得
指定されたワークスペースのユーザー一覧の取得する

##### Method
GET
##### Request Format
```

/api/v0/workspaces/:workspace-id/users
```
##### Params
```
workspace-id :  ワークスペースID
admin_only : 管理者のみを返すためのブール値
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/workspaces/5d8b44adef2261640ab04ef6/users?admin_only=true
```

##### Response Sample
```JSON
{
    "5d8b44adef2261640ab04ef7": [
        {
            "access_key": "5d8b4205ef22614ddd2d72c2",
            "created_at": "2019-09-25T19:31:33.855396+09:00",
            "id": "5d8b419bef22614ddd2d72c1",
            "u_id": "5d8b419bef22614ddd2d72c1",
            "updated_at": "2019-12-05T15:24:23.522866+09:00",
            "username": "x.xxx"
        }
    ],
    "5e12c871ef22619dc9910714": [
        {
            "access_key": "5d8b4205ef22614ddd2d72c2",
            "created_at": "2019-09-25T19:31:33.855396+09:00",
            "id": "5d8b419bef22614ddd2d72c1",
            "u_id": "5d8b419bef22614ddd2d72c1",
            "updated_at": "2019-12-05T15:24:23.522866+09:00",
            "username": "x.xxx"
        }
    ],
    "5e12c89fef22619dc9910716": [
        {
            "access_key": "5d8b4205ef22614ddd2d72c2",
            "created_at": "2019-09-25T19:31:33.855396+09:00",
            "id": "5d8b419bef22614ddd2d72c1",
            "u_id": "5d8b419bef22614ddd2d72c1",
            "updated_at": "2019-12-05T15:24:23.522866+09:00",
            "username": "x.xxx"
        }
    ]
}
```

#### グループからユーザーを削除
グループからユーザーを削除する

##### Method
DELETE

##### Request Format
```
/api/v0/users
```

##### Params
`Content-Type : application/json`
```JSON
{
    "g_id": "グループを識別するID", //必須
    "u_id": "ユーザーを識別するID", //必須
    "w_id": "ワークスペースを識別するID"
}
```

##### Request Sample
```
DELETE https://api.xxx.com/api/v0/users
```

##### Response Sample
```JSON
{
    "error": null
}
```

#### ユーザーを招待
ユーザーを招待する

##### Method
POST

##### Request Format
```
/api/v0/userinvite
```

##### Params
`Content-Type : application/json`
```JSON
{
    "users": [
        {
            "email": "xxx@b-eee.com"
        },
        {
            "email": "yyy@b-eee.com"
        }
    ],
    "domain": "app.xxx.com",
    "invitation_path": "招待されたユーザーを確認するためのパス" // オプション (デフォルト： 'confirm_email')
}
```

##### Request Sample
```
POST https://api.xxx.com/api/v0/userinvite
```

##### Response Sample
```JSON
[
    {
        "email": "xxx@b-eee.com",
        "stats": 200
    },
    {
        "email": "yyyC@b-eee.com",
        "stats": 200
    }
]
```

### アプリケーション関連API

Hexalinkでは、「アプリケーション」ごとに、データベース・データレポート・ダッシュボードなどをまとめています。新しくワークプレースを作成すると「新しいアプリケーション」という名前のアプリケーションが作成されています。

#### アプリケーション一覧の取得
指定ワークスペース配下のアプリケーション（データストア含む）の一覧を取得します
##### Method
GET
##### Request Format
```
/api/v0/workspaces/:workspace-id/applications
```
##### Params
```
workspace-id    : ワークスペースID
```

##### Request Sample
```
GET https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/applications
```

##### Response Sample
```JSON
{
    "application_id": "59bf424c0e247918255de008",
    "name": "アプリケーション1",
    "display_id": "Prj-U0QgJxXl",
    "datastores": [
        {
            "datastore_id": "59bf42550e2479186a6c6c70",
            "name": "データストア1"
        }
    ]
}
```


### フィールド関連API

Hexalinkでは、「アイテム」のカラムを「フィールド」または「画面項目」と呼びます。

#### フィールド一覧（DisplayIDを利用）
利用可能なフィールドの一覧を取得します（DisplayIDを利用）
##### Method
GET
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/fields
```
##### Params
```
app-id  : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したID）
```

##### Request Sample
```
GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/fields
```

##### Response Sample
```JSON
{
    "fields": {
        "59bf42550e247918255de00d": {
            "field_id": "59bf42550e247918255de00d",
            "name": "タイトル",
            "display_id": "タイトル",
            "dataType": "text",
            "search": true,
            "show_list": false,
            "as_title": true,
            "status": false,
            "fieldIndex": 0,
            "title_order": 1,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "59bf42550e247918255de00e": {
            "field_id": "59bf42550e247918255de00e",
            "name": "ステータス",
            "display_id": "Fld-nj1ZetGV",
            "dataType": "status",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": true,
            "fieldIndex": 1,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "5a26722e0e24794c979fa5b6": {
            "field_id": "5a26722e0e24794c979fa5b6",
            "name": "n1",
            "display_id": "Fld-BCgyvxUw",
            "dataType": "number",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "1",
            "max_value": "10"
        },
        "5a82bffd0e247948bd5cfaf2": {
          "field_id": "5a82bffd0e247948bd5cfaf2",
          "name": "ds1",
          "display_id": "Fld-qFRXJAF2",
          "dataType": "dslookup",
          "search": false,
          "show_list": true,
          "as_title": false,
          "status": false,
          "fieldIndex": 0,
          "title_order": 0,
          "full_text": false,
          "unique": false,
          "min_value": "",
          "max_value": "",
          "dslookup_info": {
            "dslookup_datastore_id": "5a82bfd50e247948dba5ad20",
            "dslookup_field_id": "ae47af42-3740-4840-a395-b1b5cc4a8b72"
          }
        },
        "5a8392390e247948bd5cfaf3": {
          "field_id": "5a8392390e247948bd5cfaf3",
          "name": "s1",
          "display_id": "Fld-FZR9lYNR",
          "dataType": "select",
          "search": true,
          "show_list": true,
          "as_title": false,
          "status": false,
          "fieldIndex": 0,
          "title_order": 0,
          "full_text": false,
          "unique": false,
          "min_value": "",
          "max_value": "",
          "options": [
            {
              "option_id": "dc236a0d-58b0-400e-88c7-9276207438cb",
              "sort_id": 0,
              "value": "選択1",
              "enabled": true
            },
            {
              "option_id": "a355531b-c80f-40e8-b6d7-3dc75cc9f3c5",
              "sort_id": 1,
              "value": "選択2",
              "enabled": true
            }
          ]
        }
    },
    "field_layout": {
        "59bf42550e247918255de00d": {
            "field_id": "59bf42550e247918255de00d",
            "sizeX": 9,
            "sizeY": 1,
            "col": 0,
            "row": 0
        },
        "5a26722e0e24794c979fa5b6": {
            "field_id": "5a26722e0e24794c979fa5b6",
            "sizeX": 6,
            "sizeY": 1,
            "col": 0,
            "row": 1
        },
    }
}
```

### アイテム関連API

Hexalinkでは、データベースの各データを「アイテム」と呼びます。表の横１行がアイテムになります。一般的なRDBのレコードに相当します。

#### アイテム一覧の取得（DisplayIDの利用）
アイテムの一覧を取得します
##### Method
POST
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/search
```
##### Params
```
app-id      : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
```
```
conditions      : 検索条件を指定
page            : ページ数
per_page        : 検索結果の件数
sort_field_id   : ソートするフィールドIDを指定
sort_order      : 昇順の場合"asc" 降順の場合"desc" 
```
（例）

`Content-Type : application/json`
```JSON
{
  "conditions": [
    {
      "id": "FIELD_ID", // Hexalink画面で入力したIDを指定
      "search_value": [
        "fa"
      ],
      "exact_match": false, // 完全一致で検索
    }
  ],
  "page": 1,
  "per_page": 100,
  "sort_field_id": "FIELD_ID", // Hexalink画面で入力したIDを指定
  "sort_order": "asc"
}
```

- 日付フィールドの場合、 `search_value` の一番目の値がFrom、2番目の値がToを意味します。
- どちらかにnullを指定すると、From～、To～といった検索が可能となります。
- 値に `"TODAY"`という文字列を入れると、本日～といった検索が可能です。（以下、サンプル）
```
{
  "conditions": [
    {
      "id": "58bbaa27fbfcba773851339f",
      "data_type": "text",
      "search_value": [
        "TODAY",
        null
      ],
    }
  ],
  "page": 1,
  "per_page": 100
}
```

##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/5c6363d984f4be7de0350445/datastores/DATABASEID/items/search
```
##### Response Sample
```JSON
{
    "items": [
        {
            "58bbaa27fbfcba773851339f": "fadfa",
            "58bbaa27fbfcba77385133a2": "新規",
            "_id": "596e2327fbfcbab8283dde09",
            "a_id": "58bbaa27fbfcba77385133ac",
            "access_keys": "",
            "created_at": "2017-07-19T00:03:06+09:00",
            "created_by": "58272f4efb90a148d8508d9c",
            "d_id": "58bbaa27fbfcba6098746061",
            "i_id": "596e2327fbfcbab8283dde09",
            "p_id": "586f6c2ccce5fe6ad071b1d4",
            "rev_no": "1",
            "status_id": "58bbaa27fbfcba77385133a4",
            "title": "fadfa",
            "unread": "0"
        },
        {
            "58bbaa27fbfcba773851339f": "ｆｈｓｆｇｓｄｆｇdadfa",
            "58bbaa27fbfcba77385133a2": "受付",
            "_id": "594255b8cce5fe234076d7d4",
            "a_id": "58bbaa27fbfcba77385133ac",
            "access_keys": "",
            "created_at": "2017-06-15T18:39:08+09:00",
            "created_by": "58272f4efb90a148d8508d9c",
            "d_id": "58bbaa27fbfcba6098746061",
            "i_id": "594255b8cce5fe234076d7d4",
            "p_id": "586f6c2ccce5fe6ad071b1d4",
            "rev_no": "2",
            "status_id": "58bbaa27fbfcba77385133a7",
            "title": "ｆｈｓｆｇｓｄｆｇdadfa",
            "unread": "0",
            "updated_at": "2017-07-19T00:02:57+09:00",
            "updated_by": "58272f4efb90a148d8508d9c"
        }
    ],
    "totalItems": 2
}
```

#### 新規アイテムを作成（DisplayIDの利用）
新規アイテムを作成します（Hexalink画面から入力したIDを指定）
##### Method
POST
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/new
```
##### Params
```
app-id      : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/new
```
#### Post Payload
（例）
`Content-Type : application/json`
```JSON
{
  "item": {
      "field_id": "登録データ",
      "title": "タイトル",
      "assignee": "担当者",
  }
}
```

##### Response Sample
```JSON
{
    "error": null,
    "history_id": "5d661782aa39559a80479492",
    "item_id": "5a2647410e24792d87451e34"
}
```

#### アイテムの編集（DisplayIDの利用）
指定したアイテムを更新します（Hexalink画面から入力したIDを指定）
##### Method
POST
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id
```
##### Params
```
app-id      : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
item-id         : 対象アイテムのID
```
Post パラメーターの例
```
{
    "history": {
        "comment": "test-comment"
    },
    "changes": [
        {
            "id": "CAR_TYPE",
            "value": "5d4c058baa39555618ac9e98" // select type
        },
        {
            "id": "CAR_NAME",
            "value": "名前のデータ" // text tyepe
        },
        {
            "id": "OPTIONS",
            "value": [ "58bbaa27fbfcba6098746061", "596e2327fbfcbab8283dde09"]  // checkbox type
        }
    ],
    "use_display_id" : true,
    "is_force_update": true
}
```

##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/edit/5d4c058baa39555618ac9e8b
```
##### Response Sample
```
null
```

#### アイテムの削除（DisplayIDの利用）
指定したアイテムを削除します（Hexalink画面から入力したIDを指定）
##### Method
DELETE
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id
```
##### Params
```
app-id      : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
item-id         : 対象アイテムのID
```
##### Request Sample
```
DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/items/delete/5d4c058baa39555618ac9e8b
```
##### Response Sample
```JSON
{
    "error": null,
    "history_id": "5d661782aa39559a80479492",
    "item_id": "5a2647410e24792d87451e34"
}
```

#### 条件を指定してアイテムを削除（DisplayIDの利用）
検索条件を指定して、条件にマッチしたアイテムを削除します
##### Method
DELETE
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/delete
```
##### Params
```
app-id      : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
```

`Content-Type : application/json`
```JSON
{
  "conditions": [
    {
      "id": "FIELD_ABC",
      "search_value": [
        "abc"
      ],
      "exact_match": false, // 完全一致で検索 
    }
  ]
}
```

##### Request Sample
```
DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/items/delete
```
##### Response Sample
```JSON
{
    "error": null,
}
```


#### 関連アイテムとのリンクを追加（DisplayIDの利用）
関連アイテムとのリンクを追加します
##### Method
POST
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/addlink/:item-id
```
##### Params
```
app-id      : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
item-id         : 対象アイテムのID
```
Post パラメーターの例
```
{
	"link_datastore_id": "DATABASE_2",
	"link_item_id": "5d4c055eaa39555618ac9e6a"
}
```

##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/addlink/5d4c058baa39555618ac9e8b
```
##### Response Sample
```
null
```

#### 関連アイテムとのリンクを更新
関連アイテムとのリンクを更新します
##### Method
POST
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/updatelink/:item-id
```
##### Params
```
app-id          : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
item-id         : 対象アイテムのID
```
Post パラメーターの例
```
{
  "old_link_datastore_id": "DATABASE_2",
  "old_link_item_id": "5db16351ef2261da6f3b3560",
  "new_link_datastore_id": "DATABASE_2",
  "new_link_item_id": "5db16351ef2261da6f3b356b"
}
```

##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/updatelink/5d4c058baa39555618ac9e8b
```
##### Response Sample
```
null
```

#### 関連アイテムとのリンクを削除（DisplayIDの利用）
関連アイテムとのリンクを削除します
##### Method
POST
##### Request Format
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id
```
##### Params
```
app-id      : アプリケーションID（Hexalink画面から入力したIDを指定）
datastore-id    : データストアID（Hexalink画面から入力したIDを指定）
item-id         : 対象アイテムのID
```
Post パラメーターの例
```
{
	"link_datastore_id": "DATABASE_2",
	"link_item_id": "5d4c055eaa39555618ac9e6a"
}
```
##### Request Sample
```
POST http://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/dellink/5d4c058baa39555618ac9e8b
```
##### Response Sample
```JSON
null
```

#### 指定アクションを実行する
指定アクションを実行し、アイテム更新、コメントの追記
##### Method
POST
##### Request Format
```
/api/v0/applications/:project-id/datastores/:datastore-id/items/action/:item-id/:action-id
```
##### Params
`Content-Type : application/json`
```JSON
{"changes":
  [
    {
      "datatype":"multi",//使用しているフィールド型
      "id":"5e256923aeae8e212cb2e03b",　//filedID 
      "value":"更新値"} 
  ],
    "history":{
      "comment":"コメント例"
  },
  "rev_no":8　//現在のrevison番号
}
```
##### Request Sample
```
GET https://api.xxx.com//api/v0/applications/:project-id/datastores/:datastore-id/items/action/:item-id/:action-id

##### Response Sample
```
null
```

#### アイテムの詳細情報、アクションリストを取得
指定したアイテムの情報（フィールド、ステータス、アクションなど）を取得します
##### Method
GET
##### Request Format
```
/api/v0/datastores/:datastore-id/items/:item-id
```
##### Params
```
datastore-id  :  データストアID
item-id  :  アイテムのID
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/58cd1e5bfbfcba2ebcaf0b1e
```

##### Response Sample
```JSON
{
    "title": "",
    "field_values": [
        {
            "field_id": "Fld-cx4MBjkE",
            "field_name": "ファイル２",
            "dataType": "file",
            "value": {
                "_id": "58ce52a5fb90a1429b958025",
                "contentType": "text/plain; charset=utf-8",
                "created_at": "2017-03-19T18:43:01.336+09:00",
                "d_id": "58cbf6cbfbfcba78dc71228d",
                "datastore_id": "58cbf6cbfbfcba78dc71228d",
                "deleted": false,
                "field_id": "58cc9253fbfcba88307142d1",
                "file_id": "58ce52a5fb90a1429b958025",
                "filename": "win7_Excelで作成.csv",
                "filepath": "58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "i_id": "58cd1e5bfbfcba2ebcaf0b1e",
                "item_id": "58cd1e5bfbfcba2ebcaf0b1e",
                "mediaLink": "/download_storage/storage/v1/b/attachment-files-test/o/58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "name": "58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "p_id": "58ca3211cce5fe2e84446cd6",
                "selfLink": "/storage/v1/b/attachment-files-test/o/58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "size": 185,
                "timeCreated": "2017-03-19T09:43:01.178Z",
                "updated": "2017-03-19T18:43:01.178+09:00",
                "user_id": "58272f4efb90a148d8508d9c",
                "w_id": "58ca3211cce5fe2e84446cd3"
            },
            "use_as_search": false,
            "show_in_list": false
        },
        {
            "field_id": "Fld-xV8qUygH",
            "field_name": "タイトル",
            "dataType": "text",
            "value": "５５５",
            "use_as_search": true,
            "show_in_list": true
        },
        {
            "field_id": "Fld-hN28Dy1C",
            "field_name": "ステータス",
            "dataType": "status",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        }
    ],
    "status_list": [
        {
            "status_id": "58cbf6cbfbfcba8244ace719",
            "status_name": "ステータス１",
            "sort_id": 1
        },
        {
            "status_id": "58cbf6cbfbfcba8244ace718",
            "status_name": "ステータス２",
            "sort_id": 0
        }
    ],
    "status_actions": [
        {
            "action_id": "58cbf6cbfbfcba8244ace722",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_PREVIOUS",
            "display_order": 0,
            "crud_type": "2",
            "next_status_id": "58cbf6cbfbfcba8244ace719"
        }
    ],
    "item_actions": [
        {
            "action_id": "58cbf6cbfbfcba8244ace71b",
            "action_name": "新しいレコードを登録する",
            "display_order": 0,
            "description": "新規申請がめん",
            "crud_type": "1"
        },
        {
            "action_id": "58cbf6cbfbfcba8244ace71d",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_UPDATE",
            "display_order": 2,
            "crud_type": "2"
        },
        {
            "action_id": "58cbf6cbfbfcba8244ace71c",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_DELETE",
            "display_order": 1,
            "crud_type": "3"
        },
        {
            "action_id": "58cbf6cbfbfcba8244ace71e",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_COPY",
            "display_order": 3,
            "crud_type": "4"
        }
    ]
}
```


#### アイテムに関連するアイテム一覧を取得
指定したアイテムに関連するアイテム一覧と、関連先のデータベース情報（フィールド、アクションなど）を取得します
##### Method
GET
##### Request Format
```
/api/v0/datastores/:datastore-id/items/:item-id/links/:linked-datastore-id
```
##### Params
```
datastore-id : 関連元のデータストアID
item-id  :  アイテムのID
linked-datastore-id  :  関連先のデータストアID
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/items/58cd1e5bfbfcba2ebcaf0b1e/links/58cbf6cbfbfcba78dc71228d
```

##### Response Sample
```JSON
{
 "datastore_id": "5cc25d1e84f4be574418d580",
  "fields": {
    "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": {
      "id": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
      "f_id": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "重要度",
      "names": {
        "en": "重要度",
        "ja": "重要度"
      },
      "display_id": "重要度",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 5,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "3e9a47e1-ec41-477a-8b18-f324c67d9116": {
      "id": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
      "f_id": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "担当者",
      "names": {
        "en": "担当者",
        "ja": "担当者"
      },
      "display_id": "担当者",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 2,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": {
      "id": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
      "f_id": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "開始日",
      "names": {
        "en": "開始日",
        "ja": "開始日"
      },
      "display_id": "開始日",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 3,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "5cc4dbb284f4be926c491d96": {
      "id": "5cc4dbb284f4be926c491d96",
      "f_id": "5cc4dbb284f4be926c491d96",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "Num1",
      "names": {
        "en": "Num1",
        "ja": "Num1"
      },
      "display_id": "Fld-fjpeoxrY",
      "dataType": "number",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "num_info": {
        "prefix": "Code:",
        "suffix": "",
        "no_comma": true
      }
    },
    "5cc4dbc084f4be926c491d97": {
      "id": "5cc4dbc084f4be926c491d97",
      "f_id": "5cc4dbc084f4be926c491d97",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "Num2",
      "names": {
        "en": "Num2",
        "ja": "Num2"
      },
      "display_id": "Fld-xGx9u6A2",
      "dataType": "number",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 7,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ]
    },
    "5cc4dbcd84f4be926c491d98": {
      "id": "5cc4dbcd84f4be926c491d98",
      "f_id": "5cc4dbcd84f4be926c491d98",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "Calc",
      "names": {
        "en": "Calc",
        "ja": "Calc"
      },
      "display_id": "Fld-fAcrbFfs",
      "dataType": "number",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "num_info": {
        "prefix": "\\",
        "suffix": "yen",
        "no_comma": false
      }
    },
    "5cc4dbf484f4be926c491d99": {
      "id": "5cc4dbf484f4be926c491d99",
      "f_id": "5cc4dbf484f4be926c491d99",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "This is a Label",
      "names": {
        "en": "This is a Label",
        "ja": "This is a Label"
      },
      "display_id": "Fld-XbOD2IvT",
      "dataType": "label",
      "search": false,
      "show_list": false,
      "as_title": false,
      "status": false,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ]
    },
    "5cc8fa5484f4be926c491d9a": {
      "id": "5cc8fa5484f4be926c491d9a",
      "f_id": "5cc8fa5484f4be926c491d9a",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "計算式フィールド",
      "names": {
        "en": "計算式フィールド",
        "ja": "計算式フィールド"
      },
      "display_id": "Fld-1hfacFJP",
      "dataType": "calc",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "calc_info": {
        "formula": "{Fld-xGx9u6A2}   /   {Fld-fAcrbFfs}+{Fld-xGx9u6A2}",
        "calc_target_fields": [
          "5cc4dbc084f4be926c491d97",
          "5cc4dbcd84f4be926c491d98"
        ],
        "prefix": "\\",
        "suffix": "",
        "no_comma": false
      }
    },
    "5cda5ac384f4bec92c8b8d03": {
      "id": "5cda5ac384f4bec92c8b8d03",
      "f_id": "5cda5ac384f4bec92c8b8d03",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "NoCalc",
      "names": {
        "en": "NoCalc",
        "ja": "NoCalc"
      },
      "display_id": "Fld-7ANOlTq4",
      "dataType": "calc",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "calc_info": {
        "formula": "",
        "calc_target_fields": [],
        "prefix": "",
        "suffix": "",
        "no_comma": false
      }
    },
    "6f5779f7-6d34-46ce-afd1-9e83c77260b9": {
      "id": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
      "f_id": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "完了予定日",
      "names": {
        "en": "完了予定日",
        "ja": "完了予定日"
      },
      "display_id": "完了予定日",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 4,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "a38850be-4fb9-4025-a297-4c500c793716": {
      "id": "a38850be-4fb9-4025-a297-4c500c793716",
      "f_id": "a38850be-4fb9-4025-a297-4c500c793716",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "ステータス",
      "names": {
        "en": "ステータス",
        "ja": "ステータス"
      },
      "display_id": "ステータス",
      "dataType": "status",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": true,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "f99f6b08-dd8b-4816-adc7-9b28555a1e93": {
      "id": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
      "f_id": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "タスク",
      "names": {
        "en": "タスク",
        "ja": "タスク"
      },
      "display_id": "タスク",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": true,
      "status": false,
      "fieldIndex": 1,
      "title_order": 1,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    }
  },
  
  "column_settings": [
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "label",
      "displayID": "Fld-XbOD2IvT",
      "displayName": "This is a Label",
      "dslookup_info": null,
      "field": "5cc4dbf484f4be926c491d99",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "This is a Label",
        "ja": "This is a Label"
      },
      "num_info": null,
      "order": 6,
      "search": false,
      "show_list": false,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": {
        "formula": "{Fld-xGx9u6A2}   /   {Fld-fAcrbFfs}+{Fld-xGx9u6A2}",
        "calc_target_fields": [
          "5cc4dbc084f4be926c491d97",
          "5cc4dbcd84f4be926c491d98"
        ],
        "prefix": "\\",
        "suffix": "",
        "no_comma": false
      },
      "dataType": "calc",
      "displayID": "Fld-1hfacFJP",
      "displayName": "計算式フィールド",
      "dslookup_info": null,
      "field": "5cc8fa5484f4be926c491d9a",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "計算式フィールド",
        "ja": "計算式フィールド"
      },
      "num_info": null,
      "order": 7,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": {
        "formula": "",
        "calc_target_fields": [],
        "prefix": "",
        "suffix": "",
        "no_comma": false
      },
      "dataType": "calc",
      "displayID": "Fld-7ANOlTq4",
      "displayName": "NoCalc",
      "dslookup_info": null,
      "field": "5cda5ac384f4bec92c8b8d03",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "NoCalc",
        "ja": "NoCalc"
      },
      "num_info": null,
      "order": 8,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "number",
      "displayID": "Fld-fjpeoxrY",
      "displayName": "Num1",
      "dslookup_info": null,
      "field": "5cc4dbb284f4be926c491d96",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "Num1",
        "ja": "Num1"
      },
      "num_info": {
        "prefix": "Code:",
        "suffix": "",
        "no_comma": true
      },
      "order": 3,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "status",
      "displayID": "ステータス",
      "displayName": "ステータス",
      "dslookup_info": null,
      "field": "a38850be-4fb9-4025-a297-4c500c793716",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "ステータス",
        "ja": "ステータス"
      },
      "num_info": null,
      "order": 10,
      "search": true,
      "show_list": true,
      "statuses": [
        {
          "id": "5cc25d2584f4bed46001b75f",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75f",
          "name": "進行中"
        },
        {
          "id": "5cc25d2584f4bed46001b75e",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75e",
          "name": "未着手"
        },
        {
          "id": "5cc25d2584f4bed46001b75c",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75c",
          "name": "完了"
        },
        {
          "id": "5cc25d2584f4bed46001b75d",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75d",
          "name": "承認待ち"
        }
      ],
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "number",
      "displayID": "Fld-fAcrbFfs",
      "displayName": "Calc",
      "dslookup_info": null,
      "field": "5cc4dbcd84f4be926c491d98",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "Calc",
        "ja": "Calc"
      },
      "num_info": {
        "prefix": "\\",
        "suffix": "yen",
        "no_comma": false
      },
      "order": 5,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": true,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "タスク",
      "displayName": "タスク",
      "dslookup_info": null,
      "field": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
      "field_index": 1,
      "file_info": null,
      "names": {
        "en": "タスク",
        "ja": "タスク"
      },
      "num_info": null,
      "order": 11,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "担当者",
      "displayName": "担当者",
      "dslookup_info": null,
      "field": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
      "field_index": 2,
      "file_info": null,
      "names": {
        "en": "担当者",
        "ja": "担当者"
      },
      "num_info": null,
      "order": 1,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "開始日",
      "displayName": "開始日",
      "dslookup_info": null,
      "field": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
      "field_index": 3,
      "file_info": null,
      "names": {
        "en": "開始日",
        "ja": "開始日"
      },
      "num_info": null,
      "order": 2,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "完了予定日",
      "displayName": "完了予定日",
      "dslookup_info": null,
      "field": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
      "field_index": 4,
      "file_info": null,
      "names": {
        "en": "完了予定日",
        "ja": "完了予定日"
      },
      "num_info": null,
      "order": 9,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "重要度",
      "displayName": "重要度",
      "dslookup_info": null,
      "field": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
      "field_index": 5,
      "file_info": null,
      "names": {
        "en": "重要度",
        "ja": "重要度"
      },
      "num_info": null,
      "order": 0,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "number",
      "displayID": "Fld-xGx9u6A2",
      "displayName": "Num2",
      "dslookup_info": null,
      "field": "5cc4dbc084f4be926c491d97",
      "field_index": 7,
      "file_info": null,
      "names": {
        "en": "Num2",
        "ja": "Num2"
      },
      "num_info": null,
      "order": 4,
      "search": true,
      "show_list": true,
      "users_info": null
    }
  ],
  "items": [
    {
      "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": "高",
      "3e9a47e1-ec41-477a-8b18-f324c67d9116": "",
      "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": "",
      "5cc8fa5484f4be926c491d9a": null,
      "6f5779f7-6d34-46ce-afd1-9e83c77260b9": "",
      "_id": "5cc25d3584f4be574418d58b",
      "access_keys": [
        "5c5fa7da84f4be4250aaee29",
        "5c5fa7da84f4be4250aaee26"
      ],
      "created_at": "2019-04-26T01:21:57.008Z",
      "created_by": "IMPORT",
      "d_id": "5cc25d1e84f4be574418d580",
      "f99f6b08-dd8b-4816-adc7-9b28555a1e93": "H",
      "i_id": "5cc25d3584f4be574418d58b",
      "labeled_at": "2019-05-02T13:20:57.652Z",
      "labels": [
        {
          "c6934716-9bab-4f35-b2a5-aff9169d3a1a": "高"
        }
      ],
      "p_id": "5c6363d984f4be7de0350445",
      "rev_no": 2,
      "status_id": "5cc25d2584f4bed46001b75f",
      "title": "H",
      "updated_at": "2019-05-02T13:20:57.61Z",
      "updated_by": "5c5fa7aa84f4be4250aaee25"
    },
    {
      "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": "高",
      "3e9a47e1-ec41-477a-8b18-f324c67d9116": "",
      "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": "",
      "5cc8fa5484f4be926c491d9a": null,
      "6f5779f7-6d34-46ce-afd1-9e83c77260b9": "",
      "_id": "5cc25d3584f4be574418d58c",
      "access_keys": [
        "5c5fa7da84f4be4250aaee29",
        "5c5fa7da84f4be4250aaee26"
      ],
      "created_at": "2019-04-26T01:21:57.008Z",
      "created_by": "IMPORT",
      "d_id": "5cc25d1e84f4be574418d580",
      "f99f6b08-dd8b-4816-adc7-9b28555a1e93": "G",
      "i_id": "5cc25d3584f4be574418d58c",
      "labeled_at": "2019-05-02T13:20:56.403Z",
      "labels": [
        {
          "c6934716-9bab-4f35-b2a5-aff9169d3a1a": "高"
        }
      ],
      "p_id": "5c6363d984f4be7de0350445",
      "rev_no": 2,
      "status_id": "5cc25d2584f4bed46001b75c",
      "title": "G",
      "updated_at": "2019-05-02T13:20:56.366Z",
      "updated_by": "5c5fa7aa84f4be4250aaee25"
    },
    {
      "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": "高",
      "3e9a47e1-ec41-477a-8b18-f324c67d9116": "",
      "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": "",
      "5cc4dbb284f4be926c491d96": 57007,
      "5cc4dbc084f4be926c491d97": 1233,
      "5cc4dbcd84f4be926c491d98": 1264,
      "5cc8fa5484f4be926c491d9a": 55608,
      "6f5779f7-6d34-46ce-afd1-9e83c77260b9": "",
      "_id": "5cc25d3584f4be574418d58d",
      "access_keys": [
        "5c5fa7da84f4be4250aaee29",
        "5c5fa7da84f4be4250aaee26"
      ],
      "created_at": "2019-04-26T01:21:57.008Z",
      "created_by": "IMPORT",
      "d_id": "5cc25d1e84f4be574418d580",
      "f99f6b08-dd8b-4816-adc7-9b28555a1e93": "F",
      "i_id": "5cc25d3584f4be574418d58d",
      "labeled_at": "2019-05-07T01:46:49.749Z",
      "labels": [
        {
          "c6934716-9bab-4f35-b2a5-aff9169d3a1a": "高"
        }
      ],
      "p_id": "5c6363d984f4be7de0350445",
      "rev_no": 18,
      "status_id": "5cc25d2584f4bed46001b75f",
      "title": "F",
      "updated_at": "2019-05-07T01:46:49.69Z",
      "updated_by": "5c5fa7aa84f4be4250aaee25"
    }
  ],
  "stateflowActions": [
    {
      "_id": "5cc25d2584f4bed46001b761",
      "a_id": "5cc25d2584f4bed46001b761",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 0,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_UPDATE",
      "operation": "2",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    },
    {
      "_id": "5cc25d2584f4bed46001b762",
      "a_id": "5cc25d2584f4bed46001b762",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 1,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_COPY",
      "operation": "4",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    },
    {
      "_id": "5cc25d2584f4bed46001b763",
      "a_id": "5cc25d2584f4bed46001b763",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 2,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_NEW",
      "operation": "1",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "5cc25d2584f4bed46001b75f",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    },
    {
      "_id": "5cc25d2584f4bed46001b764",
      "a_id": "5cc25d2584f4bed46001b764",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 3,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_DELETE",
      "operation": "3",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    }
  ]
}
```

#### アクション実行
アクションを実行します
##### Method
POST
##### Request Format
```
/api/v0/items/:item-id/actions/:action-id
```
##### Params
```
item-id      : アイテムID
action-id    : アクションID
```
`Content-Type : application/json`
```
{
 "rev_no":2, // "is_force_update": trueの場合、省略可能
  "is_force_update": true, // "rev_no"を指定した場合、省略可能
  "history": {
    "datastore_id": "59ad2d890e247927638e7619",
    "comment": ""
  },
  "changes": [
    {
      "id": "5a26722e0e24794c979fa5b6",
      "value": "更新データサンプル"
  },
  {
      "id": "5ab84bfecce5fe5c983ea184",  // user type Fieldの場合
      "value": [
        "58272f4efb90a148d8508d9c", // user_id
        "5846636efb90a1024d2982fa"  // user_id
      ],
    },
    {
      "id": "5ab0c239cce5fed3a859a910", // attachment file type Fieldの場合
      "value": [
        "5ab84c1fcce5fe5c983ea185",  // file_id
        "5ab84c1fcce5fe5c983ea186"   // file_id
      ],
    },
  ]
}
```
- rev_noは排他チェックに利用している。/api/v0/datastores/:datastore-id/items/searchで返されるrev_noを指定。指定したrev_noとデータベース内のrev_noが異なる場合は、エラーとなる。
- rev_noのエラーチェックをせず、強制的にデータ更新を行う場合は、 `is_force_update` フラグを `true` にして実行する。その場合はrev_noのフィールドは不要。
- フィールドのデータタイプがユーザータイプ、添付ファイルタイプの場合、valueにはそれぞれuser_id、file_id の配列を指定する
- フィールドのデータタイプが日付の場合、以下のフォーマットで指定する  
    yyyy-mm-ddThh:mm:ss.SSSZ (.SSSは省略可)  
    TZ間に指定する時刻は、UTC時刻を指定  
    例) 2018年1月11日を指定する場合、"2018-01-10T15:00:00.000Z"

##### Request Sample
```
POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/actions/5a2671ec0e24794c979fa5b1
```
##### Response Sample
```
null
```

#### アイテムの新規作成
新規アイテムを作成します
##### Method
POST
##### Request Format
```
/api/v0/applications/:application-id/datastores/:datastore-id/items/new
```
##### Params
```
application-id : アプリケーションID
datastore-id : データベースID
```
`Content-Type : application/json`
```
{
    "item": {
        "CLIENT_NAME": "sample data",  // フィールドID: 値
        "FROM_DATE": "2019-08-14T15:00:00.000Z",
        "OPTIONS": "5d4c058baa39555618ac9e97"
    },
    "use_display_id" : true // true: 画面から入力したIDを使用する
}
```

##### Request Sample
```
POST https://api.xxx.com/applications/APPNAME/datastores/RESERVES/items/new
```
##### Response Sample
```
{
    "error": null,
    "history_id": "5d42d79eaa395517ccf118d9",
    "item_id": "5d42d79daa395517ccf118d7"
}
```

#### 履歴取得
履歴を取得します
##### Method
GET
##### Request Format
```
/api/v0/datastores/:datastore-id/items/:item-id/histories
```
##### Params
```
なし
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/59ad2d8a0e247927638e761a/histories
```
##### Response Sample
```JSON
{
    "histories": [
        {
            "h_id": "59af71aa0e247958c7011a87",
            "user_id": "59ac9f980e2479264852594f",
            "i_id": "59ad2d8a0e247927638e761a",
            "history": {
                "user_id": "59ac9f980e2479264852594f",
                "history_id": "59af71aa0e247958c7011a87",
                "item_id": "59ad2d8a0e247927638e761a",
                "transaction_id": "59af71aa0e247958c7011a80",
                "comment": "更新しました",
                "datastore_id": "59ad2d890e247927638e7619",
                "workspace_id": "59ac9fac0e24792648525951",
                "action_id": "59ad2d8a0e2479348590c85f",
                "action_name": "次のステータスに進める",
                "post_mode": "ExcecuteAction",
                "created_at": "2017-09-06T12:55:22.409+09:00",
                "username": "user1",
                "email": "user1@example.com",
                "datastore_name": "データストア1",
                "media_link": "https://storage.googleapis.com/linker/pub/default.png",
                "display_order": 0
            }
        }
    ],
    "unread": 0
}
```

#### コメント履歴の登録
データアイテムに対する履歴を登録します
##### Method
POST
##### Request Format
```
/api/v0/datastores/:datastore-id/items/histories
```
##### URL Params
```
  "datastore-id": データベースID（d_id）
```
##### Post Params
```
  "project_id": アプリケーションID（p_id）
  "item_id": データアイテムID(i_id)
  "comment" : 登録したいコメント
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/histories
```
```
{
	"project_id": "5e5366474e128951e40b288b",
	"item_id": "5e53712e4e128936e84a623f",
	"comment" : "text..."
}

```
##### Response Sample
```JSON
null
```

## データインポート関連API
### データインポート
CSVファイルを指定して、データストアデータを更新します。新規・更新・削除が可能です。
- キーフィールドに指定したフィールドに同値が存在する場合は更新され、存在しない場合は新規で登録されます。
- replace_all(bool) またはappend(bool)オプションをtrue とすると、一括インポート
- CSV内に削除フィールド（項目名を`_delete_`とする）を用意し、削除するItemには`true`または`1`を指定すると、該当Itemは削除されます。
- ステータスを意味するフィールドは、CSVのヘッダー名を`_status_`として、データにはステータス名(status_idではありません)を指定します。
#### Method
POST
#### Request Format
```
/api/v0/applications/:project-id/datastores/:datastore-id/import
```
#### Params
```
project-id    : アプリケーションID(画面から指定したアプリケーションID、または、p_id)
datastore-id    : データストアID(画面から指定したデータストアID、または、d_id)
```
`Content-Type : multipart/form-data`
```
filename            : インポートデータファイル名
file                ： インポートファイル
key_field_displayid : インポート先データストアのキー項目として利用するフィールドIDを指定します（この列をキーとして更新をかけます）
replace_all         ： false | true  指定されたCSVでデータを初期化（すべてのデータを削除して、新規追加されます）
append              ： false | true  指定されたCSVデータを既存のデータに追加します。別途、`条件を指定して削除API`と順番に実行することでデータを差分削除＆追加インポートが可能です。
overwrite_autonumber： false | true  インポート先の自動採番項目が初期化されてゼロスタートされてインポートされます。
validate            ： true | false  インポート時、データチェックを省略する。
```
#### Request Sample
```
POST https://api.xxx.com/api/v0/applications/APP-ID/datastores/DATABASE-ID/import
```

 CSVファイルイメージ  
 - CSVヘッダ行には、画面から指定したフィールドIDを指定します
 - `key_field_displayid` 更新利用時は、キーフィールドと更新対象フィールド以外の列を省略したCSVを利用できます。（データベース内のすべてのフィールドを含む必要はありません）
```
TITLE,_status_,Field1,No,_delete_
import1,ステータス１,A,001,0
import2,ステータス２,B,002,0
```
#### Response
```JSON
{
    "temp_datastore_id": "5e58aa0fe4ecac3bd828aead",
    "stream_id": "saXjPYrkoJULrJTXHystqbXBqmUkILVbbBxvyXNsiJXKUdcROfTQOwGwCo6nqkwDDGjnUeiPtdkjkDeqgjquUOmcl0B6aM9q2V5526y2Xn3XmPZFsBSrooAwqTSAjWYr"
}
```
```
temp_datastore_id : データインポート結果の取得で利用できるID
stream_id : インポート経過をSubscribeするためのID　
```
- Subscribe仕様については、このドキュメントには記載していない（現在、ドキュメント準備中）

### データインポート結果の取得
データインポートの処理結果を取得する
#### Method
GET
#### Request Format
```
/api/v0/datastores/:datastore-id/import/:temp-datastore-id
```
#### Params
```
temp-datastore-id  :  インポート処理時の結果ID
```
#### Request Sample
```
GET https://api.xxx.com/api/v0/datastores/59bf3a310e2479145baba476/import/59706031bc29a9afa46b59eb
```

#### Response Sample
成功時
```
なし
```

エラー時
```JSON
{
  "errors": [
    {
      "description": "Insert ERROR",
      "line": 2
    },
    {
      "description": "Update ERROR",
      "line": 3
    }
  ]
}
```


### 添付ファイル関連API

アイテムには、「添付ファイル」フィールドにより、ファイルを添付できます。

#### 添付ファイルフィールドにアップロード
添付ファイルフィールドにファイルをアップロードします
- アップロードされたファイルはStorageに保存されますが、Itemへは登録されません。
- 該当Itemへ登録するためには、Responseにふくまれる`file_id`を使って、アクション実行APIをcallする必要があります。
##### Method
POST
##### Request Format
```
/api/v0/items/:item-id/fields/:field-id/attachments
```
##### Params
```
item-id          : アイテムID
field-id         : フィールドID
```
`Content-Type : multipart/form-data`
```
application_id   : アプリケーションID
datastore_id     : データストアID
filename         : 添付ファイル名
file             : 添付ファイル
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/items/59ad2d8a0e247927638e761a/fields/58cc9253fbfcba88307142d1/attachments
```
- CSVファイル名:./testcsv/importapi/test.csv
- CSVファイルイメージ:

##### Response Sample
```JSON
{
    "file_id": "59af720c0e247958c7011a88"
}
```

#### 添付ファイルの削除
添付ファイルフィールドのファイルを削除します
##### Method
DELETE
##### Request Format
```
/api/v0/items/:item-id/fields/:field-id/attachments/:attachment-id
```
##### Params
```
なし
```
##### Request Sample
```
DELETE https://api.xxx.com/api/v0/items/59ad2d8a0e247927638e761a/fields/58cc9253fbfcba88307142d1/attachments/59af720c0e247958c7011a88
```
##### Response Sample
```
null
```

#### 添付ファイルデータの取得
添付ファイルデータをダウンロードします
##### Method
GET
##### Request Format
```
/api/v0/files/:file-id
```
##### Params
```
file-id    : ファイルID
```

##### Request Sample
```
GET https://api.xxx.com/api/v0/files/5a43c3c4fbfcba5c7443d037
```

##### Response Sample
```
(省略）※該当ファイルのバイナリデータをダウンロード
```


### データレポート関連API


#### レポートデータの取得
データレポートの結果を取得する

##### Method
GET

##### Request Format
```
/api/v0/applications/:project-id/reports/:report-id
```
##### Params
```
特になし
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID
```

##### Response Sample
```JSON
{
    "report_fields": [
        {
            "title": "Title",
            "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",
            "data_type": "text",
            "display_type": "",
            "align": "",
            "width": 235,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c69148384f4be344c2ff0f1",
            "d_id": "5c69148384f4be1f241fedcd",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Due Date",
            "rpf_id": "b752bf7f-9f0d-4370-ac34-45b9be01453f",
            "data_type": "date",
            "display_type": "",
            "align": "",
            "width": 106,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c69148384f4be344c2ff0f5",
            "d_id": "5c69148384f4be1f241fedcd",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Category",
            "rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
            "data_type": "select",
            "display_type": "text",
            "align": "left",
            "width": 94,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "B",
                    "bg_color": "#dcecf3",
                    "ft_color": "#165896",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "C",
                    "bg_color": "#dcecf3",
                    "ft_color": "#165896",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "A",
                    "bg_color": "#f4eaf3",
                    "ft_color": "#9e9e9e",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                }
            ],
            "f_id": "5c6363ed84f4be7de0350452",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Status",
            "rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",
            "data_type": "status",
            "display_type": "text",
            "align": "left",
            "width": 97,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "新規",
                    "bg_color": "#f9e9e9",
                    "ft_color": "#c01717",
                    "apply_row": true,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "2d9bfd30-e194-4492-a93e-e6d0e4323685",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "",
                    "bg_color": "#f0f7df",
                    "ft_color": "#2a7850",
                    "apply_row": false,
                    "use_field_ref": true,
                    "value_rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",
                    "font_size": "small",
                    "font_style": "italic",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                }
            ],
            "f_id": "5c6363ed84f4be7de0350453",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": true,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "note",
            "rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",
            "data_type": "textarea",
            "display_type": "",
            "align": "",
            "width": 174,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c6459de84f4be4588a77288",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Num",
            "rpf_id": "8a20643b-fe36-45f1-bbd6-b2b6e4296a54",
            "data_type": "number",
            "display_type": "number",
            "align": "right",
            "width": 200,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c91f38a84f4be29540c4e9c",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "X",
            "rpf_id": "X",
            "data_type": "number",
            "display_type": "number",
            "align": "right",
            "width": 104,
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": 1,
                    "bg_color": "#f8eadc",
                    "ft_color": "#d26c07",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "font_size": "big",
                    "font_style": "italic",
                    "font_weight": "bold",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": "",
                    "bg_color": "#FFFFFF",
                    "ft_color": "#000000",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "num_format"
                }
            ],
            "f_id": "",
            "d_id": "",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": true
        },
        {
            "title": "Y",
            "rpf_id": "Y",
            "data_type": "number",
            "display_type": "number",
            "align": "right",
            "width": 104,
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": 1,
                    "bg_color": "#f8eadc",
                    "ft_color": "#d26c07",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "font_size": "big",
                    "font_style": "italic",
                    "font_weight": "bold",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": "",
                    "bg_color": "#FFFFFF",
                    "ft_color": "#000000",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "num_format"
                }
            ],
            "f_id": "",
            "d_id": "",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": true
        }
    ],
    "report_results": [
        {
            "4552a666-508d-419c-ba99-7c9a16b24894": "B",
            "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80": "タスクC",
            "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a": "B",
            "85c15eca-1b7a-4423-9969-55f363efc4c1": "New",
            "8a20643b-fe36-45f1-bbd6-b2b6e4296a54": 0,
            "b752bf7f-9f0d-4370-ac34-45b9be01453f": "2016/01/01"
        },
        {
            "4552a666-508d-419c-ba99-7c9a16b24894": "B",
            "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80": "案件（明細あり）",
            "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a": "B",
            "85c15eca-1b7a-4423-9969-55f363efc4c1": "In Review",
            "8a20643b-fe36-45f1-bbd6-b2b6e4296a54": 0,
            "b752bf7f-9f0d-4370-ac34-45b9be01453f": "2016/01/01"
        },
        {
            "4552a666-508d-419c-ba99-7c9a16b24894": "B",
            "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80": "",
            "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a": "B",
            "85c15eca-1b7a-4423-9969-55f363efc4c1": "New",
            "8a20643b-fe36-45f1-bbd6-b2b6e4296a54": 0,
        },
        {
            "4552a666-508d-419c-ba99-7c9a16b24894": "B",
            "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80": "１１１新規起票",
            "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a": "B",
            "85c15eca-1b7a-4423-9969-55f363efc4c1": "New",
            "8a20643b-fe36-45f1-bbd6-b2b6e4296a54": 0,
        },
        {
            "4552a666-508d-419c-ba99-7c9a16b24894": "B",
            "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80": "タスクB",
            "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a": "B",
            "85c15eca-1b7a-4423-9969-55f363efc4c1": "New",
            "8a20643b-fe36-45f1-bbd6-b2b6e4296a54": 0,
            "b752bf7f-9f0d-4370-ac34-45b9be01453f": "2016/01/01"
        },
        {
            "4552a666-508d-419c-ba99-7c9a16b24894": "B",
            "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80": "タスクE",
            "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a": "B",
            "85c15eca-1b7a-4423-9969-55f363efc4c1": "In Review",
            "8a20643b-fe36-45f1-bbd6-b2b6e4296a54": 0,
            "b752bf7f-9f0d-4370-ac34-45b9be01453f": "2016/01/01"
        },
        {
            "4552a666-508d-419c-ba99-7c9a16b24894": "B",
            "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80": "案件（明細あり）",
            "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a": "B",
            "85c15eca-1b7a-4423-9969-55f363efc4c1": "New",
            "8a20643b-fe36-45f1-bbd6-b2b6e4296a54": 0,
            "b752bf7f-9f0d-4370-ac34-45b9be01453f": "2016/01/01"
        }
    ],
    "report_title": "SimpleJoin",
    "error": ""
}
```


#### レポートの検索条件を取得
データレポートの検索条件を取得する（検索条件ダイアログ等、表示用）
##### Method
GET
##### Request Format
```
/api/v0/applications/:project-id/reports/:report-id/conditions
```
##### Params
```
特になし
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions
```

##### Response Sample
```JSON
[
    {
        "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",
        "name": "Title",
        "dataType": "text",
        "order": 0
    },
    {
        "rpf_id": "b752bf7f-9f0d-4370-ac34-45b9be01453f",
        "name": "Due Date",
        "dataType": "date",
        "order": 4
    },
    {
        "rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
        "name": "Category",
        "dataType": "select",
        "order": 2,
        "options": [
            {
                "o_id": "5c6363f384f4be2550bfe91b",
                "value": "C",
                "color": "",
                "enabled": true,
                "sort_id": 0
            },
            {
                "o_id": "5c6363f384f4be2550bfe91c",
                "value": "B",
                "color": "",
                "enabled": true,
                "sort_id": 1
            },
            {
                "o_id": "5c6363f384f4be2550bfe91d",
                "value": "A",
                "color": "",
                "enabled": true,
                "sort_id": 2
            }
        ]
    },
    {
        "rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",
        "name": "Status",
        "dataType": "status",
        "order": 3,
        "statuses": [
            {
                "s_id": "5c6363ed84f4be7de0350457",
                "name": "New",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de0350456",
                "name": "Closed",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de0350459",
                "name": "In Review",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de0350458",
                "name": "Assigned",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de035045a",
                "name": "In Progress",
                "color": ""
            }
        ]
    },
    {
        "rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",
        "name": "note",
        "dataType": "textarea",
        "order": 5
    },
    {
        "rpf_id": "8a20643b-fe36-45f1-bbd6-b2b6e4296a54",
        "name": "Num",
        "dataType": "number",
        "order": 6
    }
]
```

#### 条件を指定してレポートデータを取得
条件を指定してレポートデータを取得する

##### Method
POST
##### Request Format
```
/api/v0/applications/:project-id/reports/:report-id/filter
```
##### Params
```
conditions -  検索条件を指定
 			"rpf_id":/conditions APIで返されるレポートフィールドIDを指定,
			"search_value": 検索条件を配列で指定（サンプルを参照） ※アイテム一覧の指定と同様、フィールドタイプごとに指定内容が異なる
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions

{
	"conditions":[
		{
			"rpf_id":"4552a666-508d-419c-ba99-7c9a16b24894",
			"search_value":["B"]
		}
  ]
}
```

##### Response Sample
```JSON
※ （省略） 形式は、データレポート取得サンプルと同様
```

### チャート（ダッシュボード）関連API

ダッシュボード用グラフデータを取得します

#### チャートデータの取得
チャートデータを取得する

##### Method
GET
##### Request Format
```
/api/v0/applications/:project-id/charts/:chart-id
```
##### Params
```
特になし
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID
```

##### Response Sample
注意）チャートタイプにより、フォーマットが異なる場合がある
```JSON
{
    "chart": {
        "type": "barStacked"
    },
    "color": "DEFAULT",
    "datasets": [
        {
            "data": [
                80,
                30
            ],
            "label": "9月"
        },
        {
            "data": [
                90,
                80
            ],
            "label": "8月"
        },
        {
            "data": [
                140,
                80
            ],
            "label": "11月"
        },
        {
            "data": [
                100,
                70
            ],
            "label": "1月"
        },
        {
            "data": [
                150,
                90
            ],
            "label": "12月"
        },
        {
            "data": [
                120,
                30
            ],
            "label": "2月"
        },
        {
            "data": [
                160,
                60
            ],
            "label": "3月"
        },
        {
            "data": [
                80,
                80
            ],
            "label": "4月"
        },
        {
            "data": [
                50,
                100
            ],
            "label": "6月"
        },
        {
            "data": [
                120,
                40
            ],
            "label": "10月"
        },
        {
            "data": [
                70,
                60
            ],
            "label": "5月"
        },
        {
            "data": [
                60,
                120
            ],
            "label": "7月"
        }
    ],
    "labels": [
        "事業部A",
        "事業部B"
    ],
    "title": {
        "text": "１"
    },
    "zero": true
}
```


#### チャートの検索条件を取得
チャートを絞り込むための検索条件を取得する（検索条件ダイアログ等、表示用）

##### Method
GET
##### Request Format
```
/api/v0/applications/:project-id/charts/:chart-id/conditions
```
##### Params
```
特になし
```
##### Request Sample
```
GET https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID/conditions
```

##### Response Sample
```JSON
[
    {
        "rpf_id": "9ac0d794-fc4a-473f-be36-647d22c7cfa2",
        "name": "月",
        "dataType": "text",
        "order": 0
    },
    {
        "rpf_id": "1adebfeb-150b-4a7f-91ca-a3be1faf37f8",
        "name": "売上",
        "dataType": "number",
        "order": 2
    },
    {
        "rpf_id": "2e4f0de6-1682-4b76-a99f-9229fa5fa868",
        "name": "工場",
        "dataType": "text",
        "order": 1
    }
]
```

#### 条件を指定してチャートデータを取得
条件を指定してレポートデータを取得する

##### Method
POST
##### Request Format
```
/api/v0/applications/:project-id/reports/:report-id/filter
```
##### Params
```
conditions -  検索条件を指定
 			"rpf_id":/conditions APIで返されるレポートフィールドIDを指定,
			"search_value": 検索条件を配列で指定（サンプルを参照） ※アイテム一覧の指定と同様、フィールドタイプごとに指定内容が異なる
```
##### Request Sample
```
POST https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID/conditions

{
	"conditions":[
		{
      "rpf_id": "9ac0d794-fc4a-473f-be36-647d22c7cfa2",
		  "search_value":["7"]
		}
	]
}

```

##### Response Sample
```JSON
{
    "chart": {
        "type": "barStacked"
    },
    "color": "DEFAULT",
    "datasets": [
        {
            "data": [
                60,
                120
            ],
            "label": "7月"
        }
    ],
    "labels": [
        "事業部A",
        "事業部B"
    ],
    "title": {
        "text": "１"
    },
    "zero": true
}
```
