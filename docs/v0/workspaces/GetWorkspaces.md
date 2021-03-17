#### GetWorkspaces

ワークスペース一覧

**Description**

ログインユーザーが利用可能なワークスペースの一覧を取得します

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