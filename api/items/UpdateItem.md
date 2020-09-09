
#### UpdateItem

アイテムの編集（DisplayIDの利用）

**Description**

指定したアイテムを更新します（Hexabase画面から入力したIDを指定）

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/edit/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

```javascript
{
    "comment": "test-comment"
    "item": {
        "CAR_NAME": "value": "名前のデータ", // text tyepe
        "CAR_TYPE": "5d4c058baa39555618ac9e98", // select type
        "OPTIONS" : [ "58bbaa27fbfcba6098746061", "596e2327fbfcbab8283dde09"],  // checkbox type
    },
    "groups_to_publish":["画面グループID", "システムのグループID"],　// item を閲覧可能とするグループIDを指定（省略可）
    "use_display_id" : true,  // IDに画面IDを利用。 groups_to_publishを利用する場合はtrueとする。
    "is_force_update": true,
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

* 更新用Valueは`changes` プロパティへ以下のように配列で指定することも可能です。　
```
    "changes": [
        {
            "id": "CAR_TYPE",
            "value": "5d4c058baa39555618ac9e98" // select type
        },
        {
            "id": "CAR_NAME",
            "value": "名前のデータ" // text tyepe
        },
        {
            "id": "OPTIONS",
            "value": [ "58bbaa27fbfcba6098746061", "596e2327fbfcbab8283dde09"]  // checkbox type
        }
    ],
```
アイテム更新時にグループロールを付与する、画面グループIDを使用する場合はuse_display_idをtrueにする、画面グループIDを使う場合は全て画面グループIDに統一する、システムのグループID(g_id)の場合全てそれに統一する　現在のユーザーの所持しているユーザーロールを元にロール付与出来るか判断。例：グループツリー下層から上層にグループを付与できない　warningが返される。上層から下層に向けては付与可能。

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASEID/items/edit/5d4c058baa39555618ac9e8b
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

