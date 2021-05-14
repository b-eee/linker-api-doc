
#### CreateItem

新規アイテムを作成（DisplayIDの利用）

**Description**

新規アイテムを作成します（Hexabase画面から入力したIDを指定）

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/new
```

**URL Params**

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したIDを指定）
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/new
```

**Payload**

（例） `Content-Type : application/json`

```javascript
{
  "item": {
      "field_id": "登録データ",
      "title": "タイトル",
      "assignee": "担当者",
  },
  "return_item_result": true, // true指定すると、登録されたアイテム情報を返します
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
          "action_id" : "", // update actionID　※省略可 (省略するとデフォルトの更新アクションが利用される)
          "i_id" : "58bbaa27fbfcba609874aaa3f", // 対象アイテムID
          "item": {
            "FIELD_ID1" : "data",
            "FIELD_ID3" : "data"
          }
        },{
          "operation" : 3,  // delete
          "action_id" : "", // delete actionID　※省略可 (省略するとデフォルトの削除アクションが利用される)
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

**Response Sample**

```javascript
{
    "error": null,
    "history_id": "5d661782aa39559a80479492",
    "item_id": "5a2647410e24792d87451e34",
    "item": {
      　// Payload に "return_item_result": true　を指定した場合、登録されたアイテム情報がもどる
    }
}
```
