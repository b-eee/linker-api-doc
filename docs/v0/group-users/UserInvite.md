
#### UserInvite

ユーザーを招待

**Description**

- ワークスペースへ未招待のユーザーを招待します。
- このAPIを実行する前に、[AddUser](AddUser.md)  APIでワークスペースへユーザーを追加する必要があります。
- システムに固有のSendgridメールテンプレートを利用する場合は、事前にHexabase社へ必要事項を連絡します。Hexabase社より発行されたemail_templates_idを指定することで、独自のSendgridメールテンプレートを利用することができます。

**Method**

POST

**Request URL Format**

```text
/api/v0/userinvite
```

**Payload**

`Content-Type : application/json`

```javascript
{
    "users": [
        {
            "email": "xxx@b-eee.com"
        },
        {
            "email": "yyy@b-eee.com"
        }
    ],
    "domain": "app.xxx.com",
    "invitation_path": "招待されたユーザーを確認するためのパス", // オプション (デフォルト： 'confirm_email')
    "email_templates_id" : "5fb205b03545feade82dxxxx",  // （任意）招待メールを送信する際にお客様用のSendgridテンプレートを使用する場合に設定します。事前にHexabase社へ必要事項を連絡し、Hexabase社より発行されたemail設定IDを指定します。 省略するとHexabaseのデフォルトのパスワード変更画面が利用されます。
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/userinvite
```

**Response Sample**

```javascript
[
    {
        "email": "xxx@b-eee.com",
        "stats": 200
    },
    {
        "email": "yyyC@b-eee.com",
        "stats": 200
    }
]
```
