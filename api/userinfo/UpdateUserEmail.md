#### UpdateUserEmail

ユーザーメールアドレスの更新を確定する

**Description**

ユーザーのメールアドレス（ログインID）の変更を確定し、ログインに利用されるメールアドレスを変更します。

**Method**

POST

**Request URL Format**

```text
/api/v0/users/confirmations
```

**Payload**

```javascript
{
    confirmation_id : emailに送信されたconfirmation_id
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/confirmations
```

**Response Sample**

```javascript
{} // 正常更新された場合、Status200、空オブジェクトが返る
```
