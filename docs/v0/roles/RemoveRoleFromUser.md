
#### RemoveRoleFromUser

ユーザからロールを削除

**Description**

ユーザーからアプリケーションのロールを外す

**Method**

DELETE

**Request URL Format**

```text
/api/v0/applications/:app-id/userroles
```

**URL Params**

```text
app-id: アプリケーション表示ID
```

```javascript
{
    "user_id": "ロールを外したい対象のユーザーID",
    "role_id": "ロール表示ID" 
}
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/applications/:app-id/userroles
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
