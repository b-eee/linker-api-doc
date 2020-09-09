
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
}
```
* 関連するアイテムも同時に更新する場合は、以下フォーマットで指定
```javascript
    "related_ds_items" : { // 関連するデータストアの新規・更新・削除を指定
      "RELATED_DS_1" : [
        {
          "operation" : 1,  // new
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
