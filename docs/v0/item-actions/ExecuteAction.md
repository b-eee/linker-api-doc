
#### ExecuteAction

指定アクションを実行する

**Description**

指定アクションを実行し、アイテム更新、コメントの追記

**Method**

POST

**Request Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/action/:item-id/:action-id
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "comment": "test-comment",
  "return_item_result": true, // true指定すると、更新されたアイテム情報を返します
  "return_actionscript_logs": false, // default false. true指定すると、ActionScript実行ログを返却します
  "item": {
      "5e256923aeae8e212cb2e03b": "value", // text tyepe
      "58bbaa27fbfcba6098746061": "5d4c058baa39555618ac9e98", // select type
      "58bbaa27fbfcba6098746067" : [ "58bbaa27fbfcba6098746015", "596e2327fbfcbab8283dde09"],  // checkbox type
  },
  "rev_no":8,　//現在のrevison番号
  "related_ds_items" : {
      "関連データストアID_1" : [{ },{ },{ },{ }... ] ,
      "関連データストアID_2" : [{ },{ },{ },{ }... ] ,
    },  // 関連するデータストアの新規・更新・削除を指定  詳細は以下を参照
  "access_key_updates": {　　// アクセスキーを指定
      "overwrite": true,　 // アクセスキーを上書き保存（デフォルトはfalse：既存のキーに追加する）
      "ignore_action_settings": true, // アクションに設定された公開設定を利用しない（このPayloadで指定したキーのみを付与する）
      "apply_related_ds": true,  // related_ds_itemsに指定したアイテムにも同様の設定を利用する
      "groups_to_publish": ["GROUP1", "GROUP2"],  // group display_idを指定（実行ユーザが保持するキーのみ指定可能）
      "roles_to_publish": ["ADMIN", "MEMBER"], // role display_idを指定（実行ユーザが保持するキーのみ指定可能）
      "users_to_publish": ["607c2a25844887b6855a12a9", "5f25956428dc5c55b463bc77" ] // user_idを指定（ワークスペース内に存在するuser_idを指定可能）
  }
}
```
* 関連するアイテムも同時に更新する場合は、以下フォーマットで指定
```javascript
    "related_ds_items" : { // 関連するデータストアの新規・更新・削除を指定
      "RELATED_DS_1" : [
        {
          "operation" : 1,  // new
          "link_to_parent": true,  // 親Itemとのデータリンクを作成する（双方のリンクが作成される） default: false(親→指定したi_idへのリンクのみ)
          "action_id" : "", // new actionID　※省略可 (省略するとデフォルトの新規アクションが利用される)
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID2" : "data",
            "FIELD_ID3" : "data",
            "FIELD_ID4" : "data",
          },
          "related_ds_items" : {  // related_ds_itemsをネストさせることも可能。（同一Datastoreの複数ネストさせることは不可）
              "関連データストアID_3" : [{ },{ },{ },{ }... ] ,
          }
        },{
          "operation" : 2,  // update
          "action_id" : "Update2", // update actionID　※省略可 (省略するとデフォルトの更新アクションが利用される)
          "link_to_parent": true,  // 親Itemとのデータリンクを作成する（双方のリンクが作成される） default: false(親→指定したi_idへのリンクのみ)
          "i_id" : "58bbaa27fbfcba609874aaa3f", // 対象アイテムID
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID3" : "data"
          }
        },{
          "operation" : 3,  // delete
          "i_id" : "58bbaa27fbfcba609874aqr45", // 対象アイテムID
        },{
          "operation" : 11,  // add link :リンクを作成
          "link_to_parent": true,  // 親Itemとのデータリンクを作成する（双方のリンクが作成される） default: false(親→指定したi_idへのリンクのみ)
          "i_id" : "58bbaa27fbfcba609874aqr46", // 対象アイテムID
        },{
          "operation" : 12,  // remove link :リンクを削除
          "i_id" : "58bbaa27fbfcba609874aqr47", // 対象アイテムID
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        },{
          // 関連する複数アイテムを指定可能。sample 省略
        }
      ]
      "RELATED_DS_2" : [ // sample 省略 ]
      "RELATED_DS_3" : [ // sample 省略 ]
    }
```


* 更新用Valueは`changes` プロパティへ配列で指定することも可能です。　
```
"changes": [
    {
      "id": "5e256923aeae8e212cb2e03b",
      "value": "value"
    },
    {
      "id": "58bbaa27fbfcba6098746061", 
      "value": "5d4c058baa39555618ac9e98",
    },
    {
      "id": "58bbaa27fbfcba6098746067",
      "value": [ "58bbaa27fbfcba6098746015", "596e2327fbfcbab8283dde09"],  // checkbox type
    },
  ]
```

**Request Sample**

```text
POST https://api.xxx.com//api/v0/applications/:app-id/datastores/:datastore-id/items/action/:item-id/:action-id
```

**Response Sample**

```text
null
```

Payload に "return_item_result": true　を指定した場合、登録されたアイテム情報がもどります。
```javascript
{
  item: {
    // 登録されたアイテム情報がもどる（関連アイテムの詳細は含まれない）
  }
}
```

**Errors**
- エラー発生時、以下のようにエラーが返ります。
- エラーコードは[こちら](/docs/errors)を参照ください。

#### itemのリビジョン整合エラー
- Itemを更新するためには、 リクエストpayload内にrev_noを与えるか、is_force_update: trueを渡して強制アップデートを指示する必要があります。他のユーザーが先に該当Itemを更新していた場合、Revisionエラーが発生します。
```
HTTP 409 または 200( Related datastoreのみ本エラーが発生した場合は、errorメッセージを含む200が返ります)
{
    "error": [
        {
            "description": "item:601978f228dc5c3c64e5b895(d_id:5f38b0afaa395581685afdf6) has rev_no:14 but specified rev_no:0",
            "error": "Revision number mismatch",
            "error_code": "ITEM_REV_CONFLICT",
            "error_level": "ERROR",
            "reference_id": "601978f228dc5c3c64e5b895"
        }
    ],
    "history_id": "609e6016f3d4d143baa13070",
    "item": {
        // (itemの値)
    },
    "item_id": "609e6015f3d4d143baa1306e"
}
```

#### ActionID指定エラー
- 指定したデータベース、アクションIDが見つからない場合は以下のエラーとなります。
- 例えばログインユーザーのカレントワークスペースが異なるワークスペースを向いている場合、該当Actionが見つからず、本エラーとなることがあります。
```
{
    "error": "no available actions to create new item in the database. you should check settings or check if you are in your current workspace[ xxxxxxxxxxxxxxxxxx ]"
}
```

　※注意）ここより以下のエラーは、下位互換性維持のため、2021年7月以降に作成されたワークスペースのみエラーチェックが適用されます。それ以前のワークスペースに対してこのチェックを有効化したい場合は、個別に有効化するため、Hexabase社へお問合せください。

#### Actionの権限エラー
- 該当するActionに対する権限がない場合、以下のエラーとなります。
```
HTTP403
{
    "error": "invalid action_id or has no privileges to the user or current item status. a_id:MoveToAssigned(5f38a11caa39556e74845a43) d_id:SAMPLEDB(5f38a11baa395581685afdb4)",
    "error_code": "NO_PRIVILEGES"
}
```

#### 対象Itemが見つかりません
- 更新対象のItemIDに誤りがある、または、他のユーザーが該当Itemを削除した場合、このエラーとなります。
```
HTTP404
{
    "description": "item is not found for i_id:601e5c3728dc5c447cfbc3b1",
    "error": "target item was not found",
    "error_code": "NOT_FOUND"
}
```

#### 関連Itemが見つかりません
- 関連するItemに対して、該当Itemが見つからない場合、error配列内にエラーが返ります。親Itemの更新が成功している場合はHTTPレスポンスは200となります。
```
HTTP 200
    "error": [
        {
            "description": "couldn't check rev_no or item not found. ds:5f38a11baa395581685afdb4 i:609d0a6de59c442b85b0fed0 ",
            "error": "couldn't check rev_no",
            "error_code": "NOT_FOUND",
            "error_level": "ERROR",
            "reference_id": "d_id:5f38b0afaa395581685afdf6"
        }
    ],
```