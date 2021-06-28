
#### ResetPassword

パスワード初期化リクエスト

**Description**

- ログインしていない状態で、パスワード初期化処理を依頼する。該当メールアドレスが存在した場合に、パスワード変更URLを送信する。
- システムに固有のSendgridメールテンプレートを利用する場合は、事前にHexabase社へ必要事項を連絡します。Hexabase社より発行されたemail_templates_idを指定することで、独自のSendgridメールテンプレートを利用することができます。
- 

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
  "host": ""  //(任意) メール内のリンク先URLに利用するホスト名を指定します。省略するとHexabase管理UIが指定されます。 実装例= `https://${window.location.host}` (SPA UI内に用意されたページへ遷移する場合) email_templates_idを指定した場合、必須となります。
  "root_path":  "(reset_password に相当する部分のURL内のパス)" ,  // （任意） 
  "query_params": "(一意キーの後続くGETパラメータを指定)"  // （任意）  ? より後を指定する
  "email_templates_id" : "5fb205b03545feade82dxxxx",  // （任意）招待メールを送信する際にお客様用のSendgridテンプレートを使用する場合に設定します。事前にHexabase社へ必要事項を連絡し、Hexabase社より発行されたemail設定IDを指定します。 省略するとHexabaseのデフォルトのパスワード変更画面が利用されます。
}
```
**PayloadとEメール内のURL Sample**


**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/users/password/forgot
```

- default
```
{
  "email": "test@xxxxx.com"
}
```
送信されたEメールに生成されるリンクが示すリダイレクト先
(xxxxxx... は一時的に生成されるユニークID)
```
https://app.hexabase.com/reset_password/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

例えば、以下のように指定した場合、
```
{
  "email": "dummy@dummy.com",
  "host": `https://${window.location.host}`,
  "root_path":  "pwd_reset" ,
  "query_params": "param1=AAA&param2=BBB"
}
```
リダイレクト先は、以下のように変化します
(フロントエンドAPPのhost名がmyapp.sample-spa.comだった場合)
```
https://myapp.sample-spa.com/pwd_reset/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx?param1=AAA&param2=BBB
```
これにより、パスワードリセット画面に必要なパラメータを渡す事が可能となります。



**Response Sample**

```javascript
{
  "valid_email": true //パスワード初期化をしたいemailの有無
}
```
