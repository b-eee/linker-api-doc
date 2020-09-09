
#### UserRegistration

初回ユーザー登録

**Description**

ログイン前のユーザーの初期登録開始。LandingPage等で最もはじめのユーザーを登録する場合に利用する。指定ユーザーのメールに登録リンクを送信する。

**Method**

POST

**Request URL Format**

```text
/api/v0/users/registration
```

**Payload**

```javascript
{
  "email":"メールを送信したい対象 例:test@gmail.com", //必須
  "username":"登録したいユーザー名",
  "registration_domain":"登録するドメイン",　//必須
  "registration_path":"サインアップしたユーザーを確認するためのパス", // オプション　(デフォルト： 'confirm_email'）
  "hostname":"登録するホスト名",　//必須
  "protocol":"例　http, https", 
  "additional_info":
    {
      "ユーザーの指定したいフィールド１":"ユーザー指定の値１",
      "ユーザーの指定したいフィールド2":"ユーザー指定の値2"
    }
　}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/registration
```

**Response Sample**

```javascript
{
  "confirmation_id": "確認ID", 
  "email": "初期登録されたemail", 
  "status": 200
}
```
