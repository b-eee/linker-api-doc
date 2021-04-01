#### UpdateUserEmailRequest

ユーザーメールアドレスの更新をリクエストする

**Description**

ユーザーのメールアドレス（ログインID）の変更をリクエストし、変更先のメールアドレスに確認メールを送信します。

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
