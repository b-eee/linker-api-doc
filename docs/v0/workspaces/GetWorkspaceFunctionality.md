#### GetWorkspaceFunctionality

ワークスペース利用機能の取得

**Description**

指定したワークスペースで利用可能な機能を取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/workspaces:workspace-id/functionality
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
GET https://api.xxx.com/api/v0/workspaces/58ca3597cce5fe3ea0a42fa8/functionality
```

**Response Sample**

```javascript
{
    "w_id": "5fca3878aa39557110839cfc", // ワークスペースID
    "ws_functions": {
        "use_create_workspace": 2, // 新規ワークスペース作成権限(0:新規作成不可  1:ワークスペース管理者のみ作成可能  2:すべてのユーザが作成可能)
        "use_password_policy": true, // パスワードポリシーの利用可否
        "use_global_search": true,  // 全文検索の利用可否
        "use_beta": false // ベータ機能の有効化
    },
    "app_functions": {
        "use_create_application": true, // 新規作成アプリケーション作成可否
        "use_queries": true, // よく使う一覧の利用可否
        "use_reports": true, // データレポートの設定可否
        "use_dashboards": true // ダッシュボードの設定可否
    }
}
```