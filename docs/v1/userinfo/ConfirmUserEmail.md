
#### ConfirmUserEmail

変更されたメールアドレスの確認

**Description**

変更先に指定されたメールアドレスに送信されたURLをクリックされた際に呼ばれるAPI
変更後のメールアドレスの存在を確認し、メールアドレス変更後のページへリダイレクトする。

**Method**

GET

**Request URL Format**

```text
/api/v0/users/confirmations/:confirmation_id
```

**URL Params**

```text
confirmation_id : xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //必須 メールに含まれるconfirmation ID
```

##### Request URL Sample

```text
GET https://api.xxx.com/api/v0/users/confirmations/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

##### Response Sample

```javascript
{
   "user":{
      "confirmation_id":"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",//上記の確認ID
      "email_confirmed":bool, //true =メールアドレス変更確認済,false=未確認
      "isElapsed":bool, // false:制限時間内に確認完了   true: 制限時間オーバーによるエラー
      "email":"hogehoge@gmail.com", //変更前のemail
    　"tmp_email":"hi@hexabase.com",//変更後のemail
      "id":"5f25952c28dc5c55b463bc76",//システム内部のuserID
      "username":"ユーザー名",
      "confirmed":bool, //true =初期登録済,false=初期登録未完了
      "current_workspace_id":"5f25956428dc5c55b463bc78", // 現在ワークスペースID
      "workspace":{
         "name":"Group name" //招待されたグループの名前
         "display_id":"GROUP_ID",//招待されたグループのID
         "g_id":"60014c5128dc5c09a8c44d4d",
         "id":"60014c5128dc5c09a8c44d4d",
         "disable_ui_access":true,
         "index":0,
         "is_root":false,
         "access_key":"60014c5128dc5c09a8c44d4e",
         "created_at":"2021-01-15T17:03:29.2573655+09:00",
      }
   }
```
