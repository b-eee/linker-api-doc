#### AddUser

グループに新規ユーザーを作成

**Description**

指定されたグループに新規ユーザーを作成する

**Method**

POST

**Request URL Format**

```text
/api/v0/users
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "email": "グループに追加したいemailアドレス",　//必須
  "g_id": "グループを識別するID", //必須
  "w_id": "ワークスペースのID",
  "username": "グループに追加したいユーザー名"
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users
```

**Response Sample**

```javascript
{
    "added": false,　//("bool 追加済みかどうか")
    "exists": false, //("b0ol 既に存在するユーザー　false=新規で存在しない新しいユーザー")
    "user_profile": { //("ユーザープロファイルオブジェクト")
        "confirmed": false,　//("bool ユーザーemail確認済み　false=email上確認されていない")
        "email": "登録されたユーザーのemail", 
        "email_sent": false, //("bool emailが送られたかどうか　false=既に対象emailにemailが送られている")
        "profile_pics": [//("ユーザープロファイル画像オブジェクト")
            {
                "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"　//("ユーザープロファイルに使用されている画像の保存先")
            }
        ],
        "u_id": "登録されたユーザーのID",
        "username": "登録されたユーザー名"
    }
}
```

