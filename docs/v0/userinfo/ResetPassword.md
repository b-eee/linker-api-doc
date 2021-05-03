
#### ResetPassword

パスワード初期化リクエスト

**Description**

- ログインしていない状態で、パスワード初期化処理を依頼する。該当メールアドレスが存在した場合に、パスワード変更URLを送信する。
- システムに固有のSendgridメールテンプレートを利用する場合は、事前にHexabase社へ必要事項を連絡します。Hexabase社より発行されたemail_templates_idを指定することで、独自のSendgridメールテンプレートを利用することができます。

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
  "email_templates_id" : "5fb205b03545feade82d90a7",  // （任意）Hexabase社より発行された email設定ID。省略するとHexabaseのデフォルトのパスワード変更画面が利用されます。
  "host":"例：https://stg.xxxxxx.com"  // email_templates_idを指定した場合、必須。メール内のリンク先URLに利用するホスト名を指定します。
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
