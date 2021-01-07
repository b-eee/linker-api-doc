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
| 49 | [GetGroup](api/groups/GetGroup.md) | グループ情報取得 | GET | /api/v0/groups/:group-id | 指定したグループ情報とその配下のグループ一覧を取得 | v0 | - |
| 4 | [GetGroupTree](api/groups/GetGroupTree.md) | グループツリー情報取得 | GET | /api/v0/grouptree | ワークスペース内のグループ情報をJSONツリー形式で取得 | v0 | - |

#### グループの登録、変更、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 5 | [CreateGroup](api/groups/CreateGroup.md) | 新規グループ作成 | POST | /api/v0/workspaces/:workspace-id/groups/:parent-group-id | 指定グループ配下に新規でグループを作成 | v0 | - |
| 44 | [CreateTopGroup](api/groups/CreateTopGroup.md) | 新規グループ作成\(第1階層\) | POST | /api/v0/workspaces/:workspace-id/groups | 第1階層に新規グループを作成 | v0 | - |
| 6 | [UpdateGroup](api/groups/UpdateGroup.md) | グループ更新 | PUT | /api/v0/groups/:group-id | 指定したグループ情報を更新する | v0 | - |
| 7 | [DeleteGroup](api/groups/DeleteGroup.md) | グループ削除 | DELETE | /api/v0/groups/:group-id | 指定したグループを削除する | v0 | - |

### ユーザー関連API

「ユーザー」はEmailアドレスをIDとした、ログイン可能なアカウントです。必ずワークスペース内のいずれかのグループに属します。Hexabaseへユーザーを追加するには、グループへユーザーを登録した後に、ワークスペースへ招待する必要があります。

#### ログインユーザー情報

ログインしているユーザーに関する情報を取得します。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 43 | [GetUserInfo](api/userinfo/GetUserInfo.md) | ユーザー情報取得 | GET | /api/v0/userinfo | ユーザーの関連情報取得 | v0 | - |
| 61 | [UpdateUserInfo](api/userinfo/UpdateUserInfo.md) | ユーザー情報更新 | PUT | /api/v0/userinfo | ユーザー名、情報の更新 | v0 | - |

#### パスワード変更

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 56 | [ResetPassword](api/userinfo/ResetPassword.md) | パスワード初期化リクエスト | POST | /api/v0/users/password/forgot | ログイン前、パスワード初期化 開始 | v0 | - |
| 57 | [SetNewPassword](api/userinfo/SetNewPassword.md) | パスワード再登録 | PUT | /api/v0/users/password/forgot | ログイン前、パスワード初期化 パスワードを変更 | v0 | - |
| 58 | [ValidatePassword](api/userinfo/ValidatePassword.md) | パスワード変更確認 | GET | /api/v0/users/password/validate | ログイン前、パスワード初期化　パスワー変更状態の確認 | v0 | - |
| 59 | [SetPassword](api/userinfo/SetPassword.md) | パスワード変更登録 | PUT | /api/v0/users/password | ログイン後、パスワード変更 | v0 | - |

#### ユーザー一覧

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 46 | [GetUsersInGroup](api/users/GetUsersInGroup.md) | グループ内ユーザー取得 | GET | /api/v0/groups/:group-id/users | 指定されたグループのユーザー一覧の取得 | v0 | - |
| 50 | [GetUsersInWorkspace](api/users/GetUsersInWorkspace.md) | グループ内ユーザー取得 | GET | /api/v0/workspaces/:workspace-id/users | 指定されたワークスペースのユーザー一覧の取得 | \(old\) | - |
| 10 | [GetAllUsersInWorkspace](api/users/GetAllUsersInWorkspace.md) | ワークスペース全ユーザー取得 | GET | /api/v0/users/all/g/:group-id | ワークスペース内全ユーザー一覧の取得 | v0 | - |

