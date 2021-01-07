
#### ValidatePassword

パスワード変更状態の確認

**Description**

ログインしていない状態でのパスワード変更後、ユーザー状態に関する情報を取得する。

**Method**

GET

**Request URL Format**

```text
/api/v0/users/password/validate
```

**Params**

id : 必須 emailに送信されたid情報

##### Request URL Sample

```text
GET https://api.xxx.com/api/v0/users/password/validate?id=xxxxxxxxxxxxxxxxxxxxxxxx
```

##### Response Sample

```text
{​ 
  "id": "5e1484d4aeae8e202819528d", 
  "accessed": true, // bool パスワード変更処理開始後アクセス済みかどう 
  "created_at": "2020-01-07T13:17:08.01Z", //パスワード作成日 
  "isElapsed": false, // bool パスワード変更処理の期限切れかどうか 
  "updated_at": "2020-01-07T13:31:20.961Z" // パスワード更新日 
}
```
