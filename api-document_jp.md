# API Document\_jp

## Hexabase APIの解説

## 本ドキュメントの目的

本ドキュメントは、Hexabaseプラットホームを外部から利用するAPIについて説明しています。

### バージョン

```text
Version 0
```

## 事前準備

* HexabaseプラットホームのベースURIを確認します。ベースURIは、テナントごとに異なります
* Hexabaseプラットホームでユーザー登録します

### APIトークンの取得

* 本APIでは、ログインAPIでユーザーを指定します。各APIは、このユーザが持つ権限に従って実行されます
* 本APIを使用するには、最初にログインAPIを実行して、トークンを取得します
* ログインAPIを除く各APIの実行時には、HTTPリクエストヘッダに以下のようにトークンを指定します

```text
Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX(発行したトークン)
```

## 用語の説明

**画面ID\(display\_id\)**

* 画面ID\(display\_id\)とは、Hexabase設定画面から指定可能なIDのことを指します。
* 画面ID\(display\_id\)に対応しているAPIは、app-id, datastore-id, field-id など、URLやPayloadの一部に画面から入力したIDを指定することが可能です。

## API一覧

### 認証関連API

本APIを使用するには、最初にログインAPIを実行して、トークンを取得します

#### ログイン関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Login](api-document_jp.md#Login) | ログイン | POST | /api/v0/login | システムへログインする | v0 | - |
| 60 | [Logout](api-document_jp.md#Logout) | ログアウト | POST | /api/v0/users/logout | システムからログアウトする | v0 | - |

### ワークスペース関連API

「ワークスペース」は、Hexabaseのアプリケーションをまとめる領域です。業務の種類や内容に合わせてワークスペースを用意して、複数の業務アプリケーションをまとめておきます。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2 | [WorkspaceList](api-document_jp.md#WorkspaceList) | ワークスペース一覧 | GET | /api/v0/workspaces | ワークスペースの一覧を取得する | v0 | - |
| 3 | [SelectWorkspace](api-document_jp.md#SelectWorkspace) | ワークスペース選択 | POST | /api/v0/workspaces/:workspace-id/select | 現在ワークスペースを選択する | v0 | - |

### グループ関連API

「グループ」は、ワークスペース内に１つツリー構造で存在するし、ユーザーを役割りに応じてまとめる機能です。グループへロールを付与することもできます。

#### グループ一覧の取得

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 49 | [GetGroup](api-document_jp.md#GetGroup) | グループ情報取得 | GET | /api/v0/groups/:group-id | 指定したグループ情報とその配下のグループ一覧を取得 | v0 | - |
| 4 | [GetGroupTree](api-document_jp.md#GetGroupTree) | グループツリー情報取得 | GET | /api/v0/grouptree | ワークスペース内のグループ情報をJSONツリー形式で取得 | v0 | - |

#### グループの登録、変更、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 5 | [CreateGroup](api-document_jp.md#CreateGroup) | 新規グループ作成 | POST | /api/v0/workspaces/:workspace-id/groups/:parent-group-id | 指定グループ配下に新規でグループを作成 | v0 | - |
| 44 | [CreateTopGroup](api-document_jp.md#CreateTopGroup) | 新規グループ作成\(第1階層\) | POST | /api/v0/workspaces/:workspace-id/groups | 第1階層に新規グループを作成 | v0 | - |
| 6 | [UpdateGroup](api-document_jp.md#UpdateGroup) | グループ更新 | PUT | /api/v0/groups/:group-id | 指定したグループ情報を更新する | v0 | - |
| 7 | [DeleteGroup](api-document_jp.md#DeleteGroup) | グループ削除 | DELETE | /api/v0/groups/:group-id | 指定したグループを削除する | v0 | - |

#### グループへのロール設定

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 63 | [UpdateGroupRoles](api-document_jp.md#UpdateGroupRoles) | グループロール更新 | POST | /api/v0/grouproles/:group-id | グループにひも付くロールをすべて削除し、新規付与（洗い変え）する | v0 | - |
| 64 | [AddGroupRoles](api-document_jp.md#AddGroupRoles) | グループロール追加 | PUT | /api/v0/grouproles/:group-id | グループにロールを追加する | v0 | - |

### ユーザー関連API

「ユーザー」はEmailアドレスをIDとした、ログイン可能なアカウントです。必ずワークスペース内のいずれかのグループに属します。Hexabaseへユーザーを追加するには、グループへユーザーを登録した後に、ワークスペースへ招待する必要があります。

#### ログインユーザー情報

ログインしているユーザーに関する情報を取得します。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 43 | [GetUserInfo](api-document_jp.md#GetUserInfo) | ユーザー情報取得 | GET | /api/v0/userinfo | ユーザーの関連情報取得 | v0 | - |
| 61 | [UpdateUserInfo](api-document_jp.md#UpdateUserInfo) | ユーザー情報更新 | PUT | /api/v0/userinfo | ユーザー名、情報の更新 | v0 | - |

#### パスワード変更

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 56 | [ResetPassword](api-document_jp.md#ResetPassword) | パスワード初期化リクエスト | POST | /api/v0/users/password/forgot | ログイン前、パスワード初期化 開始 | v0 | - |
| 57 | [SetNewPassword](api-document_jp.md#SetNewPassword) | パスワード再登録 | PUT | /api/v0/users/password/forgot | ログイン前、パスワード初期化 パスワードを変更 | v0 | - |
| 58 | [ValidatePassword](api-document_jp.md#ValidatePassword) | パスワード変更確認 | GET | /api/v0/users/password/validate | ログイン前、パスワード初期化　パスワー変更状態の確認 | v0 | - |
| 59 | [SetPassword](api-document_jp.md#SetPassword) | パスワード変更登録 | PUT | /api/v0/users/password | ログイン後、パスワード変更 | v0 | - |

#### ユーザー一覧

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 46 | [GetUsersInGroup](api-document_jp.md#GetUsersInGroup) | グループ内ユーザー取得 | GET | /api/v0/groups/:group-id/users | 指定されたグループのユーザー一覧の取得 | v0 | - |
| 50 | [GetUsersInWorkspace](api-document_jp.md#GetUsersInWorkspace) | グループ内ユーザー取得 | GET | /api/v0/workspaces/:workspace-id/users | 指定されたワークスペースのユーザー一覧の取得 | \(old\) | - |
| 10 | [GetAllUsersInWorkspace](api-document_jp.md#GetAllUsersInWorkspace) | ワークスペース全ユーザー取得 | GET | /api/v0/users/all/g/:group-id | ワークスペース内全ユーザー一覧の取得 | v0 | - |

#### ユーザーの追加、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 47 | [AddUser](api-document_jp.md#AddUser) | ユーザー追加 | POST | /api/v0/users | グループに新規ユーザーを作成 | v0 | - |
| 51 | [RemoveUser](api-document_jp.md#RemoveUser) | ユーザー削除 | DELETE | /api/v0/users | グループからユーザーを削除 | v0 | - |

#### ユーザーの招待～初期登録

ユーザーをワークスペースへ招待するには、登録されたユーザーに対して招待メールを送信\([UserInvite](api-document_jp.md#UserInvite)\)します。 受け取ったメールに含まれるリンクをクリックすることでユーザー登録の確認ページへ遷移させます。遷移先画面では確認ID\(ConfirmID\)をもとにユーザー情報を取得\([ConfirmRegistration](api-document_jp.md#ConfirmRegistration)\)し、ユーザー情報を登録する\([RegisterUser](api-document_jp.md#RegisterUser)\)ことではじめてユーザーが作成されます。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 52 | [UserInvite](api-document_jp.md#UserInvite) | ユーザー招待 | POST | /api/v0/userinvite | ユーザーを招待 | v0 | - |
| 53 | [UserRegistration](api-document_jp.md#UserRegistration) | 初回ユーザー登録 | POST | /api/v0/users/registration | ユーザーの初期登録用リクエスト | v0 | - |
| 54 | [ConfirmRegistration](api-document_jp.md#ConfirmRegistration) | ユーザー情報確認 | GET | /api/v0/users/registration/confirm | ConfirmIDからユーザーの初期登録情報の確認 | v0 | - |
| 55 | [RegisterUser](api-document_jp.md#RegisterUser) | ユーザー初期登録 | POST | /api/v0/users/registration/confirm | ユーザーの初期登録、パスワード登録 | v0 | - |

#### CSVデータによるユーザー一括登録

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 9 | [UserImport](api-document_jp.md#UserImport) |  | POST | /api/v0/userimport | ユーザーをCSVで一括インポート | α版 | - |

### アプリケーション関連API

Hexabaseでは、「アプリケーション」ごとに、データベース・データレポート・ダッシュボードなどをまとめています。新しくワークプレースを作成すると「新しいアプリケーション」という名前のアプリケーションが作成されています。  
 アプリケーション内には複数のデータベース（データテーブル）が存在します。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 11 | [GetApplicationsAndDatastores](api-document_jp.md#GetApplicationsAndDatastores) | アプリケーションとデータベース一覧 | GET | /api/v0/workspaces/:workspace-id/applications | アプリケーション一覧のとデータストア一覧を取得 | v0 | - |

#### ロール関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 65 | [AddRoleToUser](api-document_jp.md#AddRoleToUser) | ユーザーへロール付与 | POST | /api/v0/applications/:project-id/userroles | ユーザーにアプリケーションのロールを付与する | v0 | - |
| 66 | [RemoveRoleFromUser](api-document_jp.md#RemoveRoleFromUser) | ユーザからロールを削除 | DELETE | /api/v0/applications/:project-id/userroles | ユーザーからアプリケーションのロールを外す | v0 | - |
| 71 | [GetRoleUsers](api/applications/GetRoleUsers.md#GetRoleUsers) | ロールをもつユーザーの取得 | GET | /api/v0/applications/:app-id/roleusers/:role-id | 指定したロールを所有するユーザーを取得する | v0 | - |

#### フィールド関連API

Hexabaseでは、「アイテム」のカラムを「フィールド」または「画面項目」と呼びます。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 15 | [GetDatastoreFields](api-document_jp.md#GetDatastoreFields) | フィールド一覧 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/fields | フィールド一覧を取得 | v0 | ✓ |

### アイテム関連API

Hexabaseでは、データベースの各データを「アイテム」と呼びます。表の横１行がアイテムになります。一般的なRDBのレコードに相当します。

#### アイテムの検索、表示

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 19 | [ItemList](api-document_jp.md#ItemList) | アイテム一覧 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/search | アイテム一覧を取得 | v0 | ✓ |
| 68 | [GetItemSearchConditions](api/items/GetItemSearchConditions.md#GetItemSearchConditions) | アイテム検索条件取得 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/conditions | アイテムの検索条件を取得する | v0 | ✓ |
| 70 | [GetUserQueries](api/items/GetUserQueries.md#GetUserQueries) | よく使う一覧の取得 | GET | /api/v0/applications/:app-id/queries | ユーザーごとに記憶された検索条件一覧を返す| v0 | ✓ |
| 27 | [GetItemDetails](api/items/GetItemDetails.md#GetItemDetails) | アイテム詳細 | GET | /api/v0/applications/:project-id/datastores/:datastore-id/items/:item-id | アイテムの詳細情報、アクションリストを取得 | v0 | ✓ |

#### アイテムの登録、更新、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 69 | [GetAutoNumber](api/items/GetAutoNumber.md#GetAutoNumber) | 自動採番 | POST | /api/v0/applications/:project-id/datastores/:datastore-id/fields/:field-id/autonum | アイテムへ登録時に任意利用できる番号を採番する | v0 | ✓ |
| 20 | [CreateItem](api-document_jp.md#CreateItem) | アイテム新規登録 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/new | 新規アイテムを作成する | v0 | ✓ |
| 21 | [UpdateItem](api-document_jp.md#UpdateItem) | アイテム更新 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id | アイテムを編集する | v0 | ✓ |
| 22 | [DeleteItem](api-document_jp.md#DeleteItem) | アイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id | １アイテムを削除する | v0 | ✓ |
| 23 | [DeleteItemByConditions](api-document_jp.md#DeleteItemByConditions) | 条件指定してアイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete | 条件を指定してアイテムを一括削除する | v0 | ✓ |

#### アイテムに対するアクション実行

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 12 | [GetNewActionMenu](api-document_jp.md#GetNewActionMenu) | 新規登録アクションの一覧 | GET | /api/v0/datastores/:datastore-id/new-action | 新規アイテム作成アクション一覧を取得 | v0 | - |
| 48 | [CreateItemID](api-document_jp.md#CreateItemID) | 新規アイテムID取得 | POST | /api/v0/datastores/:datastore-id/items/create-id | 新規アイテム作成用のaction\_idを取得 | v0 | - |
| 33 | [CreateItemWithItemID](api-document_jp.md#CreateItemWithItemID) | item\_idを指定して新規アイテムを作成 | POST | /api/v0/items/:item-id/new-actions/:action-id | action\_idを指定して、新規作成アクションを実行\(No.69の後に実行\) | v0 | - |
| 13 | [GetActionFields](api-document_jp.md#GetActionFields) | アクション登録フォーム取得 | GET | /api/v0/datastores/:datastore-id/actions/:action-id/fields | アクションで利用可能なフィールド情報を取得する | v0 | - |
| 62 | [ExecuteAction](api-document_jp.md#ExecuteAction) | アクションの実行 | POST | /api/v0/applications/:project-id/datastores/:datastore-id/items/action/:action-id | 指定アクションを実行する | v0 | ✓ |
| 31 | [ExecuteActionByActionID](api-document_jp.md#ExecuteActionByActionID) | アクションの実行 | POST | /api/v0/items/:item-id/actions/:action-id | アクションを実行 | v0 | - |
| 67 | [ExecuteBulkAction](#ExecuteBulkAction) | 条件を指定してアクションを実行 | POST | /api/v0/applications/:project-id/datastores/:datastore-id/items/bulkaction/:action-id | 指定アクションを実行する | v0 | ✓ |

#### アイテムの関連

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 28 | [GetLinkedItems](api/items/GetLinkedItems.md#GetLinkedItems) | 関連アイテム取得 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/items/links/:item-id | アイテムに関連するアイテム一覧を取得 | v0 | ✓ |
| 24 | [AddItemLink](api-document_jp.md#AddItemLink) | アイテムリンク作成 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/addlink/:item-id | 関連アイテムとのリンクを追加 | v0 | ✓ |
| 25 | [UpdateItemLink](api-document_jp.md#UpdateItemLink) | アイテムリンク更新 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/updatelink/:item-id | 関連アイテムとのリンクを更新 | v0 | ✓ |
| 26 | [DeleteItemLink](api-document_jp.md#DeleteItemLink) | アイテムリンク削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id | 関連アイテムとのリンクを削除 | v0 | ✓ |

#### 添付ファイル関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 29 | [UploadFile](api-document_jp.md#UploadFile) | 添付ファイルUpload | POST | /api/v0/items/:item-id/fields/:field-id/attachments | 添付ファイルフィールドにファイルをアップロード | v0 | - |
| 30 | [DeleteFile](api-document_jp.md#DeleteFile) | 添付ファイル削除 | DELETE | /api/v0/items/:item-id/fields/:field-id/attachments/:file-id | 添付ファイルフィールドのファイルを削除 | v0 | - |
| 35 | [GetFile](api-document_jp.md#GetFile) | ファイルデータの取得 | GET | /api/v0/files/:file-id | 添付ファイルデータを取得 | v0 | - |

#### アイテムの履歴

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 34 | [GetItemHistories](api-document_jp.md#GetItemHistories) | アイテム履歴取得 | GET | /api/v0/datastores/:datastore-id/items/:item-id/histories | 履歴を取得 | v0 | - |
| 45 | [PostItemComment](api-document_jp.md#PostItemComment) | アイテムコメント投稿 | POST | /api/v0/datastores/:datastore-id/items/histories | コメント履歴を登録 | v0 | - |

### CSVデータインポート関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 16 | [ImportItems](api-document_jp.md#ImportItems) | アイテムCSVインポート | POST | /api/v0/applications/:project-id/datastores/:datastore-id/import | CSVデータをデータベースへインポート | v0 | ✓ |
| 17 | [GetImportResults](api-document_jp.md#GetImportResults) | インポート結果取得 | GET | /api/v0/datastores/:datastore-id/import/:id | CSVインポートの結果取得 | v0 | - |

### データレポート関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 37 | [GetReportData](api-document_jp.md#GetReportData) | データレポート取得 | GET | /api/v0/applications/:project-id/reports/:report-id | レポートデータの取得 | v0 | ✓ |
| 38 | [GetReportConditions](api-document_jp.md#GetReportConditions) | データレポート検索条件取得 | GET | /api/v0/applications/:project-id/reports/:report-id/conditions | レポートの検索条件を取得 | v0 | ✓ |
| 39 | [GetReportDataByConditions](api-document_jp.md#GetReportDataByConditions) | 条件指定してデータレポート取得 | POST | /api/v0/applications/:project-id/reports/:report-id/filter | 条件を指定してレポートデータを取得 | v0 | ✓ |

### チャート\(ダッシュボード\)関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 40 | [GetChartData](api-document_jp.md#GetChartData) | チャートデータ取得 | GET | /api/v0/applications/:project-id/charts/:chart-id | チャートデータの取得 | v0 | ✓ |
| 41 | [GetChartConditions](api-document_jp.md#GetChartConditions) | チャート検索条件取得 | GET | /api/v0/applications/:project-id/charts/:chart-id/conditions | チャートの検索条件を取得 | v0 | ✓ |
| 42 | [GetChartDataByConditions](api-document_jp.md#GetChartDataByConditions) | 条件指定してチャートデータ取得 | POST | /api/v0/applications/:project-id/charts/:chart-id/filter | 条件を指定してチャートデータを取得 | v0 | ✓ |

## API仕様詳細

### 認証関連API

本APIを使用するには、最初にログインAPIを実行して、トークンを取得します

#### Login

ログイン

**Description**

Hexabaseにログインして、トークンを取得します

**Method**

POST

**Request URL Format**

```text
/api/v0/login
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "email": "Hexabaseに登録してあるユーザーのメールアドレス",
  "password": "パスワード"
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/login
```

**Response Sample**

```javascript
{
    "token": "xxxxxxxxx"
}
```

#### Logout

ログアウト

**Description**

トークンを使用しログアウトを行う

**Method**

POST

**Request URL Format**

```text
/api/v0/users/logout
```

**Payload**

`Content-Type : application/json`

```text
無
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/logout
```

**Response Sample**

```text
null
```

### ワークスペース関連API

「ワークスペース」は、Hexabaseのアプリケーションをまとめる領域です。業務の種類や内容に合わせてワークスペースを用意して、複数の業務アプリケーションをまとめておきます。

#### WorkspaceList

ワークスペース一覧

**Description**

ワークスペースの一覧を取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/workspaces
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/workspaces
```

**Response Sample**

```javascript
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

#### SelectWorkspace

ワークスペース選択

**Description**

利用したいワークスペースを選択します

**Method**

POST

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/select
```

**URL Params**

```text
workspace-id    : ワークスペースID
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/select
```

**Response Sample**

```text
null
```

### グループ関連API

「グループ」は、ユーザーを役割に応じてまとめる機能です。

#### GetGroup

グループ情報取得

**Description**

指定したグループ情報とその配下のグループ一覧を取得

**Method**

GET

**Request URL Format**

```text
/api/v0/groups/:group-id
```

* `:group-id` は省略可。省略すると、TOPグループの情報を返す。

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/groups
```

**Response Sample**

```javascript
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

**Request Sample2**

```text
GET https://api.xxx.com/api/v0/groups/5c5fd6c084f4be2574e2bcb2
```

**Response Sample2**

```javascript
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

#### GetGroupTree

グループツリー情報取得

**Description**

ワークスペース内のグループをツリー形式のJSONにて取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/grouptree
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/grouptree
```

**Response Sample**

```javascript
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

#### CreateGroup

新規グループ作成

**Description**

新規でグループを指定したグループの配下に作成する

**Method**

POST

**Request URL Format**

```text
/api/v0/groups/:parent-group-id
```

**URL Params**

```text
"parent-group-id": 必須　指定したグループの配下に新規グループを作成
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "name" : "グループ名",  // 必須
  "display_id": "グループID"　 // 必須
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/groups/:parent-group-id
```

**Response Sample**

```javascript
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

#### CreateTopGroup

新規グループ作成\(第1階層\)

**Description**

グループの第1階層に、新しいグループを登録します。登録したグループは、ツリーの直下に配置されます。

**Method**

POST

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/groups
```

**URL Params**

```text
workspace-id    : ワークスペースID
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "name": "グループ名",
  "display_id": "グループを識別するID（組織コードなど）"
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups
```

**Response Sample**

```javascript
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

#### UpdateGroup

グループの更新

**Description**

指定したグループ名を更新します。

**Method**

PUT

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/groups/:group-id
```

**URL Params**

```text
workspace-id    : ワークスペースID
group-id        : グループID
```

`Content-Type : application/json`

```javascript
{
  "name": "グループ名→new name",
  "display_id": "グループを識別するID（組織コードなど）"
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups/59bf3b300e24791418da1aa1
```

**Response Sample**

```text
null
```

#### DeleteGroup

グループを削除

**Description**

指定したグループ名を削除します

**Method**

DELETE

**Request URL Format**

```text
/api/v0/groups/:group-id
```

**URL Params**

```text
group-id        : グループID
```

`Content-Type : application/json`

```javascript
{
  "workspace-id": "グループ名→new name",
  "group-id": "グループを識別するID（組織コードなど）"
}
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/groups/59bf3b300e24791418da1aa1
```

**Response Sample**

```text
null
```

#### UpdateGroupRoles

グループロール更新

**Description**

グループにひも付くロールをすべて削除し、新規付与（洗い変え）する

**Method**

POST

**Request URL Format**

```text
/api/v0/grouproles/:group-id
```

**Payload**

`Content-Type : application/json`

```javascript
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

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/grouproles/:group-id
```

**Response Sample**

```text
{} //空のオブジェクトが返ってくる
```

#### AddGroupRoles

グループロール追加

**Description**

グループにロールを追加する（既存ロールは削除されない）

**Method**

PUT

**Request URL Format**

```text
/api/v0/grouproles/:group-id
```

**URL Params**

```text
group-id :  グループID
```

`Content-Type : application/json`

```javascript
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

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/grouproles/:group-id
```

**Response Sample**

```text
{} //空のオブジェクトが返ってくる
```

### ユーザー関連API

#### GetUserInfo

ユーザーの関連情報取得

**Description**

- tokenで指定されたユーザーに関連した情報を取得する
- user_rolesには、ユーザーが保有するロールの一覧が返る
- user_groupsには、現在のワークスペース内でユーザーが所属するグループの一覧が返る

**Method**

GET

**Request URL Format**

```text
/api/v0/userinfo
```

**Params**

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/userinfo
```

**Response Sample**

```javascript
{
    "u_id": "現在のユーザ",
    "username": "ユーザー名",
    "email": "現在のユーザーのemailアドレス",
    "profile_pic": "ユーザーのプロファイル画像の保存先",
    "current_workspace_id": "現在使用しているワークスペースのID",
    "is_ws_admin": true,   //(bool このユーザーにワークスペースのアドミン権限が付与されているかどうか, trueはアドミン権限有り)
    "user_roles": [
      {
        "r_id": "システム内部のロールID",
        "role_name": "ロール名ID１",
        "role_id": "画面で入力されたロールID",
        "p_id": "プロジェクトID1",
        "application_id": "アプリケーションID",
        "application_name": "アプリケーション名",
        "application_display_order": 0
      },
      {
        "r_id": "5e3ac99c393da500077068b0",
        "role_name": "部長",
        "role_id": "Manager1",
        "p_id": "5e015f03285ab60007442e5e",
        "application_id": "xxSystem",
        "application_name": "バツバツシステム",
        "application_display_order": 0
      }
    ],
    "user_groups": [
      {
        "g_id": "5c5fd6c084f4be2574e2bcaf",
        "group_name": "営業１課",
        "group_id": "1101"
      },
      {
        "g_id": "5c5fd6c084f4be2574e2bcb0",
        "group_name": "A部",
        "group_id": "1001"
      },
      {
        "g_id": "5c5fa7da84f4be4250aaee28",
        "group_name": "全社",
        "group_id": "1000"
      }
    ]
}
```

#### UpdateUserInfo

ユーザー名、情報の更新

**Description**

ユーザーの名前、画像を更新する

**Method**

PUT

**Request URL Format**

```text
/api/v0/userinfo
```

**Payload**

```javascript
{
  "email":"ユーザのemail",　//必須
  "username":"ユーザー名",　
  "user_id":"ユーザーID",　//必須
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/userinfo
```

**Response Sample**

```text
{"error": null //エラーの有無}
```

#### GetUsersInGroup

指定されたグループのユーザー一覧の取得

**Description**

指定されたグループのユーザー一覧を取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/users/api/v0/groups/:group-id/users
```

**URL Params**

```text
group-id :  グループID
```

`Query Param`

```text
recursive        : bool  //グループ階層の下をたどって、所属するすべてのユーザーを取得します。
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/groups/5df9d7d7aeae8e2fa894e324/users?recursive=true
```

**Response Sample**

```javascript
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
    "count": 1//("このグループ内部にいるユーザー数")
}
```

#### AddUser

グループに新規ユーザーを作成

**Description**

指定されたグループに新規ユーザーを作成する

**Method**

POST

**Request URL Format**

```text
/api/v0/users
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "email": "グループに追加したいemailアドレス",　//必須
  "g_id": "グループを識別するID", //必須
  "w_id": "ワークスペースのID",
  "username": "グループに追加したいユーザー名"
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users
```

**Response Sample**

```javascript
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

#### UserRegistration

初回ユーザー登録

**Description**

ログイン前のユーザーの初期登録開始。LandingPage等で最もはじめのユーザーを登録する場合に利用する。指定ユーザーのメールに登録リンクを送信する。

**Method**

POST

**Request URL Format**

```text
/api/v0/users/registration
```

**Payload**

```javascript
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

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/registration
```

**Response Sample**

```javascript
{
  "confirmation_id": "確認ID", 
  "email": "初期登録されたemail", 
  "status": 200
}
```

#### ConfirmRegistration

ユーザーの初期登録の確認

**Description**

ユーザーの初期登録用のメールに添付されたURLから、ユーザーを確認し、確認情報を確認済みにする

**Method**

GET

**Request URL Format**

```text
/api/v0/users/registration/confirm
```

**Params**

\`\`\`Qury Params id : sdafasdfasdfadsffdsafasdf //必須 ユーザー初期登録シーケンスのconfirmation\_id

```text
##### Request URL Sample
```

GET [https://api.xxx.com/api/v0/users/registration/confirm?id=sdafasdfasdfadsffdsafasdf](https://api.xxx.com/api/v0/users/registration/confirm?id=sdafasdfasdfadsffdsafasdf)

```text
##### Response Sample
```

{ "user": { "confirmation\_id": "sdafasdfasdfadsffdsafasdf", //上記の確認ID "confirmed": bool, //true =既に誰かが確認済み,false=まだ確認されていない "email": "hogehoge@gmail.com", //初期登録されたemail "id": "5e8ffd39d4b3e00006344d1e",//システム内部のuser\_id "isElapsed": bool,//true =使用期限切れ, false=まで使用できる "username": "登録されたユーザー名" } }

```text
---
### RegisterUser
ユーザーの初期登録

##### Description
ユーザーを初期登録する。パスワード設定に加え、そのユーザー固有の情報をMap形式で登録することができる。

##### Method
POST
##### Request URL Format
```

/api/v0/users/registration/confirm

```text
##### Payload
```JSON
{
  "confirmation_id":"確認用のID", //必須
  "email":"登録されるemail",　//必須
  "username":"登録されるユーザー名",
  "workspace":"作成するワークスペース名", 
  "password": "設定するパスワード",　// 必須
  "additional_info":{"自由入力フィールド1":"自由入力された値1","自由入力フィールド2":"自由入力された値2"}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/registration/confirm
```

**Response Sample**

```javascript
{​
　"token": "ログイン用アクセストークン取得　例：dfgsdfsdfsdgfafas213dfdc2"
}
```

#### ResetPassword

パスワード初期化リクエスト

**Description**

ログインしていない状態で、パスワード初期化処理を依頼する。該当メールアドレスが存在した場合に、パスワード変更URLを送信する。

**Method**

POST

**Request URL Format**

```text
/api/v0/users/password/forgot
```

**Payload**

```javascript
{
  "email":"パスワードをリセットしたいユーザーのemail",　//必須
  "host":"例：https://stg.xxxxxx.com" //必須

}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/password/forgot
```

**Response Sample**

```javascript
{
  "valid_email": true //パスワード初期化をしたいemailの有無
}
```

#### SetNewPassword

パスワード再登録

**Description**

ログインしていない状態でのパスワードを変更する。前提条件として変更用のパスワード初期化用のIDが必要

**Method**

PUT

**Request URL Format**

```text
/api/v0/users/password/forgot
```

**Payload**

```javascript
{
  "new_password":"必須　新規作成パスワード　例：test",
  "confirm_password":"必須　確認用パスワード 例：test この値は新規作成の値と同じでなければならない",
  "id":"必須　パスワード初期化開始のapi送信後にemailのリンク内部に埋め込まれた情報をここに入れる"
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/users/password/forgot
```

**Response Sample**

```text
なし
```

#### ValidatePassword

パスワード変更状態の確認

**Description**

ログインしていない状態でのパスワード変更後、ユーザー状態に関する情報を取得する。

**Method**

GET

**Request URL Format**

```text
/api/v0/users/password/validate
```

**Params**

id : 必須 emailに送信されたid情報

##### Request URL Sample

```text
GET https://api.xxx.com/api/v0/users/password/validate?id=xxxxxxxxxxxxxxxxxxxxxxxx
```

##### Response Sample

```text
{​ 
  "id": "5e1484d4aeae8e202819528d", 
  "accessed": true, // bool パスワード変更処理開始後アクセス済みかどう 
  "created_at": "2020-01-07T13:17:08.01Z", //パスワード作成日 
  "isElapsed": false, // bool パスワード変更処理の期限切れかどうか 
  "updated_at": "2020-01-07T13:31:20.961Z" // パスワード更新日 
}
```



---
### SetPassword
ログイン後、パスワード変更

##### Description
ログインしているユーザーのパスワードを変更する
##### Method
PUT
##### Request URL Format
```

/api/v0/users/password

```text
##### Payload
```JSON
{
  "confirm_password":"必須　新しいパスワードの確認 //入力内容はnew_paswordと同じで有る必要が有る",
  "new_password":"必須　新しいパスワード",
  "old_password":"必須　今まで使用していたパスワード"
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/users/password
```

**Response Sample**

```text
{
  "error": null //エラーの有無
}
```

#### AddRoleToUser

ユーザーへロール付与

**Description**

ユーザーにアプリケーションのロールを付与する

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:project-id/userroles
```

**URL Params**

```text
project-id: アプリケーション表示ID
```

**Payload**

```javascript
{
    "user_id": "ロールを付加したい対象のユーザーID",
    "role_id": "ロール表示ID" 
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/:project-id/userroles
```

**Response Sample**

Status 200

```text
{"error": null //エラーの有無}
```

Status 403

```text
{
    "code": 999,
    "message": "No privileges to the Application"//ユーザーのプロジェクト権限を追加する権限が無い
}
```

#### RemoveRoleFromUser

ユーザからロールを削除

**Description**

ユーザーからアプリケーションのロールを外す

**Method**

DELETE

**Request URL Format**

```text
/api/v0/applications/:project-id/userroles
```

**URL Params**

```text
project-id: アプリケーション表示ID
```

```javascript
{
    "user_id": "ロールを外したい対象のユーザーID",
    "role_id": "ロール表示ID" 
}
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/applications/:project-id/userroles
```

**Response Sample**

Status 200

```text
{"error": null //エラーの有無}
```

Status 403

```text
{
    "code": 999,
    "message": "No privileges to the Application"//ユーザーのプロジェクト権限を外す権限が無い
}
```

#### UserImport

ユーザーをインポート

**Description**

指定されたグループにユーザーをインポートする

**Method**

POST

**Request URL Format**

/api/v0/userimport

**Payload**

`Content-Type : application/form-data`

```javascript
{
  "current_workspace_id":"ユーザーをインポートする対象のワークスペースID", //必須
  "filename":"インポートする目的のCSVファイル名",　//必須 
  "file":"バイナリー型CSVファイル　, CSV ファイルのヘッダーはEmail, UserName,    Password,    GroupDisplayIDs,    RoleDisplayIDs,    IsDelete
" //必須
}
```

**Request Sample**

```text
POST https://api.xxx.com/api/v0/userimport
```

**Response Sample**

```javascript
{"error":null}
```

#### GetUsersInWorkspace

ワークスペースのユーザー一覧の取得

**Description**

指定されたワークスペースのユーザー一覧の取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/users
```

**URL Params**

```text
workspace-id :  ワークスペースID
admin_only : 管理者のみを返すためのブール値
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/workspaces/5d8b44adef2261640ab04ef6/users?admin_only=true
```

**Response Sample**

```javascript
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

#### GetAllUsersInWorkspace

ワークスペース全ユーザー取得

**Description**

指定グループ配下のユーザー全員のデータを取得する

**Method**

GET

**Request URL**

```text
/api/v0/users/all/g/:group-id
```

**Params**

```text
group-id :  グループID
```

**Request Sample**

```text
GET https://api.xxx.com/api/v0/users/all/g/582b26d8fb90a15e0c24ad81
```

**Response Sample**

```javascript
{
    "members": [
        {
            "confirmed": false,
            "email": "hi__12@b-eee.com",
            "email_sent": false,
            "profile_pics": [
                {
                    "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"
                }
            ],
            "u_id": "58a29e35bf400ddced9fede3",
            "username": "hi__12"
        },
        {
            "confirmed": false,
            "email": "hi__13@b-eee.com",
            "email_sent": false,
            "profile_pics": [
                {
                    "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"
                }
            ],
            "u_id": "58a29e36bf400ddced9fede4",
            "username": "hi__13"
        },
        :
        :(省略)
        :
        {
            "confirmed": false,
            "email": "test22@b-eee.com",
            "email_sent": false,
            "profile_pics": [
                {
                    "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"
                }
            ],
            "u_id": "58466a7afb90a1024d298306",
            "username": "test222"
        }
    ],
    "totalMembers": 10
}
```

#### RemoveUser

グループからユーザーを削除

**Description**

グループからユーザーを削除する

**Method**

DELETE

**Request URL Format**

```text
/api/v0/users
```

**Params**

`Content-Type : application/json`

```javascript
{
    "g_id": "グループを識別するID", //必須
    "u_id": "ユーザーを識別するID", //必須
    "w_id": "ワークスペースを識別するID"
}
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/users
```

**Response Sample**

```javascript
{
    "error": null
}
```

#### UserInvite

ユーザーを招待

**Description**

ユーザーを招待する

**Method**

POST

**Request URL Format**

```text
/api/v0/userinvite
```

**Payload**

`Content-Type : application/json`

```javascript
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

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/userinvite
```

**Response Sample**

```javascript
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

Hexabaseでは、「アプリケーション」ごとに、データベース・データレポート・ダッシュボードなどをまとめています。新しくワークプレースを作成すると「新しいアプリケーション」という名前のアプリケーションが作成されています。

#### GetApplicationsAndDatastores

アプリケーション一覧、データストア一覧の取得

**Description**

指定ワークスペース配下のアプリケーション（データストア含む）の一覧を取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/applications
```

**URL Params**

```text
workspace-id    : ワークスペースID
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/applications
```

**Response Sample**

```javascript
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

Hexabaseでは、「アイテム」のカラムを「フィールド」または「画面項目」と呼びます。

#### GetDatastoreFields

フィールド一覧（DisplayIDを利用）

**Description**

利用可能なフィールドの一覧を取得します（DisplayIDを利用）

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/fields
```

**URL Params**

```text
app-id  : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したID）
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/fields
```

**Response Sample**

```javascript
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

Hexabaseでは、データベースの各データを「アイテム」と呼びます。表の横１行がアイテムになります。一般的なRDBのレコードに相当します。

#### ItemList

アイテム一覧の取得

**Description**

検索条件を指定してアイテムの一覧を取得します

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/search
```

**URL Params**

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したIDを指定）
```

**Payload**

```text
conditions          : 検索条件を指定
per_page            : 検索結果の件数
page                : ページ数
sort_field_id       : ソートするフィールドIDを指定
sort_order          : 昇順の場合"asc" 降順の場合"desc"
use_default_search  : true or false デフォルト検索条件(注)を適用する場合、trueを指定
```
 (注：`デフォルト検索条件`はHexabase UIの一覧画面で、検索条件ダイアログでチェックを入れて指定します。)

#### conditions

（説明）conditions パラメータの指定について
- 日付型、時刻型、数値型フィールドの場合、 `search_value` の一番目の値がFrom、2番目の値がToを意味します。
- どちらかにnullを指定すると、From～、To～といった検索が可能となります。
- 日付型の場合、値に `"TODAY"`という文字列を入れると、本日～といった検索が可能です。
- テキスト型または複数行テキストの場合、search_valueを"|"で区切ると、OR検索が可能です。
- テキスト型または複数行テキストの場合、"exact_match": trueとした場合、serach_valueの配列に複数条件を指定するとOR検索となります。
```
"exact_match": true, // 完全一致で検索
"search_value": [
  "ABC|DEF",
  "GHI", 
  "JKL", // ABC or DEF or GHI or JKLを検索
]
```
- テキスト型または複数行テキストの場合、"exact_match": falseとした場合、serach_valueの1番目の値に対して正規表現が利用可能です。例えば以下のような指定でOR検索が可能です。正規表現言語としてPCRE（Perl互換正規表現）に従います。
```
"exact_match": false, 
"search_value": [
  "ABC|DEF", // ABC または DEFを検索
]
```
（conditions 指定サンプル）
```text
  {
  "conditions": [
    {
      "id": "FIELD_ID", // Hexabase画面で入力したIDを指定
      "search_value": [
        "fa"
      ],
      "exact_match": true, // 完全一致で検索
      "include_null": true // 空白を含む
    },{
      "id": "FIELD_ID2", 
      "search_value": [
        "value"
      ],
      "exact_match": false, // 部分一致で検索
      "include_null": false // 空白を除く
    },{
      "id": "i_id", // idに "i_id" を指定すると、指定したItemを対象にできます
      "search_value": [
        "58272f4efb90a148d850qwer", // item_id
        "5846636efb90a1024d29as12", // item_id
        "5846636efb90a1024d29asdf"  // item_id (複数件を指定可能)(OR条件)
      ]
    },{
      "id": "updated_by", // idに "updated_by" または "created_by" を指定すると、指定したユーザー(u_id)が更新、作成したItemを検索可能です。
      "search_value": [
        "58272f4efb90a148d850qwer", // user_id
        "5846636efb90a1024d29as12", // user_id
        "5846636efb90a1024d29asdf"  // user_id (複数件をOR指定可能)(OR条件)
      ]
    },{
      "id": "updated_at", // idに "updated_at" または "created_at" を指定すると、更新日・作成日での範囲検索が可能です。
      "search_value": [
        "2020-01-24T10:42:07.880Z",
        null,                       // 指定日付以後の更新されたItemを指定
      ]
    },{
      "id": "58bbaa27fbfcba773851339f", // 日付型フィールドでは "TODAY"キーワードを指定可能
      "search_value": [
        "TODAY",
        null     //本日以降のItemを対象とする
      ],
    },{
      "id": "58bbaa27fbfcba773851339f", // 数値型
      "search_value": [
        null,
        "100"  // 100以下の値を検索 ※数値も""で括って指定する
      ],
    },{
      "id": "5e5f334e8250710006078dbd", // StatusID のフィールドID
      "search_value": [
        "5e5f334e8250710006078dc0"   // status_id  
      ]
    }
  ],
  "page": 1,
  "per_page": 100,
  "sort_field_id": "FIELD_ID", // Hexabase画面で入力したIDを指定
  "sort_order": "asc",
  "include_links" : true, // true or false.  trueの場合、取得結果に各Itemに関連するi_idの配列を含める
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/5c6363d984f4be7de0350445/datastores/DATABASEID/items/search
```

**Response Sample**

```javascript
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

#### CreateItem

新規アイテムを作成（DisplayIDの利用）

**Description**

新規アイテムを作成します（Hexabase画面から入力したIDを指定）

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/new
```

**URL Params**

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したIDを指定）
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/new
```

**Payload**

（例） `Content-Type : application/json`

```javascript
{
  "item": {
      "field_id": "登録データ",
      "title": "タイトル",
      "assignee": "担当者",
  }
  "related_ds_items" : {
      "関連データストアID_1" : [{ },{ },{ },{ }... ] ,
      "関連データストアID_2" : [{ },{ },{ },{ }... ] ,
    },  // 関連するデータストアの新規・更新・削除を指定  詳細は以下を参照
}
```
* 関連するアイテムも同時に更新する場合は、以下フォーマットで指定
```javascript
    "related_ds_items" : { // 関連するデータストアの新規・更新・削除を指定
      "RELATED_DS_1" : [
        {
          "operation" : 1,  // new
          "action_id" : "", // new actionID　※省略可 (省略するとデフォルトの新規アクションが利用される)
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID2" : "data",
            "FIELD_ID3" : "data",
            "FIELD_ID4" : "data",
          },
          "related_ds_items" : {  // related_ds_itemsをネストさせることも可能。（同一Datastoreの複数ネストさせることは不可）
            "関連データストアID_3" : [{ },{ },{ },{ }... ] ,
          }
        },{
          "operation" : 2,  // update
          "action_id" : "", // update actionID　※省略可 (省略するとデフォルトの更新アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aaa3f", // 対象アイテムID
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID3" : "data"
          }
        },{
          "operation" : 3,  // delete
          "action_id" : "", // delete actionID　※省略可 (省略するとデフォルトの削除アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aqr45", // 対象アイテムID
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        }
      ]
      "RELATED_DS_2" : [ // sample 省略 ]
      "RELATED_DS_3" : [ // sample 省略 ]
    }
```

**Response Sample**

```javascript
{
    "error": null,
    "history_id": "5d661782aa39559a80479492",
    "item_id": "5a2647410e24792d87451e34"
}
```

#### UpdateItem

アイテムの編集（DisplayIDの利用）

**Description**

指定したアイテムを更新します（Hexabase画面から入力したIDを指定）

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

```javascript
{
    "comment": "test-comment"
    "item": {
        "CAR_NAME": "value": "名前のデータ", // text tyepe
        "CAR_TYPE": "5d4c058baa39555618ac9e98", // select type
        "OPTIONS" : [ "58bbaa27fbfcba6098746061", "596e2327fbfcbab8283dde09"],  // checkbox type
    },
    "groups_to_publish":["画面グループID", "システムのグループID"],　// item を閲覧可能とするグループIDを指定（省略可）
    "use_display_id" : true,  // IDに画面IDを利用。 groups_to_publishを利用する場合はtrueとする。
    "is_force_update": true,
    "related_ds_items" : {
      "関連データストアID_1" : [{ },{ },{ },{ }... ] ,
      "関連データストアID_2" : [{ },{ },{ },{ }... ] ,
    },  // 関連するデータストアの新規・更新・削除を指定  詳細は以下を参照
}
```
* 関連するアイテムも同時に更新する場合は、以下フォーマットで指定
```javascript
    "related_ds_items" : { // 関連するデータストアの新規・更新・削除を指定
      "RELATED_DS_1" : [
        {
          "operation" : 1,  // new
          "action_id" : "", // new actionID　※省略可 (省略するとデフォルトの新規アクションが利用される)
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID2" : "data",
            "FIELD_ID3" : "data",
            "FIELD_ID4" : "data",
          },
          "related_ds_items" : {  // related_ds_itemsをネストさせることも可能。（同一Datastoreの複数ネストさせることは不可）
              "関連データストアID_3" : [{ },{ },{ },{ }... ] ,
          }
        },{
          "operation" : 2,  // update
          "action_id" : "", // update actionID　※省略可 (省略するとデフォルトの更新アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aaa3f", // 対象アイテムID
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID3" : "data"
          }
        },{
          "operation" : 3,  // delete
          "action_id" : "", // delete actionID　※省略可 (省略するとデフォルトの削除アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aqr45", // 対象アイテムID
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        }
      ]
      "RELATED_DS_2" : [ // sample 省略 ]
      "RELATED_DS_3" : [ // sample 省略 ]
    }
```

* 更新用Valueは`changes` プロパティへ以下のように配列で指定することも可能です。　
```
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
```
アイテム更新時にグループロールを付与する、画面グループIDを使用する場合はuse_display_idをtrueにする、画面グループIDを使う場合は全て画面グループIDに統一する、システムのグループID(g_id)の場合全てそれに統一する　現在のユーザーの所持しているユーザーロールを元にロール付与出来るか判断。例：グループツリー下層から上層にグループを付与できない　warningが返される。上層から下層に向けては付与可能。

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/edit/5d4c058baa39555618ac9e8b
```

**Response Sample**

```text
null
```

#### DeleteItem

アイテムの削除（DisplayIDの利用）

**Description**

指定したアイテムを削除します（Hexabase画面から入力したIDを指定）

**Method**

DELETE

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

（注意）
- パラメータ指定しない場合でも、空のJSON `{}`を指定する必要があります
- delete_linked_items : trueの場合は、削除対象のtarget_datastoresを指定する必要があります。
- target_datastoresには、画面IDまたはd_idを指定可能です。孫データベースなど、関連をたどって指定可能です。
- このAPIが削除可能な１アイテムに関連するアイテムの上限は`100件`です。100件を超えた場合、その関連アイテムは削除されません。

```javascript
{
  delete_linked_items : true,                                     // true : 関連したアイテムも削除
  target_datastores: [ "DATASTORE_A", "DATASTORE_B", ...] // delete_linked_items: trueの場合、削除する関連データストアの画面ID(またはd_id)を指定します。（同一アプリケーション内のみ指定可能）注意：指定しない場合は、削除されません。
}
```

**Request URL Sample**

```text
DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/items/delete/5d4c058baa39555618ac9e8b

Payload (空のJSONを指定する必要があります)
{}
```

**Response Sample**

```javascript
{
    "error": null,
}
```

#### DeleteItemByConditions

条件を指定してアイテムを削除（DisplayIDの利用）

**Description**

検索条件を指定して、条件にマッチしたアイテムを削除します

**Method**

DELETE

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/delete
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
```

`Content-Type : application/json`

```javascript
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

**Request URL Sample**

```text
DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/items/delete
```

**Response Sample**

```javascript
{
    "error": null,
}
```

#### AddItemLink

関連アイテムとのリンクを追加（DisplayIDの利用）

**Description**

関連アイテムとのリンクを追加します

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/addlink/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

```text
{
    "link_datastore_id": "DATABASE_2",  // データストアID（Hexabase画面から入力したIDを指定）
    "link_item_id": "5d4c055eaa39555618ac9e6a" // 追加するアイテムID
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/addlink/5d4c058baa39555618ac9e8b
```

**Response Sample**

```text
null
```

#### UpdateItemLink

関連アイテムとのリンクを更新

**Description**

関連アイテムとのリンクを更新します

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/updatelink/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

```text
{
  "old_link_datastore_id": "DATABASE_2",　// 更新するリンク先データストアID
  "old_link_item_id": "5db16351ef2261da6f3b3560",　// 更新するリンク先アイテムID
  "new_link_datastore_id": "DATABASE_2",　// 追加するデータストアID
  "new_link_item_id": "5db16351ef2261da6f3b356b"　// 追加するアイテムID
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/updatelink/5d4c058baa39555618ac9e8b
```

**Response Sample**

```text
null
```

#### DeleteItemLink

関連アイテムとのリンクを削除（DisplayIDの利用）

**Description**

関連アイテムとのリンクを削除します

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

```text
{
    "link_datastore_id": "DATABASE_2",
    "link_item_id": "5d4c055eaa39555618ac9e6a"
}
```

**Request URL Sample**

```text
POST http://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/dellink/5d4c058baa39555618ac9e8b
```

**Response Sample**

```javascript
null
```


#### GetActionFields

アクションフィールド情報

**Description**

アクションで利用可能なフィールド情報を取得する

**Method**

GET

**Request Format**

```text
/api/v0/datastores/:datastore-id/actions/:action-id/fields
```

**URL Params**

```text
datastore-id    : データストアID
action-id       : アクションID
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/datastores/59bf42550e2479186a6c6c70/5a2671ec0e24794c979fa5b1/fields
```

**Response Sample**

```javascript
{
    "action": {
        "action_id": "5a2671ec0e24794c979fa5b1",
        "display_order": 3,
        "description": "",
        "crud_type": "2",
        "next_status_id": "5a2671eb0e24794c979fa5ab"
    },
    "action_fields": {
        "5a2671eb0e24794c979fa5a9": {
            "field_id": "5a2671eb0e24794c979fa5a9",
            "name": "タイトル",
            "display_id": "Fld-U2WtgeXa",
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
        "5a2671eb0e24794c979fa5aa": {
            "field_id": "5a2671eb0e24794c979fa5aa",
            "name": "ステータス",
            "display_id": "Fld-cTsftJE1",
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
        "5a2672080e24794c979fa5b4": {
            "field_id": "5a2672080e24794c979fa5b4",
            "name": "選択肢1",
            "display_id": "Fld-oQmo4lvb",
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
                    "option_id": "ba280b86-fa91-4ab5-acf7-4c6d2445ffc7",
                    "sort_id": 0,
                    "value": "選択1",
                    "enabled": true
                },
                {
                  "option_id": "c742f7f6-0339-4240-a1ea-66543fc504ca",
                  "sort_id": 1,
                  "value": "選択2",
                  "enabled": true
                }
            ]
        },
        "5a26722e0e24794c979fa5b6": {
            "field_id": "5a26722e0e24794c979fa5b6",
            "name": "数値1",
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
        "5a26724e0e24794c979fa5b7": {
            "field_id": "5a26724e0e24794c979fa5b7",
            "name": "ユーザ1",
            "display_id": "Fld-mZbgboDW",
            "dataType": "users",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "5a2672880e24794c979fa5b8": {
            "field_id": "5a2672880e24794c979fa5b8",
            "name": "データストア参照1",
            "display_id": "Fld-2CtMZFCM",
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
            "max_value": ""
            },
        "5a2672970e24794c979fa5b9": {
            "field_id": "5a2672970e24794c979fa5b9",
            "name": "自動採番1",
            "display_id": "Fld-v8f4OWuI",
            "dataType": "autonum",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": true,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "5a2673740e24794c979fa5bf": {
            "field_id": "5a2673740e24794c979fa5bf",
            "name": "添付ファイル1",
            "display_id": "Fld-WLZo8vwy",
            "dataType": "file",
            "search": false,
            "show_list": false,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": true,
            "unique": false,
            "min_value": "",
            "max_value": ""
        }
    },
    "action_field_settings": {
        "5a2671eb0e24794c979fa5a9": {
            "action_id": "5a2671ec0e24794c979fa5b1",
            "field_id": "5a2671eb0e24794c979fa5a9",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2671eb0e24794c979fa5aa": {
            "action_id": "5a2671ec0e24794c979fa5b1",
            "field_id": "5a2671eb0e24794c979fa5aa",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2672080e24794c979fa5b4": {
            "action_id": "",
            "field_id": "5a2672080e24794c979fa5b4",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a26722e0e24794c979fa5b6": {
            "action_id": "",
            "field_id": "5a26722e0e24794c979fa5b6",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a26724e0e24794c979fa5b7": {
            "action_id": "",
            "field_id": "5a26724e0e24794c979fa5b7",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2672880e24794c979fa5b8": {
            "action_id": "",
            "field_id": "5a2672880e24794c979fa5b8",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2672970e24794c979fa5b9": {
            "action_id": "",
            "field_id": "5a2672970e24794c979fa5b9",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2673740e24794c979fa5bf": {
            "action_id": "",
            "field_id": "5a2673740e24794c979fa5bf",
            "show": true,
            "update": true,
            "mandatory": false
        }
    }
}
```

#### ExecuteAction

指定アクションを実行する

**Description**

指定アクションを実行し、アイテム更新、コメントの追記

**Method**

POST

**Request Format**

```text
/api/v0/applications/:project-id/datastores/:datastore-id/items/action/:item-id/:action-id
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "comment": "test-comment"
  "item": {
      "5e256923aeae8e212cb2e03b": "value", // text tyepe
      "58bbaa27fbfcba6098746061": "5d4c058baa39555618ac9e98", // select type
      "58bbaa27fbfcba6098746067" : [ "58bbaa27fbfcba6098746015", "596e2327fbfcbab8283dde09"],  // checkbox type
  },
  "rev_no":8,　//現在のrevison番号
  "related_ds_items" : {
      "関連データストアID_1" : [{ },{ },{ },{ }... ] ,
      "関連データストアID_2" : [{ },{ },{ },{ }... ] ,
    },  // 関連するデータストアの新規・更新・削除を指定  詳細は以下を参照
}
```
* 関連するアイテムも同時に更新する場合は、以下フォーマットで指定
```javascript
    "related_ds_items" : { // 関連するデータストアの新規・更新・削除を指定
      "RELATED_DS_1" : [
        {
          "operation" : 1,  // new
          "action_id" : "", // new actionID　※省略可 (省略するとデフォルトの新規アクションが利用される)
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID2" : "data",
            "FIELD_ID3" : "data",
            "FIELD_ID4" : "data",
          },
          "related_ds_items" : {  // related_ds_itemsをネストさせることも可能。（同一Datastoreの複数ネストさせることは不可）
              "関連データストアID_3" : [{ },{ },{ },{ }... ] ,
          }
        },{
          "operation" : 2,  // update
          "action_id" : "", // update actionID　※省略可 (省略するとデフォルトの更新アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aaa3f", // 対象アイテムID
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID3" : "data"
          }
        },{
          "operation" : 3,  // delete
          "action_id" : "", // delete actionID　※省略可 (省略するとデフォルトの削除アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aqr45", // 対象アイテムID
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        }
      ]
      "RELATED_DS_2" : [ // sample 省略 ]
      "RELATED_DS_3" : [ // sample 省略 ]
    }
```


* 更新用Valueは`changes` プロパティへ配列で指定することも可能です。　
```
"changes": [
    {
      "id": "5e256923aeae8e212cb2e03b",
      "value": "value"
    },
    {
      "id": "58bbaa27fbfcba6098746061", 
      "value": "5d4c058baa39555618ac9e98",
    },
    {
      "id": "58bbaa27fbfcba6098746067",
      "value": [ "58bbaa27fbfcba6098746015", "596e2327fbfcbab8283dde09"],  // checkbox type
    },
  ]
```

**Request Sample**

```text
POST https://api.xxx.com//api/v0/applications/:project-id/datastores/:datastore-id/items/action/:item-id/:action-id
```

**Response Sample**

```text
null
```

#### ExecuteActionByActionID

アクション実行

**Description**

アクションを実行します

**Method**

POST

**Request URL Format**

```text
/api/v0/items/:item-id/actions/:action-id
```

**URL Params**

```text
item-id      : アイテムID
action-id    : アクションID
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "rev_no":2, // "is_force_update": trueの場合、省略可能
  "is_force_update": true, // "rev_no"を指定した場合、省略可能
  "datastore_id": "59ad2d890e247927638e7619",
  "comment": "comment..."
  "item": {
    "5a26722e0e24794c979fa5b6": "更新データサンプル",  // field_id : 更新value
    "5ab84bfecce5fe5c983ea184": [   // user type Fieldの場合
        "58272f4efb90a148d8508d9c", // user_id   
        "5846636efb90a1024d2982fa"  // user_id
      ],
    "5ab0c239cce5fed3a859a910": [    // attachment file type Fieldの場合
        "5ab84c1fcce5fe5c983ea185",  // file_id
        "5ab84c1fcce5fe5c983ea186"   // file_id
      ]
  },
  "related_ds_items" : {
      "関連データストアID_1" : [{ },{ },{ },{ }... ] ,
      "関連データストアID_2" : [{ },{ },{ },{ }... ] ,
    },  // 関連するデータストアの新規・更新・削除を指定  詳細は以下を参照
}
```
* 関連するアイテムも同時に更新する場合は、以下フォーマットで指定
```javascript
    "related_ds_items" : { // 関連するデータストアの新規・更新・削除を指定
      "RELATED_DS_1" : [
        {
          "operation" : 1,  // new
          "action_id" : "", // new actionID　※省略可 (省略するとデフォルトの新規アクションが利用される)
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID2" : "data",
            "FIELD_ID3" : "data",
            "FIELD_ID4" : "data",
          },
          "related_ds_items" : {  // related_ds_itemsをネストさせることも可能。（同一Datastoreの複数ネストさせることは不可）
            "関連データストアID_3" : [{ },{ },{ },{ }... ] ,
          }
        },{
          "operation" : 2,  // update
          "action_id" : "", // update actionID　※省略可 (省略するとデフォルトの更新アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aaa3f", // 対象アイテムID
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID3" : "data"
          }
        },{
          "operation" : 3,  // delete
          "action_id" : "", // delete actionID　※省略可 (省略するとデフォルトの削除アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aqr45", // 対象アイテムID
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        }
      ]
      "RELATED_DS_2" : [ // sample 省略 ]
      "RELATED_DS_3" : [ // sample 省略 ]
    }
```

* rev\_noは排他チェックに利用しています。/api/v0/datastores/:datastore-id/items/searchで返されるrev\_noを指定します。指定したrev\_noとデータベース内のrev\_noが異なる場合は、エラーとなります。（排他制御）
* rev\_noのエラーチェックをせず、強制的にデータ更新を行う場合は、 `is_force_update` フラグを `true` にして実行します。その場合はrev\_noのフィールドは指定不要。最後に更新されたデータで上書きされます。
* フィールドのデータタイプがユーザータイプ、添付ファイルタイプの場合、valueにはそれぞれuser\_id、file\_id の配列を指定します。
* フィールドのデータタイプが日付の場合、以下のフォーマットで指定します。

    yyyy-mm-ddThh:mm:ss.SSSZ \(.SSSは省略可\)  

    TZ間に指定する時刻は、UTC時刻を指定  

    例\) 2018年1月11日を指定する場合、"2018-01-10T15:00:00.000Z"
* 更新用Valueは`changes` プロパティへ配列で指定することも可能です。　
```
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
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/actions/5a2671ec0e24794c979fa5b1
```

**Response Sample**

```text
null
```

---
#### ExecuteBulkAction
条件を指定して、アクションを一括実行する

**Description**
- 指定した条件にマッチした対象アイテムに対して一斉にアクションを実行し、アイテムに更新とコメントを付与します。
- 一括でステータスを変更するような利用シーン（一括承認、など）や、一括でフィールドの値を一斉更新する場合などで利用可能です。
- 同時処理実行件数は デフォルトで100件です。`max_items`パラメータで最大300件まで指定が可能です。
- `continue_proc` オプションをtrueにすると、対象が最大件数を超えた場合に最大件数まで更新をおこないます。結果JSONに含まれる`matched` = `processed`となるまでこのAPIを複数回実行することで、全件の更新が可能です。
- このAPIで更新されたデータは常に最新のrev_noを判定して更新します。（force_updateオプション＝trueとして実行し、排他制御はされません）

**Method**

POST

**Request URL Format**
```
/api/v0/applications/:project-id/datastores/:datastore-id/items/bulkaction/:action-id
```

**Payload**
conditions の詳細については、[conditions](#conditions)を参照

`Content-Type : application/json`
```text
{
  "conditions": [
    {
      "id": "i_id", // i_id を指定すると、指定したItemを対象にできます
      "search_value": [
        "58272f4efb90a148d850qwer", // item_id
        "5846636efb90a1024d29as12", // item_id
        "5846636efb90a1024d29asdf"  // item_id (複数件を指定可能)
      ]
    },
    {
      "id": "5e5f334e8250710006078dbd", // StatusID のフィールドID
      "search_value": [
        "5e5f334e8250710006078dc0"   // status_id  (s_id)
      ]
    }
  ],
  "item": {
    "5a26722e0e24794c979fa5b6": "更新データサンプル",  // field_id : 更新value
    "5ab84bfecce5fe5c983eb654": ["5ab84c1fcce5fe5c983ea186","5846636efb90a1024d2982fa" ], // select type Fieldの場合 選択肢ID o_id の配列を指定
    "5ab84bfecce5fe5c983ea184": ["58272f4efb90a148d8508d9c","5ab84c1fcce5fe5c983ea999" ], // user type Fieldの場合 user_id の配列を指定
    "5ab0c239cce5fed3a859a910": ["5ab84c1fcce5fe5c983ea185","5ab84c1fcce5fe5c983ea789" ]　// attachment file type Fieldの場合、file_idの配列を指定
  }
  "comment": "一括承認", // アクション実行時にアイテムへ付加するコメントメッセージ
  "max_items": 100, // 最大の処理実行件数. デフォルトは100.　最大300件まで。10件単位で指定する（10,20,30,...300)
  "use_display_id" : false, // 画面IDを指定 trueの場合、フィールドIDに画面IDを利用可能
  "continue_proc": true // true: 対象アイテム件数がmax_itemsを超えた場合、max_items件まで処理を実行する。false(default): 対象がmax_itemsを超えていたらエラー（処理しない）
}
```
* 更新itemの情報は、変更点のみを指定します。
* 更新用Valueは`changes` プロパティへ配列で指定することも可能です。　
```
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
```

**Request URL Sample**
```
POST https://api.xxx.com//api/v0/applications/:project-id/datastores/:datastore-id/items/bulkaction/:action-id
```

**Response Sample**
```text
// 成功時
{
    "has_error": false,
    "result": {
        "matched": 99,
        "processed": 99
    }
}

// 一部エラー時
{
    "errors": [
        {
            "description": "error occured when execute action.",
            "error": "Error",
            "error_level": "ERROR",
            "reference_id": "i_id:5c6a674f84f4be1f241ff4af"
        },
        {
            "description": "error occured when execute action.",
            "error": "Error sample",
            "error_level": "ERROR",
            "reference_id": "i_id:5c6a674f84f4be1f241ff778"
        }
    ],
    "has_error": true,
    "result": {
        "matched": 21,
        "processed": 19
    }
}

// 対象件数がmax_itemsを超えた場合、Warn出力（以下はmax_items:10と設定した例）
{
    "errors": [
        {
            "description": "the number of items has reached max_items 10",
            "error_level": "WARN"
        }
    ],
    "has_error": true,
    "result": {
        "matched": 15,
        "processed": 10
    }
}

// 対象件数が見つからない場合は、Warn出力
{
    "errors": [
        {
            "description": "target was not found.",
            "error": "",
            "error_level": "WARN"
        }
    ],
    "has_error": false,
    "result": {
        "matched": 0,
        "processed": 0
    }
}
```

---
#### GetNewActionMenu
新規作成アクションメニュー一覧

**Description**

ログインユーザーが利用可能な`新規作成アクション`の一覧を取得します。  
 利用シーンとしては、一覧画面等に配置される「新規作成」ボタン押下時等にCallして、ユーザーが利用可能な新規作成アクションのメニューを表示する際に利用します。  
 通常新規作成メニューは１つですが、Hexabaseでは複数の新規作成アクションを設定することができます。

**Method**

GET

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/new-action
```

**URL Params**

```text
datastore-id    : データストアID
```

**Request Sample**

```text
GET https://api.xxx.com/api/v0/datastores/59bf42550e2479186a6c6c70/new-action
```

**Response Sample**

```javascript
{
    "actions": [
        {
            "action_id": "5a2502f00e24792b67887200",  // アクションID
            "display_order": 2,  // メニューの表示順。HexabaseのActionメニューのソート順
            "crud_type": "1",  // 常に1（新規登録）が返る
            "next_status_id": "5a2502f00e24792b678871f8"   //アクション実行後、遷移するステータスID
        }
    ]
}
```

#### CreateItemID

新規アイテムID取得

**Description**

新規アイテムの入力フォームを表示する際に、あらかじめアイテムIDを取得する際に利用します。  
 取得したアイテムIDは、アイテム登録前に添付ファイルのアップロードすることが必要な場合に利用します。  
 このAPIで取得したitem\_idは、[PostNewAction](api-document_jp.md#PostNewAction) APIで新規アイテムを登録する際に利用します。

**Method**

POST

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/items/create-id
```

**URL Params**

```text
datastore-id    : データストアID
```

**Request Sample**

```text
POST https://api.xxx.com/api/v0/datastores/58bbaa27fbfcba6098746061/items/create-id
```

**Response Sample**

```javascript
{
    "item_id": "5a2647410e24792d87451e34"
}
```

#### CreateItemWithItemID

item\_idを指定して新規アイテムを作成

**Description**

item\_idを指定して新規アイテムを作成します。  
 このAPIは、`アイテム登録前`に`添付ファイルのアップロードが必要`な場合で利用します。  
 新規に添付ファイルを持ったアイテムを作成するためには、あらかじめ添付ファイルの登録が必要です。添付ファイルの登録にはitem\_idが必要なため、item\_idを取得した後に添付ファイルを登録し、変換されたfile\_idを指定して、このAPIでアイテムを新規作成します。item\_idは、[CreateItemID](api-document_jp.md#CreateItemID) APIを利用して事前に取得できます。

**Method**

POST

**Request URL Format**

```text
/api/v0/items/:item-id/new-actions/:action-id
```

**URL Params**

```text
item-id      : アイテムID
action-id    : 新規作成アクションID（Payload内の`use_display_id`がtrueの場合、画面ID(設定で指定したID)を使用。falseの場合システム内部のID(a_id)を使用。
```

**Payload**

`Content-Type : application/json`

```text
{
  "item": {
    "項目ID1": "作成アイテム項目の値１",
    "項目ID2": "作成アイテム項目の値２"
    },
  "project_id": "プロジェクトID",
  "datastore_id": "データベースID",
  "use_display_id": true or false //trueの場合、item内の項目IDに画面IDを使用する。falseの場合システム内部のFieldID(f_id)を使用する。指定しない場合、デフォルトはfalse。
}
```

**Request Sample1**

```text
POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/new-actions/アクションID
```

```text
{
  "item": {
    "Locaton": "北極",
    "weather": "雪"
  },
  "project_id": "アプリケーションID",
  "datastore_id": "データベースD",
  "use_display_id": true
}
```

**Response Sample**

```text
null
```

**Request Sample2**

```text
POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/new-actions/5e99e6a8aeae8e9af01ec366
```

```text
{
  "item": {
    "5e99e2e3aeae8e9af01ec35b": "北極",
    "5e99e690aeae8e9af01ec363": "雪"
  },
  "project_id": "5e99e696aeae8e9af01ec364",
  "datastore_id": "5e99e69caeae8e9af01ec365",
  "use_display_id": false
}
```

**Response Sample2**

```text
null
```

#### GetItemHistories

履歴取得

**Description**

コメントやアクション実行の履歴を取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/items/:item-id/histories
```

**Params**

```text
なし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/59ad2d8a0e247927638e761a/histories
```

**Response Sample**

```javascript
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

#### PostItemComment

コメント登録

**Description**

アイテムにコメントを投稿します。コメントはアイテムの履歴へ投稿され、[GetItemHistories](api-document_jp.md#GetItemHistories)で取得できます。

**Method**

POST

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/items/histories
```

**URL Params**

```text
  "datastore-id": データベースID（システム内部ID d_id）
```

**Payload**

```text
{
  "project_id": アプリケーションID（p_id）,
  "item_id": データアイテムID(i_id),
  "comment" : 登録したいコメント
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/histories
```

```text
{
    "project_id": "5e5366474e128951e40b288b",
    "item_id": "5e53712e4e128936e84a623f",
    "comment" : "text..."
}
```

**Response Sample**

```javascript
null
```

### データインポート関連API

#### ImportItems

CSVデータインポート

**Description**

CSVファイルを指定して、データベース\(datastore\)を更新します。新規・更新・削除が可能です。

* キーフィールドに指定したフィールドに同値が存在する場合は更新され、存在しない場合は新規で登録されます。
* replace\_all\(bool\) オプションをtrue とすると、全データを削除し、指定したCSVデータで新規登録（洗い替え）します。指定しない場合に比べて高速に処理が可能です。
* append\(bool\)オプションをtrue とすると、既存データを残したまま、指定したCSVデータを追加登録します。指定しない場合に比べて高速に処理が可能です。
* CSV内に削除フィールド（項目名を`_delete_`とする）を用意し、削除するItemには`true`または`1`を指定すると、該当Itemが削除されます。
* CSV内のステータスを意味するフィールドは、CSVのヘッダー名を`_status_`として、データにはステータス名\(status\_idではありません\)を指定します。
* CSV内に公開グループ指定フィールド（項目名を`_group_id_`とする）を用意し、CSVデータにHexabaseで画面から定義された`グループID`を指定すると、該当Itemが指定したグループへ公開されます。（グループアクセスキーが付与される）

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:project-id/datastores/:datastore-id/import
```

**URL Params**

```text
project-id    : アプリケーションID(画面から指定したアプリケーションID、または、p_id)
datastore-id    : データストアID(画面から指定したデータストアID、または、d_id)
```

`Content-Type : multipart/form-data`

```text
filename            : インポートデータファイル名
file                ： インポートファイル
key_field_displayid : インポート先データストアのキー項目として利用するフィールドIDを指定します（この列をキーとして更新をかけます）
replace_all         ： false | true  指定されたCSVでデータを初期化（すべてのデータを削除して、新規追加されます）
append              ： false | true  指定されたCSVデータを既存のデータに追加します。別途、`条件を指定して削除API`と順番に実行することでデータを差分削除＆追加インポートが可能です。
overwrite_autonumber： false | true  インポート先の自動採番項目が初期化されてゼロスタートされてインポートされます。
validate            ： true | false  インポート時、データチェックを省略する。
```

**Request Sample**

```text
POST https://api.xxx.com/api/v0/applications/APP-ID/datastores/DATABASE-ID/import
```

CSVファイルイメージ

* CSVヘッダ行には、画面から指定したフィールドIDを指定します
* `key_field_displayid` 更新利用時は、キーフィールドと更新対象フィールド以外の列を省略したCSVを利用できます。（データベース内のすべてのフィールドを含む必要はありません）

  ```text
  TITLE,_status_,Field1,No,_delete_
  import1,ステータス１,A,001,0
  import2,ステータス２,B,002,0
  ```

  **Response**

  ```javascript
  {
   "temp_datastore_id": "5e58aa0fe4ecac3bd828aead",
   "stream_id": "saXjPYrkoJULrJTXHystqbXBqmUkILVbbBxvyXNsiJXKUdcROfTQOwGwCo6nqkwDDGjnUeiPtdkjkDeqgjquUOmcl0B6aM9q2V5526y2Xn3XmPZFsBSrooAwqTSAjWYr"
  }
  ```

  ```text
  temp_datastore_id : データインポート結果の取得で利用できるID
  stream_id : インポート経過をSubscribeするためのID
  ```

  * Subscribe仕様については、このドキュメントには記載していない（現在、ドキュメント準備中）

#### GetImportResults

データインポート結果の取得

**Description**

データインポートの処理結果を取得する

**Method**

GET

**Request Format**

```text
/api/v0/datastores/:datastore-id/import/:temp-datastore-id
```

**Params**

```text
temp-datastore-id  :  インポート処理時の結果ID
```

**Request Sample**

```text
GET https://api.xxx.com/api/v0/datastores/59bf3a310e2479145baba476/import/59706031bc29a9afa46b59eb
```

**Response Sample**

成功時

```text
なし
```

エラー時

```javascript
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

１つのアイテムには「添付ファイル」フィールドを複数持つことができ、１つの添付ファイルフィールドには、複数個の添付ファイルを登録できます。

#### UploadFile

添付ファイルフィールドにFileをアップロード

**Description**

添付ファイルフィールドにファイルをアップロードします

* アップロードされたファイルはStorageに保存されますが、Itemへは登録されません。
* 該当Itemへ登録するためには、Responseにふくまれる`file_id`を使って、アクション実行API（[CreateItemWithItemID](api-document_jp.md#CreateItemWithItemID)や[ExecuteAction](api-document_jp.md#ExecuteAction)など）をcallする必要があります。

**Method**

POST

**Request URL Format**

```text
/api/v0/items/:item-id/fields/:field-id/attachments
```

**URL Params**

```text
item-id          : アイテムID
field-id         : フィールドID
```

`Content-Type : multipart/form-data`

```text
application_id   : アプリケーションID
datastore_id     : データストアID
filename         : 添付ファイル名
file             : 添付ファイル
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/items/59ad2d8a0e247927638e761a/fields/58cc9253fbfcba88307142d1/attachments
```

* CSVファイル名:./testcsv/importapi/test.csv
* CSVファイルイメージ:

**Response Sample**

```javascript
{
    "file_id": "59af720c0e247958c7011a88"
}
```

#### DeleteFile

添付ファイルの削除

**Description**

添付ファイルフィールドのファイルを削除します

**Method**

DELETE

**Request URL Format**

```text
/api/v0/items/:item-id/fields/:field-id/attachments/:file-id
```

**Params**

```text
なし
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/items/59ad2d8a0e247927638e761a/fields/58cc9253fbfcba88307142d1/attachments/59af720c0e247958c7011a88
```

**Response Sample**

```text
null
```

#### GetFile

添付ファイルデータの取得

**Description**

添付ファイルデータをダウンロードします

**Method**

GET

**Request URL Format**

```text
/api/v0/files/:file-id
```

**URL Params**

```text
file-id    : ファイルID
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/files/5a43c3c4fbfcba5c7443d037
```

**Response Sample**

```text
(省略）※該当ファイルのバイナリデータをダウンロード
```

### データレポート関連API

Hexabaseでは複数のデータテーブル（データベース=Datastore）を結合、集計して、データレポートというViewを作成することができます。  
 作成したデータレポートのデータをAPIを利用して取得できます。

#### GetReportData

レポートデータの取得

**Description**

データレポートの結果を取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:project-id/reports/:report-id
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID
```

**Response Sample**

- 出力フィールドに画面ID(display_id)が指定されている場合は、report_result はdisplay_id が使用されます。

```javascript
{
    "report_fields": [
        {
            "title": "Title",
            "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",
            "display_id" : "TITLE",
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
            "display_id" : "DUE_DATE",
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
            "display_id" : "CATEGORY",
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
            "display_id" : "STATUS",
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
            "display_id" : "NOTE",
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
            "display_id" : "NUM",
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
            "NOTE": "B",
            "TITLE": "タスクC",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,
            "DUE_DATE": "2016/01/01"
        },
        {
            "NOTE": "B",
            "TITLE": "案件（明細あり）",
            "CATEGORY": "B",
            "STATUS": "In Review",
            "NUM": 0,
            "DUE_DATE": "2016/01/01"
        },
        {
            "NOTE": "B",
            "TITLE": "",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,
        },
        {
            "NOTE": "B",
            "TITLE": "１１１新規起票",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,
        },
        {
            "NOTE": "B",
            "TITLE": "タスクB",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,
            "DUE_DATE": "2016/01/01"
        },
        {
            "NOTE": "B",
            "TITLE": "タスクE",
            "CATEGORY": "B",
            "STATUS": "In Review",
            "NUM": 0,
            "DUE_DATE": "2016/01/01"
        },
        {
            "NOTE": "B",
            "TITLE": "案件（明細あり）",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,
            "DUE_DATE": "2016/01/01"
        }
    ],
    "report_title": "SimpleJoin",
    "error": ""
}
```

#### GetReportConditions

レポートの検索条件を取得

**Description**

データレポートの検索条件を取得する（検索条件ダイアログ等、表示用）

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:project-id/reports/:report-id/conditions
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions
```

**Response Sample**

```javascript
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

#### GetReportDataByConditions

条件を指定してレポートデータを取得

**Description**

条件を指定してレポートデータを取得する

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:project-id/reports/:report-id/filter
```

**Payload**

```text
conditions -  検索条件を指定
             "rpf_id":/conditions APIで返されるレポートフィールドIDを指定,
            "search_value": 検索条件を配列で指定（サンプルを参照） ※アイテム一覧の指定と同様、フィールドタイプごとに指定内容が異なる
```

**Request URL Sample**

```text
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

**Response Sample**

```javascript
※ （省略） 形式は、データレポート取得サンプルと同様
```

### チャート（ダッシュボード）関連API

ダッシュボード用グラフデータを取得します

#### GetChartData

チャートデータの取得

**Description**

チャートデータを取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:project-id/charts/:chart-id
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID
```

**Response Sample**

注意）チャートタイプにより、フォーマットが異なる場合がある

```javascript
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

#### GetChartConditions

チャートの検索条件を取得

**Description**

チャートを絞り込むための検索条件を取得する（検索条件ダイアログ等、表示用）

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:project-id/charts/:chart-id/conditions
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID/conditions
```

**Response Sample**

```javascript
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

#### GetChartDataByConditions

条件を指定してチャートデータを取得

**Description**

条件を指定してレポートデータを取得する

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:project-id/reports/:report-id/filter
```

**Payload**

```text
conditions -  検索条件を指定
             "rpf_id":/conditions APIで返されるレポートフィールドIDを指定,
            "search_value": 検索条件を配列で指定（サンプルを参照） ※アイテム一覧の指定と同様、フィールドタイプごとに指定内容が異なる
```

**Request URL Sample**

```text
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

**Response Sample**

```javascript
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

