
#### RemoveUser

グループからユーザーを削除

**Description**

グループからユーザーを削除する

**Method**

DELETE

**Request URL Format**

```text
/api/v0/users
```

**Params**

`Content-Type : application/json`

```javascript
{
    "g_id": "グループを識別するID", //必須
    "u_id": "ユーザーを識別するID", //必須
    "w_id": "ワークスペースを識別するID"
}
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/users
```

**Response Sample**

```javascript
{
    "error": null
}
```
