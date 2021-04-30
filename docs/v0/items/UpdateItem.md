
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
    "use_display_id" : true,  // IDに画面IDを利用。 groups_to_publishを利用する場合はtrueとする。
    "is_force_update": true,  // rev_noの指定を利用しない（排他制御を無視して、後勝ち登録を行う）
    
    "return_item_result": true, // true指定すると、登録されたアイテム情報を返します
    "related_ds_items" : {
      "関連データストアID_1" : [{ },{ },{ },{ }... ] ,　// 関連するデータストアの新規・更新・削除を指定  詳細は以下を参照
      "関連データストアID_2" : [{ },{ },{ },{ }... ] ,
    },  
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
* 関連するアイテムも同時に更新する場合は、以下フォーマットで指定　（新規、更新、削除、リンク追加、リンク削除のoperationが指定可能）
```javascript
    "related_ds_items" : { // 関連するデータストアの新規・更新・削除を指定
      "RELATED_DS_1" : [
        {
          "operation" : 1,  // new
          "link_to_parent": true,  // 親Itemとのデータリンクを作成する  default: false(親→指定したi_idへのリンクのみ)
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

