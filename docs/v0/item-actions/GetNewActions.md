
#### GetNewActions
新規作成アクションメニュー一覧

**Description**

ログインユーザーが利用可能な`新規作成アクション`の一覧を取得します。  
 利用シーンとしては、一覧画面等に配置される「新規作成」ボタン押下時等にCallして、ユーザーが利用可能な新規作成アクションのメニューを表示する際に利用します。  
 通常新規作成メニューは１つですが、Hexabaseでは複数の新規作成アクションを設定することができます。

**Method**

GET

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/new-action
```

**URL Params**

```text
datastore-id    : データストアID
```

**Request Sample**

```text
GET https://api.xxx.com/api/v0/datastores/59bf42550e2479186a6c6c70/new-action
```

**Response Sample**

```json
{
    "actions": [
        {
            "action_id": "5a2502f00e24792b67887200",  // アクションID
            "display_order": 2,  // メニューの表示順。HexabaseのActionメニューのソート順
            "crud_type": "1",  // 常に1（新規登録）が返る
            "next_status_id": "5a2502f00e24792b678871f8"   //アクション実行後、遷移するステータスID
        }
    ]
}
```


**Errors**
- エラー発生時、以下のようにエラーが返ります。
- エラーコードは[こちら](/docs/errors)を参照ください。

#### 該当Actionが見つかりません
- 該当のデータストアが見つからないか、利用可能なActionIDがない場合、エラーとなります
```
HTTP 404 (Not Found)
{
    "code": 101,
    "error_code": "INVALID_PARAMS",
    "message": "new action is not found for 5f38a11baa395581685afdb"
}
```