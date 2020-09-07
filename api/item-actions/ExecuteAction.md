
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

Payload に "return_item_result": true　を指定した場合、登録されたアイテム情報がもどる
```javascript
{
  item: {
    // 登録されたアイテム情報がもどる（関連アイテムの詳細は含まれない）
  }
}
```
