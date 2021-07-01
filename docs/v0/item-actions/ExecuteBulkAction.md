
#### ExecuteBulkAction
条件を指定して、アクションを一括実行する

**Description**
- 指定した条件にマッチした対象アイテムに対して一斉にアクションを実行し、アイテムに更新とコメントを付与します。
- 一括でステータスを変更するような利用シーン（一括承認、など）や、一括でフィールドの値を一斉更新する場合などで利用可能です。
- 同時処理実行件数は デフォルトで100件です。`max_items`パラメータで最大300件まで指定が可能です。
- `continue_proc` オプションをtrueにすると、対象が最大件数を超えた場合に最大件数まで更新をおこないます。結果JSONに含まれる`matched` = `processed`となるまでこのAPIを複数回実行することで、全件の更新が可能です。
- `item_revisions` にitem_idとリビジョン番号(rev_no)のmapを指定すると、そのリビジョン番号に従って排他エラーチェックをかけます。省略した場合は、常に最新のrev_noを判定して更新します。（リビジョン番号の指定がない場合は、force_updateオプション=trueとして実行し、排他制御はされません）

**Method**

POST

**Request URL Format**
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/bulkaction/:action-id
```

**Payload**
conditions の詳細については、[conditions](#conditions)を参照

`Content-Type : application/json`
```json
{
  "conditions": [
    {
      "id": "i_id", // i_id を指定すると、指定したItemを対象にできます
      "search_value": [
        "58272f4efb90a148d850qwer", // item_id
        "5846636efb90a1024d29as12", // item_id
        "5846636efb90a1024d29asdf"  // item_id (複数件を指定可能)
      ]
    },
    {
      "id": "STATUS_FLD", // StatusID のフィールドID
      "search_value": [
        "New"   // status_id 
      ]
    }
  ],
  "item": { // Itemを更新するフィールドと値を指定します
    "TEXT_FIELD_1": "更新データサンプル",  // field_id : 更新value
    "SELECT_FIELD_1": ["5ab84c1fcce5fe5c983ea186","5846636efb90a1024d2982fa" ], // select type Fieldの場合 選択肢ID o_id の配列を指定
    "USER_FIELD_1": ["58272f4efb90a148d8508d9c","5ab84c1fcce5fe5c983ea999" ], // user type Fieldの場合 user_id の配列を指定
    "FILE_FIELD_1": ["5ab84c1fcce5fe5c983ea185","5ab84c1fcce5fe5c983ea789" ]　// attachment file type Fieldの場合、file_idの配列を指定
  },
  "item_revisions": {  // item_revisionsを指定すると、該当するItemについて排他エラーチェックをかけます。省略、またはRevisionの指定のないItemは、指定した値で更新されます（is_force_update: trueが適用される）
     "58272f4efb90a148d850qwer": 1,  // item_id : rev_no
     "5846636efb90a1024d29as12": 3,
     "5846636efb90a1024d29asdf": 12
  },
  "comment": "一括承認", // アクション実行時にアイテムへ付加するコメントメッセージ
  "max_items": 100, // 最大の処理実行件数. デフォルトは100.　最大300件まで。10件単位で指定する（10,20,30,...300)
  "use_display_id" : true, // 画面IDを指定 trueの場合、フィールドIDに画面IDを利用可能
  "continue_proc": true, // (default)false: 対象がmax_itemsを超えていたらエラー（1件も処理しない）, trueの場合、対象アイテム件数がmax_itemsを超えた場合、max_items件まで処理を実行する。
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
* 更新itemの情報は、変更点のみを指定します。
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
```
POST https://api.xxx.com//api/v0/applications/TestApp/datastores/SampleDB/items/bulkaction/UpdateAction
```

**Response Sample**
```json
// 成功時
{
    "has_error": false,
    "result": {
        "matched": 99,
        "processed": 99
    }
}

// 一部エラー時
{
    "errors": [
        {
            "description": "item:601a572c28dc5c4e8c0783cd(d_id:5f263b7628dc5c6af0b1206a) has rev_no:4 but specified rev_no:2",
            "error": "Revision number mismatch",
            "error_code": "ITEM_REV_CONFLICT",           // 排他エラー
            "error_level": "ERROR",
            "reference_id": "601a572c28dc5c4e8c0783cd"   // 排他エラー時の対象ItemID
        },
        {
            "description": "error occurred when execute action",
            "error": "Error",
            "error_code": "SYSTEM_ERROR",
            "error_level": "ERROR",
            "reference_id": "5c6a674f84f4be1f241ff4af"  // エラー対象のItemID
        }
    ],
    "has_error": true,
    "result": {
        "matched": 21,
        "processed": 19
    }
}

// 対象件数がmax_itemsを超えた場合、Warn出力（以下はmax_items:10と設定した例）
{
    "errors": [
        {
            "description": "the number of items has reached max_items 10",
            "error_level": "WARN"
        }
    ],
    "has_error": true,
    "result": {
        "matched": 15,
        "processed": 10
    }
}

// 対象件数が見つからない場合は、Warn出力
{
    "errors": [
        {
            "description": "target was not found.",
            "error": "",
            "error_level": "WARN"
        }
    ],
    "has_error": false,
    "result": {
        "matched": 0,
        "processed": 0
    }
}
```