#### ユーザーの追加、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 47 | [AddUser](api/users/AddUser.md) | ユーザー追加 | POST | /api/v0/users | グループに新規ユーザーを作成 | v0 | - |
| 51 | [RemoveUser](api/users/RemoveUser.md) | ユーザー削除 | DELETE | /api/v0/users | グループからユーザーを削除 | v0 | - |

#### ユーザーの招待～初期登録

ユーザーをワークスペースへ招待するには、登録されたユーザーに対して招待メールを送信\([UserInvite](api-document_jp.md#UserInvite)\)します。 受け取ったメールに含まれるリンクをクリックすることでユーザー登録の確認ページへ遷移させます。遷移先画面では確認ID\(ConfirmID\)をもとにユーザー情報を取得\([ConfirmRegistration](api-document_jp.md#ConfirmRegistration)\)し、ユーザー情報を登録する\([RegisterUser](api-document_jp.md#RegisterUser)\)ことではじめてユーザーが作成されます。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 52 | [UserInvite](api/users/UserInvite.md) | ユーザー招待 | POST | /api/v0/userinvite | ユーザーを招待 | v0 | - |
| 53 | [UserRegistration](api/user-registration/UserRegistration.md) | 初回ユーザー登録 | POST | /api/v0/users/registration | ユーザーの初期登録用リクエスト | v0 | - |
| 54 | [ConfirmRegistration](api/user-registration/ConfirmRegistration.md) | ユーザー情報確認 | GET | /api/v0/users/registration/confirm | ConfirmIDからユーザーの初期登録情報の確認 | v0 | - |
| 55 | [RegisterUser](api/user-registration/RegisterUser.md) | ユーザー初期登録 | POST | /api/v0/users/registration/confirm | ユーザーの初期登録、パスワード登録 | v0 | - |

#### CSVデータによるユーザー一括登録

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 9 | [UserImport](api/users/UserImport.md) |  | POST | /api/v0/userimport | ユーザーをCSVで一括インポート | α版 | - |

### アプリケーション関連API

Hexabaseでは、「アプリケーション」ごとに、データベース・データレポート・ダッシュボードなどをまとめています。新しくワークプレースを作成すると「新しいアプリケーション」という名前のアプリケーションが作成されています。  
 アプリケーション内には複数のデータベース（データテーブル）が存在します。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 11 | [GetApplicationsAndDatastores](api/applications/GetApplicationsAndDatastores.md) | アプリケーションとデータベース一覧 | GET | /api/v0/workspaces/:workspace-id/applications | アプリケーション一覧のとデータストア一覧を取得 | v0 | - |

#### ロール関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 71 | [GetRoleUsers](api/users/GetRoleUsers.md) | ロールをもつユーザーの取得 | GET | /api/v0/applications/:app-id/roleusers/:role-id | 指定したロールを所有するユーザーを取得する | v0 | - |
| 65 | [AddRoleToUser](api/roles/AddRoleToUser.md) | ユーザーへロール付与 | POST | /api/v0/applications/:app-id/userroles | ユーザーにアプリケーションのロールを付与する | v0 | - |
| 66 | [RemoveRoleFromUser](api/roles/RemoveRoleFromUser.md) | ユーザからロールを削除 | DELETE | /api/v0/applications/:app-id/userroles | ユーザーからアプリケーションのロールを外す | v0 | - |
| 63 | [UpdateGroupRoles](api/roles/UpdateGroupRoles.md) | グループロール更新 | POST | /api/v0/grouproles/:group-id | グループにひも付くロールをすべて削除し、新規付与（洗い変え）する | v0 | - |
| 64 | [AddGroupRoles](api/roles/AddGroupRoles.md) | グループロール追加 | PUT | /api/v0/grouproles/:group-id | グループにロールを追加する | v0 | - |


#### フィールド関連API

Hexabaseでは、「アイテム」のカラムを「フィールド」または「画面項目」と呼びます。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 15 | [GetDatastoreFields](api/datastores/GetDatastoreFields.md) | フィールド一覧 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/fields | フィールド一覧を取得 | v0 | ✓ |

### アイテム関連API

Hexabaseでは、データベースの各データを「アイテム」と呼びます。表の横１行がアイテムになります。一般的なRDBのレコードに相当します。

#### アイテムの検索、表示

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 19 | [ItemList](api/items/ItemList.md) | アイテム一覧 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/search | アイテム一覧を取得 | v0 | ✓ |
| 68 | [GetItemSearchConditions](api/items-search/GetItemSearchConditions.md) | アイテム検索条件取得 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/conditions | アイテムの検索条件を取得する | v0 | ✓ |
| 70 | [GetUserQueries](api/items-search/GetUserQueries.md) | よく使う一覧の取得 | GET | /api/v0/applications/:app-id/queries | ユーザーごとに記憶された検索条件一覧を返す| v0 | ✓ |
| 27 | [GetItemDetails](api/items/GetItemDetails.md) | アイテム詳細 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/items/details/:item-id | アイテムの詳細情報、アクションリストを取得 | v0 | ✓ |

#### アイテムの登録、更新、削除

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 69 | [GetAutoNumber](api/items/GetAutoNumber.md) | 自動採番 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/fields/:field-id/autonum | アイテムへ登録時に任意利用できる番号を採番する | v0 | ✓ |
| 20 | [CreateItem](api/items/CreateItem.md) | アイテム新規登録 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/new | 新規アイテムを作成する | v0 | ✓ |
| 21 | [UpdateItem](api/items/UpdateItem.md) | アイテム更新 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id | アイテムを編集する | v0 | ✓ |
| 22 | [DeleteItem](api/items/DeleteItem.md) | アイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id | １アイテムを削除する | v0 | ✓ |
| 23 | [DeleteItemByConditions](api/items/DeleteItemByConditions.md) | 条件指定してアイテム削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/delete | 条件を指定してアイテムを一括削除する | v0 | ✓ |

#### アイテムに対するアクション実行

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 12 | [GetNewActions](api/item-actions/GetNewActions.md) | 新規登録アクションの一覧 | GET | /api/v0/datastores/:datastore-id/new-action | 新規アイテム作成アクション一覧を取得 | v0 | - |
| 48 | [CreateNewItemID](api/item-actions/CreateNewItemID.md) | 新規アイテムID取得 | POST | /api/v0/datastores/:datastore-id/items/create-id | 新規アイテム作成用のaction\_idを取得 | v0 | - |
| 33 | [CreateItemWithItemID](api/item-actions/CreateItemWithItemID.md) | item\_idを指定して新規アイテムを作成 | POST | /api/v0/items/:item-id/new-actions/:action-id | action\_idを指定して、新規作成アクションを実行\(No.69の後に実行\) | v0 | - |
| 13 | [GetInputFields](api/item-actions/GetInputFields.md) | アクション登録フォーム取得 | GET | /api/v0/datastores/:datastore-id/actions/:action-id/fields | アクションで利用可能なフィールド情報を取得する | v0 | - |
| 62 | [ExecuteAction](api/item-actions/ExecuteAction.md) | アクションの実行 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/action/:action-id | 指定アクションを実行する | v0 | ✓ |
| 31 | [ExecuteActionByActionID](api/item-actions/ExecuteActionByActionID.md) | アクションの実行 | POST | /api/v0/items/:item-id/actions/:action-id | アクションを実行 | v0 | - |
| 67 | [ExecuteBulkAction](api/item-actions/ExecuteBulkAction.md) | 条件を指定してアクションを実行 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/bulkaction/:action-id | 指定アクションを実行する | v0 | ✓ |

#### アイテムの関連

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 28 | [GetLinkedItems](api/item-links/GetLinkedItems.md) | 関連アイテム取得 | GET | /api/v0/applications/:app-id/datastores/:datastore-id/items/links/:item-id | アイテムに関連するアイテム一覧を取得 | v0 | ✓ |
| 24 | [AddItemLink](api/item-links/AddItemLink.md) | アイテムリンク作成 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/addlink/:item-id | 関連アイテムとのリンクを追加 | v0 | ✓ |
| 25 | [UpdateItemLink](api/item-links/UpdateItemLink.md) | アイテムリンク更新 | POST | /api/v0/applications/:app-id/datastores/:datastore-id/items/updatelink/:item-id | 関連アイテムとのリンクを更新 | v0 | ✓ |
| 26 | [DeleteItemLink](api/item-links/DeleteItemLink.md) | アイテムリンク削除 | DELETE | /api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id | 関連アイテムとのリンクを削除 | v0 | ✓ |

#### 添付ファイル関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 29 | [UploadFile](api/item-files/UploadFile.md) | 添付ファイルUpload | POST | /api/v0/items/:item-id/fields/:field-id/attachments | 添付ファイルフィールドにファイルをアップロード | v0 | - |
| 30 | [DeleteFile](api/item-files/DeleteFile.md) | 添付ファイル削除 | DELETE | /api/v0/items/:item-id/fields/:field-id/attachments/:file-id | 添付ファイルフィールドのファイルを削除 | v0 | - |
| 35 | [GetFile](api/item-files/GetFile.md) | ファイルデータの取得 | GET | /api/v0/files/:file-id | 添付ファイルデータを取得 | v0 | - |

#### アイテムの履歴

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 34 | [GetItemHistories](api/item-histories/GetItemHistories.md) | アイテム履歴取得 | GET | /api/v0/datastores/:datastore-id/items/:item-id/histories | 履歴を取得 | v0 | - |
| 45 | [PostItemComment](api/item-histories/PostItemComment.md) | アイテムコメント投稿 | POST | /api/v0/datastores/:datastore-id/items/histories | コメント履歴を登録 | v0 | - |

### CSVデータインポート関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 16 | [ImportItems](api/items-import/ImportItems.md) | アイテムCSVインポート | POST | /api/v0/applications/:app-id/datastores/:datastore-id/import | CSVデータをデータベースへインポート | v0 | ✓ |
| 17 | [GetImportResults](api/items-import/GetImportResults.md) | インポート結果取得 | GET | /api/v0/datastores/:datastore-id/import/:id | CSVインポートの結果取得 | v0 | - |

### データレポート関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 37 | [GetReportData](api/reports/GetReportData.md) | データレポート取得 | GET | /api/v0/applications/:app-id/reports/:report-id | レポートデータの取得 | v0 | ✓ |
| 38 | [GetReportSearchConditions](api/reports/GetReportSearchConditions.md) | データレポート検索条件取得 | GET | /api/v0/applications/:app-id/reports/:report-id/conditions | レポートの検索条件を取得 | v0 | ✓ |
| 39 | [GetReportDataByConditions](api/reports/GetReportDataByConditions.md) | 条件指定してデータレポート取得 | POST | /api/v0/applications/:app-id/reports/:report-id/filter | 条件を指定してレポートデータを取得 | v0 | ✓ |

### チャート\(ダッシュボード\)関連API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 40 | [GetChartData](api/charts/GetChartData.md) | チャートデータ取得 | GET | /api/v0/applications/:app-id/charts/:chart-id | チャートデータの取得 | v0 | ✓ |
| 41 | [GetChartSearchConditions](api/charts/GetChartSearchConditions.md) | チャート検索条件取得 | GET | /api/v0/applications/:app-id/charts/:chart-id/conditions | チャートの検索条件を取得 | v0 | ✓ |
| 42 | [GetChartDataByConditions](api/charts/GetChartDataByConditions.md) | 条件指定してチャートデータ取得 | POST | /api/v0/applications/:app-id/charts/:chart-id/filter | 条件を指定してチャートデータを取得 | v0 | ✓ |
