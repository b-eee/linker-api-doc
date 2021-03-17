
#### SetNewPassword

パスワード再登録

**Description**

ログインしていない状態でのパスワードを変更する。前提条件として変更用のパスワード初期化用のIDが必要

**Method**

PUT

**Request URL Format**

```text
/api/v0/users/password/forgot
```

**Payload**

```javascript
{
  "new_password":"必須　新規作成パスワード　例：test",
  "confirm_password":"必須　確認用パスワード 例：test この値は新規作成の値と同じでなければならない",
  "id":"必須　パスワード初期化開始のapi送信後にemailのリンク内部に埋め込まれた情報をここに入れる"
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/users/password/forgot
```

**Response Sample**

```text
なし
```
