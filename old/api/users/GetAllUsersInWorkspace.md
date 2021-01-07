
#### GetAllUsersInWorkspace

ワークスペース全ユーザー取得

**Description**

指定グループ配下のユーザー全員のデータを取得する

**Method**

GET

**Request URL**

```text
/api/v0/users/all/g/:group-id
```

**Params**

```text
group-id :  グループID
```

**Request Sample**

```text
GET https://api.xxx.com/api/v0/users/all/g/582b26d8fb90a15e0c24ad81
```

**Response Sample**

```javascript
{
    "members": [
        {
            "confirmed": false,
            "email": "hi__12@b-eee.com",
            "email_sent": false,
            "profile_pics": [
                {
                    "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"
                }
            ],
            "u_id": "58a29e35bf400ddced9fede3",
            "username": "hi__12"
        },
        {
            "confirmed": false,
            "email": "hi__13@b-eee.com",
            "email_sent": false,
            "profile_pics": [
                {
                    "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"
                }
            ],
            "u_id": "58a29e36bf400ddced9fede4",
            "username": "hi__13"
        },
        :
        :(省略)
        :
        {
            "confirmed": false,
            "email": "test22@b-eee.com",
            "email_sent": false,
            "profile_pics": [
                {
                    "mediaLink": "https://storage.googleapis.com/linker/pub/default.png"
                }
            ],
            "u_id": "58466a7afb90a1024d298306",
            "username": "test222"
        }
    ],
    "totalMembers": 10
}
```

