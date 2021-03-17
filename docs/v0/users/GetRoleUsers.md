#### GetRoleUsers

ロールをもつするユーザーの取得

**Description**

指定したロールを所有するユーザーを取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/roleusers/:role-id
```

**URL Params**

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
role-id      : ロールID（Hexabase画面から入力したIDを指定）
```

**Query Params**

なし

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_NAME/roleusers/MANAGERS
```

**Response Sample**

```javascript
{
    "role_users": [
        {
            "email": "xxx@b-eee.com",
            "u_id": "5c5fa7aa84f4be4250aaee25",
            "username": "xxxx"
        },
        {
            "email": "yyy@b-eee.com",
            "u_id": "5c99a80684f4be750c2df35b",
            "username": "yyyy"
        },
        {
            "email": "zzz@b-eee.com",
            "u_id": "5c9a505e84f4be750c2df3ac",
            "username": "zzzz"
        }
    ]
}
```
