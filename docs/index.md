---
id: index
title: 目次
slug: /
---

Hexabase APIは、エンタープライズBaaS(Backend as a Service)を制御するための、Application Programming Interfaceです。

## Applications

Hexabase では、アプリケーション(プロジェクト)ごとに、データベース・データレポート・ダッシュボードなどをまとめています。

- [**GetApplicationsAndDatastores**](/docs/v1/Applications/GetApplicationsAndDatastores)


## Chart

グラフ(チャート)は、ダッシュボードによってまとめることができます。

- [**GetChartData**](/docs/v1/charts/GetChartData)
- [**GetChartDataByConditions**](/docs/v1/charts/GetChartDataByConditions)
- [**GetChartSearchConditions**](/docs/v1/charts/GetChartSearchConditions)

## Datastores

Hexabase では、データベース(データストア)に業務データを格納します。

- [**GetDatastoreFields**](/docs/v1/datastores/GetDatastoreFields)

## Groups

グループは、ユーザーをまとめるための機能です。

- [**CreateGroup**](/docs/v1/groups/CreateGroup)
- [**CreateTopGroup**](/docs/v1/groups/CreateTopGroup)
- [**DeleteGroup**](/docs/v1/groups/DeleteGroup)
- [**GetGroup**](/docs/v1/groups/GetGroup)
- [**GetGroupTree**](/docs/v1/groups/GetGroupTree)
- [**UpdateGroup**](/docs/v1/groups/UpdateGroup)

## ItemActions

Hexabase では、アクションにより、アイテムに対して指定した操作を実行できます。

- [**CreateItemWithItemID**](/docs/v1/item-actions/CreateItemWithItemID)
- [**CreateNewItemID**](/docs/v1/item-actions/CreateNewItemID)
- [**ExecuteAction**](/docs/v1/item-actions/ExecuteAction)
- [**ExecuteActionByActionID**](/docs/v1/item-actions/ExecuteActionByActionID)
- [**ExecuteBulkAction**](/docs/v1/item-actions/ExecuteBulkAction)
- [**GetInputFields**](/docs/v1/item-actions/GetInputFields)
- [**GetNewActions**](/docs/v1/item-actions/GetNewActions)

## ItemFiles

アイテムの添付ファイルを操作するAPIです。

- [**DeleteFile**](/docs/v1/item-files/DeleteFile)
- [**GetFile**](/docs/v1/item-files/GetFile)
- [**UploadFile**](/docs/v1/item-files/UploadFile)

## ItemHistories

アイテムの履歴とコメントに関するAPIです。

- [**GetItemHistories**](/docs/v1/item-histories/GetItemHistories)
- [**PostItemComment**](/docs/v1/item-histories/PostItemComment)

## ItemLinks

他データベースのアイテムとの関連付けを操作するAPIです。

- [**AddItemLink**](/docs/v1/item-links/AddItemLink)
- [**DeleteItemLink**](/docs/v1/item-links/DeleteItemLink)
- [**GetLinkedItems**](/docs/v1/item-links/GetLinkedItems)
- [**UpdateItemLink**](/docs/v1/item-links/UpdateItemLink)

## ItemsImport

データをインポートするためのAPIです。

- [**GetImportResults**](/docs/v1/items-import/GetImportResults)
- [**ImportItems**](/docs/v1/items-import/ImportItems)

## ItemsSearch

アイテムの検索に関するAPIです。

- [**GetItemSearchConditions**](/docs/v1/items-search/GetItemSearchConditions)
- [**GetUserQueries**](/docs/v1/items-search/GetUserQueries)

## Items

Hexabase では、データベースの各データを「アイテム」と呼びます。一般的な RDB のレコードに相当します。

- [**CreateItem**](/docs/v1/items/CreateItem)
- [**DeleteItem**](/docs/v1/items/DeleteItem)
- [**DeleteItemByConditions**](/docs/v1/items/DeleteItemByConditions)
- [**GetAutoNumber**](/docs/v1/items/GetAutoNumber)
- [**GetItemDetails**](/docs/v1/items/GetItemDetails)
- [**ItemList**](/docs/v1/items/ItemList)
- [**UpdateItem**](/docs/v1/items/UpdateItem)

## Login

ユーザー認証のAPIです。

- [**Login**](/docs/v1/login/Login)
- [**Logout**](/docs/v1/login/Logout)

## Reports

データレポートは、データベースの特定のアイテムやフィールドだけを表示したり、連結・集計したりできる機能です。Hexabase では、「データレポート」を使って報告書(レポート)用の表を作成できます。また、ダッシュボードのグラフ(チャート)も、データレポートを基に作成します。

- [**GetReportData**](/docs/v1/reports/GetReportData)
- [**GetReportDataByConditions**](/docs/v1/reports/GetReportDataByConditions)
- [**GetReportSearchConditions**](/docs/v1/reports/GetReportSearchConditions)

## Roles

ロールは、 アプリケーション内の各機能（データベース、フィールド、アクションなど）に対する権限を設定する対象です。Hexabase では、機能ごとに、利用できるロールを割り当てていきます。

ユーザー・グループは、ロールを付与ことで、その機能を利用できます。

- [**AddGroupRoles**](/docs/v1/roles/AddGroupRoles)
- [**AddRoleToUsers**](/docs/v1/roles/AddRoleToUser)
- [**RemoveRoleFromUser**](/docs/v1/roles/RemoveRoleFromUser)
- [**UpdateGroupRoles**](/docs/v1/roles/UpdateGroupRoles)

## UserRegistration

ユーザー登録に関するAPIです。

- [**ConfirmRegistration**](/docs/v1/user-registration/ConfirmRegistration)
- [**RegisterUser**](/docs/v1/user-registration/RegisterUser)
- [**UserRegistration**](/docs/v1/user-registration/UserRegistration)

## UserInfo

ユーザーの関連情報とパスワードについてのAPIです。

- [**GetUserInfo**](/docs/v1/userinfo/GetUserInfo)
- [**ResetPassword**](/docs/v1/userinfo/ResetPassword)
- [**SetNewPassword**](/docs/v1/userinfo/SetNewPassword)
- [**SetPassword**](/docs/v1/userinfo/SetPassword)
- [**UpdateUserInfo**](/docs/v1/userinfo/UpdateUserInfo)
- [**ValidatePassword**](/docs/v1/userinfo/ValidatePassword)

## Users

ユーザーを操作するためのAPIです。

- [**AddUser**](/docs/v1/users/AddUser)
- [*GetAllUsersInWorkspace**](/docs/v1/users/GetAllUsersInWorkspace)
- [**GetRoleUsers**](/docs/v1/users/GetRoleUsers)
- [**GetUsersInGroup**](/docs/v1/users/GetUsersInGroup)
- [**GetUsersInWorkspace**](/docs/v1/users/GetUsersInWorkspace)
- [**RemoveUser**](/docs/v1/users/RemoveUser)
- [**UserImport**](/docs/v1/users/UserImport)
- [**UserInvite**](/docs/v1/users/UserInvite)

## Workspaces

「ワークスペース」は、Hexabase のアプリケーションをまとめておく領域です。ワークスペースごとに、複数のアプリケーションをまとめることができます。また、ワークスペースごとに、ユーザーやグループを分離できます。

- [**GetWorkspaces**](/docs/v1/workspaces/GetWorkspaces)
- [**SelectWorkspace**](/docs/v1/workspaces/SelectWorkspace)