
#### ExecuteActionByActionID

アクション実行（旧仕様）

**Description**

アクションを実行します（旧仕様）
ExecuteActionの使用を推奨します

**Method**

POST

**Request URL Format**

```text
/api/v0/items/:item-id/actions/:action-id
```

**URL Params**

```text
item-id      : アイテムID
action-id    : アクションID
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "rev_no":2, // "is_force_update": trueの場合、省略可能
  "is_force_update": true, // "rev_no"を指定した場合、省略可能
  "datastore_id": "59ad2d890e247927638e7619",
  "comment": "comment..."
  "item": {
    "5a26722e0e24794c979fa5b6": "更新データサンプル",  // field_id : 更新value
    "5ab84bfecce5fe5c983ea184": [   // user type Fieldの場合
        "58272f4efb90a148d8508d9c", // user_id   
        "5846636efb90a1024d2982fa"  // user_id
      ],
    "5ab0c239cce5fed3a859a910": [    // attachment file type Fieldの場合
        "5ab84c1fcce5fe5c983ea185",  // file_id
        "5ab84c1fcce5fe5c983ea186"   // file_id
      ]
  },
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

* rev\_noは排他チェックに利用しています。/api/v0/datastores/:datastore-id/items/searchで返されるrev\_noを指定します。指定したrev\_noとデータベース内のrev\_noが異なる場合は、エラーとなります。（排他制御）
* rev\_noのエラーチェックをせず、強制的にデータ更新を行う場合は、 `is_force_update` フラグを `true` にして実行します。その場合はrev\_noのフィールドは指定不要。最後に更新されたデータで上書きされます。
* フィールドのデータタイプがユーザータイプ、添付ファイルタイプの場合、valueにはそれぞれuser\_id、file\_id の配列を指定します。
* フィールドのデータタイプが日付の場合、以下のフォーマットで指定します。

    yyyy-mm-ddThh:mm:ss.SSSZ \(.SSSは省略可\)  

    TZ間に指定する時刻は、UTC時刻を指定  

    例\) 2018年1月11日を指定する場合、"2018-01-10T15:00:00.000Z"
* 更新用Valueは`changes` プロパティへ配列で指定することも可能です。　
```
"changes": [
    {
      "id": "5a26722e0e24794c979fa5b6",
      "value": "更新データサンプル"
    },
    {
      "id": "5ab84bfecce5fe5c983ea184",  // user type Fieldの場合
      "value": [
        "58272f4efb90a148d8508d9c", // user_id
        "5846636efb90a1024d2982fa"  // user_id
      ],
    },
    {
      "id": "5ab0c239cce5fed3a859a910", // attachment file type Fieldの場合
      "value": [
        "5ab84c1fcce5fe5c983ea185",  // file_id
        "5ab84c1fcce5fe5c983ea186"   // file_id
      ],
    },
  ]
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/actions/5a2671ec0e24794c979fa5b1
```

**Response Sample**

```text
null
```

