
#### UserRegistration

初回ユーザーEmail登録

**Description**

- ログイン前のユーザーをシステムへ登録するためのフローを開始します。
- サービス紹介サイトやLandingPage等から、初期ユーザーのメールアドレスを登録し、指定ユーザーへ登録リンクをメール送信します。

**Method**

POST

**Request URL Format**

```text
/api/v0/users/registration
```

**Payload**

[方法１] SendGridへ設定されたメールテンプレートを利用する場合
Hexabase社へSendGrid情報を連絡し、利用するSendGrid情報に対するemail_template_idを指定します。（email_template_id取得前に開発を進める場合は、「デフォルトのメールテンプレートを利用する場合」を参照してください。）

```javascript
{
  "email":"メールを送信したい対象 例:test@gmail.com", //必須
  "username":"登録したいユーザー名",　//必須
  "email_template_id": "5f25956428dc5c55b463bc77",  // Hexabase社より発行されたメールテンプレートID
  "registration_path":"サインアップしたユーザーを確認するためのパス", //  (Option) デフォルト：'confirm_email'
  "additional_info": // (Option) ユーザに紐づく属性情報（User系APIで取得・更新可能な値）
    {
      "ユーザーの指定したいフィールド１":"ユーザー指定の値１",
      "ユーザーの指定したいフィールド2":"ユーザー指定の値2"
    }
　}
```


[方法２] デフォルトのメールテンプレートを利用する場合

```javascript
{
  "email":"メールを送信したい対象 例:test@gmail.com", //必須
  "username":"登録したいユーザー名", //必須
  "registration_domain":"登録するドメイン",　//必須
  "hostname":"登録するホスト名",　//必須
  "protocol":"例　http, https", 
  "registration_path":"サインアップしたユーザーを確認するためのパス", // オプション　(デフォルト： 'confirm_email'） 
  "additional_info": // (Option) ユーザに紐づく属性情報（User系APIで取得・更新可能な値）
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
