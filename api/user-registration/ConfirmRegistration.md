
#### ConfirmRegistration

ユーザーの初期登録の確認

**Description**

ユーザーの初期登録用のメールに添付されたURLから、ユーザーを確認し、確認情報を確認済みにする

**Method**

GET

**Request URL Format**

```text
/api/v0/users/registration/confirm
```

**Query Params**

```text
id : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //必須 ユーザー初期登録シーケンスのconfirmation ID
```

##### Request URL Sample

```text
GET https://api.xxx.com/api/v0/users/registration/confirm?id=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

##### Response Sample

```javascript
{ "user": {
    "confirmation\_id": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", //上記の確認ID
    "confirmed": bool, //true =確認済,false=未確認
    "email": "hogehoge@gmail.com", //初期登録されたemail
    "id": "5e8ffd39d4b3e00006344d1e",//システム内部のuserID
    "isElapsed": bool,      //true =使用期限切れ, false=使用可能
    "username": "登録されたユーザー名"
}}
```
