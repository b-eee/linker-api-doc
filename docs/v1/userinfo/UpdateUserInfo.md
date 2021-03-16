#### UpdateUserInfo

ユーザー名、情報の更新

**Description**

ユーザーの名前を更新する

**Method**

PUT

**Request URL Format**

```text
/api/v0/userinfo
```

**Payload**

```javascript
{
  "email":"ユーザのemail",　//必須
  "username":"ユーザー名",　
  "user_id":"ユーザーID",　//必須
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/userinfo
```

**Response Sample**

```javascript
{"error": null //エラーの有無}
```
