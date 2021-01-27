
#### AddRoleToUser

ユーザーへロール付与

**Description**

ユーザーにアプリケーションのロールを付与する

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/userroles
```

**URL Params**

```text
app-id: アプリケーション表示ID
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
POST https://api.xxx.com/api/v0/applications/:app-id/userroles
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
