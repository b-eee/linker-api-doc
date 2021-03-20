#### GetWorkspaceUsage

ワークスペース利用状況の取得

**Description**

指定したワークスペースの利用状況（ユーザ、データベース、ストレージ）の情報を取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/usages
```

**URL Params**

```text
workspace-id　取得したいワークスペースIDを指定
```

**Query Params**

```text
なし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/workspaces/58ca3597cce5fe3ea0a42fa8/usages
```

**Response Sample**

```javascript
{
    "w_id": "5fca3878aa39557110839cfc", // ワークスペースID
    "usage": {
        "users": 1, // 現在のユーザ数
        "users_limit": 300, // 利用可能ユーザ数
        "storage": 0,　// 現在利用ストレージ容量
        "storage_limit": 500, // 利用可能ストレージ容量
        "datastores": 34, // 現在利用しているデータベース数
        "datastores_limit": 50, // 利用可能データベースの最大数
        "items": 0, // 登録されているItem数 （※注：2021年3月現在、取得できません）
        "items_limit": 0　// 登録できるItem最大数 （※注：2021年3月現在、利用されていません）
    }
}
```