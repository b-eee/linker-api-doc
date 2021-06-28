#### UpdateUserEmailRequest

ユーザーメールアドレスの更新をリクエストする

**Description**

- ユーザーのメールアドレス（ログインID）の変更をリクエストし、変更先のメールアドレスに確認メールを送信します。
- システムに固有のSendgridメールテンプレートを利用する場合は、事前にHexabase社へ必要事項を連絡します。Hexabase社より発行されたemail_templates_idを指定することで、独自のSendgridメールテンプレートを利用することができます。

**Method**

POST

**Request URL Format**

```text
/api/v0/users/email
```

**Payload**

```javascript
{
    email : "address@email.com", // 変更先のメールアドレス
    registration_path : "/registration_page" // （省略可能）メールリンクをクリック後に遷移するURL（省略するとHexabase管理UIへ遷移する）
    email_templates_id : "5fb205b03545feade82dxxxx"  // （任意 省略可能）招待メールを送信する際にお客様用のSendgridテンプレートを使用する場合に設定します。事前にHexabase社へ必要事項を連絡し、Hexabase社より発行されたemail設定IDを指定します。 省略するとHexabaseのデフォルトのパスワード変更画面が利用されます。
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/email
```

**Response Sample**

```javascript
{
    "error": null //成功の場合 nullが返る。エラーがあった場合のみエラーメッセージが返却される。
}
```
