
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
