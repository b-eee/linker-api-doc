
#### ResetPassword

パスワード初期化リクエスト

**Description**

ログインしていない状態で、パスワード初期化処理を依頼する。該当メールアドレスが存在した場合に、パスワード変更URLを送信する。

**Method**

POST

**Request URL Format**

```text
/api/v0/users/password/forgot
```

**Payload**

```javascript
{
  "email":"パスワードをリセットしたいユーザーのemail",　//必須
  "host":"例：https://stg.xxxxxx.com" //必須

}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/password/forgot
```

**Response Sample**

```javascript
{
  "valid_email": true //パスワード初期化をしたいemailの有無
}
```
