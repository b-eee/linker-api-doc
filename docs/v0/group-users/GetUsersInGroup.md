#### GetUsersInGroup

指定されたグループのユーザー一覧の取得

**Description**

指定されたグループのユーザー一覧を取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/users/api/v0/groups/:group-id/users
```

**URL Params**

```text
group-id :  グループID
```

`Query Param`

```text
recursive        : bool  //グループ階層の下をたどって、所属するすべてのユーザーを取得します。
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/groups/5df9d7d7aeae8e2fa894e324/users?recursive=true
```

**Response Sample**

```javascript
{
    "members": [
        {
            "u_id": "ユーザーID",
            "username": "ユーザー名",
            "email": "ユーザーのemail",
            "profile_pic": "https://storage.googleapis.com/linker/pub/default.png", //("画像のストレージ領域")
            "confirmed": true, //("bool, このユーザーが確認済みかどうか")
            "email_sent": true,//("bool, このユーザーにemailが送られたかどうか")
            "is_sv": true //("bool, このユーザーがスーパバイザー型かどうか、true=supervisorである")
        } //("ユーザー毎にオブジェクトが返される")
    ],
    "count": 1//("このグループ内部にいるユーザー数")
}
```
