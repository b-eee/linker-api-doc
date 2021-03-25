---
id: index
title: 使い方
slug: /
---

本ドキュメントでは、Hexabase APIの基本的な使い方を解説しています。

## 概要

Hexabase APIは、エンタープライズBaaS(Backend as a Service)を制御するための、Application Programming Interfaceです。

### バージョン

```text
Version 0
```

### 事前準備

- HexabaseプラットホームのベースURIを確認します。ベースURIは、テナントと環境(本番、ステージング)によって異なります
- Hexabaseプラットホームでユーザー登録します

### APIトークンの取得

- 本APIでは、ログインAPIでユーザーを指定します。各APIは、このユーザが持つ権限に従って実行されます
- 本APIを使用するには、最初にログインAPIを実行して、トークンを取得します
- ログインAPIを除く各APIの実行時には、HTTPリクエストヘッダに以下のようにトークンを指定します

```text
Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX(発行したトークン)
```

### 画面ID (display_id)

- 画面ID(display_id)とは、Hexabase設定画面から指定可能なIDのことを指します。
- 画面ID(display_id)に対応しているAPIは、app-id, datastore-id, field-id など、URLやPayloadの一部に画面から入力したIDを指定できます。

- さらに詳しい内容は、[開発ガイド](https://b-eee.github.io/development_guide) > [機能](https://b-eee.github.io/development_guide/docs/features/index) > [ID による指定](https://b-eee.github.io/development_guide/docs/features/select_by_id)をご覧ください。


## API一覧

### 認証関連API

本APIを使用するには、最初にログインAPIを実行して、トークンを取得します

#### ログイン関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Login](/docs/v0/login/Login) | ログイン | POST | /api/v0/login | システムへログインする | v0 | - |
| 60 | [Logout](/docs/v0/login/Logout) | ログアウト | POST | /api/v0/users/logout | システムからログアウトする | v0 | - |


### ワークスペース関連API

「ワークスペース」は、Hexabaseのアプリケーションをまとめる領域です。業務の種類や内容に合わせてワークスペースを用意して、複数の業務アプリケーションをまとめておきます。
ワークスペース関連APIは、[こちら](/docs/v0/workspaces/README)のページを参照してください。

### グループ関連API

「グループ」は、ワークスペース内に１つツリー構造で存在するし、ユーザーを役割りに応じてまとめる機能です。グループへロールを付与することもできます。

#### グループ一覧の取得

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 49 | [GetGroup](/docs/v0/groups/GetGroup) | グループ情報取得 | GET | /api/v0/groups/:group-id | 指定したグループ情報とその配下のグループ一覧を取得 | v0 | - |
| 4 | [GetGroupTree](/docs/v0/groups/GetGroupTree) | グループツリー情報取得 | GET | /api/v0/grouptree | ワークスペース内のグループ情報をJSONツリー形式で取得 | v0 | - |

#### グループの登録、変更、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 5 | [CreateGroup](/docs/v0/groups/CreateGroup) | 新規グループ作成 | POST | /api/v0/workspaces/:workspace-id/groups/:parent-group-id | 指定グループ配下に新規でグループを作成 | v0 | - |
| 44 | [CreateTopGroup](/docs/v0/groups/CreateTopGroup) | 新規グループ作成\(第1階層\) | POST | /api/v0/workspaces/:workspace-id/groups | 第1階層に新規グループを作成 | v0 | - |
| 6 | [UpdateGroup](/docs/v0/groups/UpdateGroup) | グループ更新 | PUT | /api/v0/groups/:group-id | 指定したグループ情報を更新する | v0 | - |
| 7 | [DeleteGroup](/docs/v0/groups/DeleteGroup) | グループ削除 | DELETE | /api/v0/groups/:group-id | 指定したグループを削除する | v0 | - |

### ユーザー関連API

「ユーザー」はEmailアドレスをIDとした、ログイン可能なアカウントです。必ずワークスペース内のいずれかのグループに属します。Hexabaseへユーザーを追加するには、グループへユーザーを登録した後に、ワークスペースへ招待する必要があります。

#### ユーザーの招待 ～ 初期登録

初期ユーザの登録に関しては、[こちら](/docs/v0/user-registration/README)のページを参照してください。

#### ログインユーザAPI

ログイン済ユーザの参照・変更に関するAPIは、[こちら](/docs/v0/userinfo/README)のページを参照してください。

#### ユーザー一覧

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 46 | [GetUsersInGroup](/docs/v0/users/GetUsersInGroup) | グループ内ユーザー取得 | GET | /api/v0/groups/:group-id/users | 指定されたグループのユーザー一覧の取得 | v0 | - |
| 50 | [GetUsersInWorkspace](/docs/v0/users/GetUsersInWorkspace) | グループ内ユーザー取得 | GET | /api/v0/workspaces/:workspace-id/users | 指定されたワークスペースのユーザー一覧の取得 | \(old\) | - |
| 10 | [GetAllUsersInWorkspace](/docs/v0/users/GetAllUsersInWorkspace) | ワークスペース全ユーザー取得 | GET | /api/v0/users/all/g/:group-id | ワークスペース内全ユーザー一覧の取得 | v0 | - |

#### ユーザーの追加、削除

- [**使い方**](/docs/v0/users/README)

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 47 | [AddUser](/docs/v0/users/AddUser) | ユーザー追加 | POST | /api/v0/users | グループに新規ユーザーを作成 | v0 | - |
| 51 | [RemoveUser](/docs/v0/users/RemoveUser) | ユーザー削除 | DELETE | /api/v0/users | グループからユーザーを削除 | v0 | - |
| 52 | [UserInvite](/docs/v0/users/UserInvite) | ユーザー招待 | POST | /api/v0/userinvite | ユーザーを招待 | v0 | - |

#### CSVデータによるユーザー一括登録

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 9 | [UserImport](/docs/v0/users/UserImport) |  | POST | /api/v0/userimport | ユーザーをCSVで一括インポート | α版 | - |

### アプリケーション関連API

Hexabaseでは、「アプリケーション」ごとに、データベース・データレポート・ダッシュボードなどをまとめています。新しくワークプレースを作成すると「新しいアプリケーション」という名前のアプリケーションが作成されています。  

アプリケーション内には複数のデータベース（データストア）が存在します。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 11 | [GetApplicationsAndDatastores](/docs/v0/applications/GetApplicationsAndDatastores) | アプリケーションとデータベース一覧 | GET | /api/v0/workspaces/:workspace-id/applications | アプリケーション一覧のとデータストア一覧を取得 | v0 | - |

#### ロール関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 71 | [GetRoleUsers](/docs/v0/users/GetRoleUsers) | ロールをもつユーザーの取得 | GET | /api/v0/applications/:app-id/roleusers/:role-id | 指定したロールを所有するユーザーを取得する | v0 | - |
| 65 | [AddRoleToUser](/docs/v0/roles/AddRoleToUser) | ユーザーへロール付与 | POST | /api/v0/applications/:app-id/userroles | ユーザーにアプリケーションのロールを付与する | v0 | - |
| 66 | [RemoveRoleFromUser](/docs/v0/roles/RemoveRoleFromUser) | ユーザからロールを削除 | DELETE | /api/v0/applications/:app-id/userroles | ユーザーからアプリケーションのロールを外す | v0 | - |
| 63 | [UpdateGroupRoles](/docs/v0/roles/UpdateGroupRoles) | グループロール更新 | POST | /api/v0/grouproles/:group-id | グループにひも付くロールをすべて削除し、新規付与（洗い変え）する | v0 | - |
| 64 | [AddGroupRoles](/docs/v0/roles/AddGroupRoles) | グループロール追加 | PUT | /api/v0/grouproles/:group-id | グループにロールを追加する | v0 | - |


#### フィールド関連API

Hexabaseでは、「アイテム」のカラムを「フィールド」または「画面項目」と呼びます。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 15 | [GetDatastoreFields](/docs/v0/datastores/GetDatastoreFields) | フィールド一覧 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/fields | フィールド一覧を取得 | v0 | ✓ |

### アイテム関連API

Hexabaseでは、データベースの各データを「アイテム」と呼びます。表の横１行がアイテムになります。一般的なRDBのレコードに相当します。

#### アイテムの検索、表示

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 19 | [ItemList](/docs/v0/items/ItemList) | アイテム一覧 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/search | アイテム一覧を取得 | v0 | ✓ |
| 68 | [GetItemSearchConditions](/docs/v0/items-search/GetItemSearchConditions) | アイテム検索条件取得 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/conditions | アイテムの検索条件を取得する | v0 | ✓ |
| 70 | [GetUserQueries](/docs/v0/items-search/GetUserQueries) | よく使う一覧の取得 | GET | /api/v0/applications/:app-id/queries | ユーザーごとに記憶された検索条件一覧を返す| v0 | ✓ |
| 27 | [GetItemDetails](/docs/v0/items/GetItemDetails) | アイテム詳細 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/items/details/:item-id | アイテムの詳細情報、アクションリストを取得 | v0 | ✓ |

#### アイテムの登録、更新、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 69 | [GetAutoNumber](/docs/v0/items/GetAutoNumber) | 自動採番 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/fields/:field-id/autonum | アイテムへ登録時に任意利用できる番号を採番する | v0 | ✓ |
| 20 | [CreateItem](/docs/v0/items/CreateItem) | アイテム新規登録 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/new | 新規アイテムを作成する | v0 | ✓ |
| 21 | [UpdateItem](/docs/v0/items/UpdateItem) | アイテム更新 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id | アイテムを編集する | v0 | ✓ |
| 22 | [DeleteItem](/docs/v0/items/DeleteItem) | アイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id | １アイテムを削除する | v0 | ✓ |
| 23 | [DeleteItemByConditions](/docs/v0/items/DeleteItemByConditions) | 条件指定してアイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete | 条件を指定してアイテムを一括削除する | v0 | ✓ |

#### アイテムに対するアクション実行

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 12 | [GetNewActions](/docs/v0/item-actions/GetNewActions) | 新規登録アクションの一覧 | GET | /api/v0/datastores/:datastore-id/new-action | 新規アイテム作成アクション一覧を取得 | v0 | - |
| 48 | [CreateNewItemID](/docs/v0/item-actions/CreateNewItemID) | 新規アイテムID取得 | POST | /api/v0/datastores/:datastore-id/items/create-id | 新規アイテム作成用のaction\_idを取得 | v0 | - |
| 33 | [CreateItemWithItemID](/docs/v0/item-actions/CreateItemWithItemID) | item\_idを指定して新規アイテムを作成 | POST | /api/v0/items/:item-id/new-actions/:action-id | action\_idを指定して、新規作成アクションを実行\(No.69の後に実行\) | v0 | - |
| 13 | [GetInputFields](/docs/v0/item-actions/GetInputFields) | アクション登録フォーム取得 | GET | /api/v0/datastores/:datastore-id/actions/:action-id/fields | アクションで利用可能なフィールド情報を取得する | v0 | - |
| 62 | [ExecuteAction](/docs/v0/item-actions/ExecuteAction) | アクションの実行 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/action/:action-id | 指定アクションを実行する | v0 | ✓ |
| 31 | [ExecuteActionByActionID](/docs/v0/item-actions/ExecuteActionByActionID) | アクションの実行 | POST | /api/v0/items/:item-id/actions/:action-id | アクションを実行 | v0 | - |
| 67 | [ExecuteBulkAction](/docs/v0/item-actions/ExecuteBulkAction) | 条件を指定してアクションを実行 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/bulkaction/:action-id | 指定アクションを実行する | v0 | ✓ |

#### アイテムの関連

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 28 | [GetLinkedItems](/docs/v0/item-links/GetLinkedItems) | 関連アイテム取得 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/items/links/:item-id | アイテムに関連するアイテム一覧を取得 | v0 | ✓ |
| 24 | [AddItemLink](/docs/v0/item-links/AddItemLink) | アイテムリンク作成 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/addlink/:item-id | 関連アイテムとのリンクを追加 | v0 | ✓ |
| 25 | [UpdateItemLink](/docs/v0/item-links/UpdateItemLink) | アイテムリンク更新 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/updatelink/:item-id | 関連アイテムとのリンクを更新 | v0 | ✓ |
| 26 | [DeleteItemLink](/docs/v0/item-links/DeleteItemLink) | アイテムリンク削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id | 関連アイテムとのリンクを削除 | v0 | ✓ |

#### 添付ファイル関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 29 | [UploadFile](/docs/v0/item-files/UploadFile) | 添付ファイルUpload | POST | /api/v0/items/:item-id/fields/:field-id/attachments | 添付ファイルフィールドにファイルをアップロード | v0 | - |
| 30 | [DeleteFile](/docs/v0/item-files/DeleteFile) | 添付ファイル削除 | DELETE | /api/v0/items/:item-id/fields/:field-id/attachments/:file-id | 添付ファイルフィールドのファイルを削除 | v0 | - |
| 35 | [GetFile](/docs/v0/item-files/GetFile) | ファイルデータの取得 | GET | /api/v0/files/:file-id | 添付ファイルデータを取得 | v0 | - |

#### アイテムの履歴

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 34 | [GetItemHistories](/docs/v0/item-histories/GetItemHistories) | アイテム履歴取得 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id | 履歴を取得 | v0 | ✓ |
| 45 | [PostItemComment](/docs/v0/item-histories/PostItemComment) | アイテムコメント投稿 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id | コメント履歴を登録 | v0 | ✓ |
| 72 | [UpdateItemComment](/docs/v0/item-histories/UpdateItemComment) | アイテムコメント編集 | PUT | /api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id/:history-id | コメント履歴を修正 | v0 | ✓ |
| 73 | [DeleteItemComment](/docs/v0/item-histories/DeleteItemComment) | アイテムコメント削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id/:history-id | コメント履歴を削除 | v0 | ✓ |

### CSVデータインポート関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 16 | [ImportItems](/docs/v0/items-import/ImportItems) | アイテムCSVインポート | POST | /api/v0/applications/:app-id/datastores/:datastore-id/import | CSVデータをデータベースへインポート | v0 | ✓ |
| 17 | [GetImportResults](/docs/v0/items-import/GetImportResults) | インポート結果取得 | GET | /api/v0/datastores/:datastore-id/import/:id | CSVインポートの結果取得 | v0 | - |

### データレポート関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 37 | [GetReportData](/docs/v0/reports/GetReportData) | データレポート取得 | GET | /api/v0/applications/:app-id/reports/:report-id | レポートデータの取得 | v0 | ✓ |
| 38 | [GetReportSearchConditions](/docs/v0/reports/GetReportSearchConditions) | データレポート検索条件取得 | GET | /api/v0/applications/:app-id/reports/:report-id/conditions | レポートの検索条件を取得 | v0 | ✓ |
| 39 | [GetReportDataByConditions](/docs/v0/reports/GetReportDataByConditions) | 条件指定してデータレポート取得 | POST | /api/v0/applications/:app-id/reports/:report-id/filter | 条件を指定してレポートデータを取得 | v0 | ✓ |

### チャート\(ダッシュボード\)関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 40 | [GetChartData](/docs/v0/charts/GetChartData) | チャートデータ取得 | GET | /api/v0/applications/:app-id/charts/:chart-id | チャートデータの取得 | v0 | ✓ |
| 41 | [GetChartSearchConditions](/docs/v0/charts/GetChartSearchConditions) | チャート検索条件取得 | GET | /api/v0/applications/:app-id/charts/:chart-id/conditions | チャートの検索条件を取得 | v0 | ✓ |
| 42 | [GetChartDataByConditions](/docs/v0/charts/GetChartDataByConditions) | 条件指定してチャートデータ取得 | POST | /api/v0/applications/:app-id/charts/:chart-id/filter | 条件を指定してチャートデータを取得 | v0 | ✓ |

