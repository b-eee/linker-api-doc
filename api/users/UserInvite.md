
#### UserInvite

ユーザーを招待

**Description**

ユーザーを招待する

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
    "invitation_path": "招待されたユーザーを確認するためのパス" // オプション (デフォルト： 'confirm_email')
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
