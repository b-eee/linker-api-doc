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
| 1 | [Login](api/login/Login.md) | ログイン | POST | /api/v0/login | システムへログインする | v0 | - |
| 60 | [Logout](api/login/Logout.md) | ログアウト | POST | /api/v0/users/logout | システムからログアウトする | v0 | - |

### ワークスペース関連API

「ワークスペース」は、Hexabaseのアプリケーションをまとめる領域です。業務の種類や内容に合わせてワークスペースを用意して、複数の業務アプリケーションをまとめておきます。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 2 | [GetWorkspaces](api/workspaces/GetWorkspaces.md) | ワークスペース一覧 | GET | /api/v0/workspaces | ワークスペースの一覧を取得する | v0 | - |
| 3 | [SelectWorkspace](api/workspaces/SelectWorkspace.md) | ワークスペース選択 | POST | /api/v0/workspaces/:workspace-id/select | 現在ワークスペースを選択する | v0 | - |

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
| 65 | [AddRoleToUser](api-document_jp.md#AddRoleToUser) | ユーザーへロール付与 | POST | /api/v0/applications/:app-id/userroles | ユーザーにアプリケーションのロールを付与する | v0 | - |
| 66 | [RemoveRoleFromUser](api-document_jp.md#RemoveRoleFromUser) | ユーザからロールを削除 | DELETE | /api/v0/applications/:app-id/userroles | ユーザーからアプリケーションのロールを外す | v0 | - |
| 71 | [GetRoleUsers](api/users/GetRoleUsers.md) | ロールをもつユーザーの取得 | GET | /api/v0/applications/:app-id/roleusers/:role-id | 指定したロールを所有するユーザーを取得する | v0 | - |

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
| 27 | [GetItemDetails](api/items/GetItemDetails.md#GetItemDetails) | アイテム詳細 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/items/details/:item-id | アイテムの詳細情報、アクションリストを取得 | v0 | ✓ |

#### アイテムの登録、更新、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 69 | [GetAutoNumber](api/items/GetAutoNumber.md#GetAutoNumber) | 自動採番 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/fields/:field-id/autonum | アイテムへ登録時に任意利用できる番号を採番する | v0 | ✓ |
| 20 | [CreateItem](api-document_jp.md#CreateItem) | アイテム新規登録 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/new | 新規アイテムを作成する | v0 | ✓ |
| 21 | [UpdateItem](api-document_jp.md#UpdateItem) | アイテム更新 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id | アイテムを編集する | v0 | ✓ |
| 22 | [DeleteItem](api-document_jp.md#DeleteItem) | アイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id | １アイテムを削除する | v0 | ✓ |
| 23 | [DeleteItemByConditions](api-document_jp.md#DeleteItemByConditions) | 条件指定してアイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete | 条件を指定してアイテムを一括削除する | v0 | ✓ |

#### アイテムに対するアクション実行

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 12 | [GetNewActions](api-document_jp.md#GetNewActions) | 新規登録アクションの一覧 | GET | /api/v0/datastores/:datastore-id/new-action | 新規アイテム作成アクション一覧を取得 | v0 | - |
| 48 | [CreateNewItemID](api-document_jp.md#CreateNewItemID) | 新規アイテムID取得 | POST | /api/v0/datastores/:datastore-id/items/create-id | 新規アイテム作成用のaction\_idを取得 | v0 | - |
| 33 | [CreateItemWithItemID](api-document_jp.md#CreateItemWithItemID) | item\_idを指定して新規アイテムを作成 | POST | /api/v0/items/:item-id/new-actions/:action-id | action\_idを指定して、新規作成アクションを実行\(No.69の後に実行\) | v0 | - |
| 13 | [GetInputFields](api-document_jp.md#GetInputFields) | アクション登録フォーム取得 | GET | /api/v0/datastores/:datastore-id/actions/:action-id/fields | アクションで利用可能なフィールド情報を取得する | v0 | - |
| 62 | [ExecuteAction](api-document_jp.md#ExecuteAction) | アクションの実行 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/action/:action-id | 指定アクションを実行する | v0 | ✓ |
| 31 | [ExecuteActionByActionID](api-document_jp.md#ExecuteActionByActionID) | アクションの実行 | POST | /api/v0/items/:item-id/actions/:action-id | アクションを実行 | v0 | - |
| 67 | [ExecuteBulkAction](#ExecuteBulkAction) | 条件を指定してアクションを実行 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/bulkaction/:action-id | 指定アクションを実行する | v0 | ✓ |

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
| 16 | [ImportItems](api-document_jp.md#ImportItems) | アイテムCSVインポート | POST | /api/v0/applications/:app-id/datastores/:datastore-id/import | CSVデータをデータベースへインポート | v0 | ✓ |
| 17 | [GetImportResults](api-document_jp.md#GetImportResults) | インポート結果取得 | GET | /api/v0/datastores/:datastore-id/import/:id | CSVインポートの結果取得 | v0 | - |

### データレポート関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 37 | [GetReportData](api-document_jp.md#GetReportData) | データレポート取得 | GET | /api/v0/applications/:app-id/reports/:report-id | レポートデータの取得 | v0 | ✓ |
| 38 | [GetReportSearchConditions](api-document_jp.md#GetReportSearchConditions) | データレポート検索条件取得 | GET | /api/v0/applications/:app-id/reports/:report-id/conditions | レポートの検索条件を取得 | v0 | ✓ |
| 39 | [GetReportDataByConditions](api-document_jp.md#GetReportDataByConditions) | 条件指定してデータレポート取得 | POST | /api/v0/applications/:app-id/reports/:report-id/filter | 条件を指定してレポートデータを取得 | v0 | ✓ |

### チャート\(ダッシュボード\)関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 40 | [GetChartData](api-document_jp.md#GetChartData) | チャートデータ取得 | GET | /api/v0/applications/:app-id/charts/:chart-id | チャートデータの取得 | v0 | ✓ |
| 41 | [GetChartSearchConditions](api-document_jp.md#GetChartSearchConditions) | チャート検索条件取得 | GET | /api/v0/applications/:app-id/charts/:chart-id/conditions | チャートの検索条件を取得 | v0 | ✓ |
| 42 | [GetChartDataByConditions](api-document_jp.md#GetChartDataByConditions) | 条件指定してチャートデータ取得 | POST | /api/v0/applications/:app-id/charts/:chart-id/filter | 条件を指定してチャートデータを取得 | v0 | ✓ |
