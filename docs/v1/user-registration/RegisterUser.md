
### RegisterUser

ユーザーの初期登録

##### Description

UserConfirm後、Hexabaseを初めて利用するユーザー情報（ユーザ名、パスワード等）を登録する。additional_infoにはそのユーザー固有の情報をMap形式で登録することができる。

##### Method

POST

##### Request URL Format

```text
/api/v0/users/registration/confirm
```

##### Payload

```javascript
{
  "confirmation_id":"確認用のID", //必須
  "email":"登録されるemail",　//必須
  "username":"登録されるユーザー名",
  "password": "設定するパスワード",　// 必須
　"workspace":"作成するワークスペース名", 
  "additional_info":{
      "field_name1": "value",  // field_name, value 共に事由に指定可能
      "field_name2": "value"
  }
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/registration/confirm
```

**Response Sample**

```javascript

```
