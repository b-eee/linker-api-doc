
#### ExecuteBulkAction
条件を指定して、アクションを一括実行する

**Description**
- 指定した条件にマッチした対象アイテムに対して一斉にアクションを実行し、アイテムに更新とコメントを付与します。
- 一括でステータスを変更するような利用シーン（一括承認、など）や、一括でフィールドの値を一斉更新する場合などで利用可能です。
- 同時処理実行件数は デフォルトで100件です。`max_items`パラメータで最大300件まで指定が可能です。
- `continue_proc` オプションをtrueにすると、対象が最大件数を超えた場合に最大件数まで更新をおこないます。結果JSONに含まれる`matched` = `processed`となるまでこのAPIを複数回実行することで、全件の更新が可能です。
- このAPIで更新されたデータは常に最新のrev_noを判定して更新します。（force_updateオプション＝trueとして実行し、排他制御はされません）

**Method**

POST

**Request URL Format**
```
/api/v0/applications/:app-id/datastores/:datastore-id/items/bulkaction/:action-id
```

**Payload**
conditions の詳細については、[conditions](#conditions)を参照

`Content-Type : application/json`
```text
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
      "id": "5e5f334e8250710006078dbd", // StatusID のフィールドID
      "search_value": [
        "5e5f334e8250710006078dc0"   // status_id  (s_id)
      ]
    }
  ],
  "item": {
    "5a26722e0e24794c979fa5b6": "更新データサンプル",  // field_id : 更新value
    "5ab84bfecce5fe5c983eb654": ["5ab84c1fcce5fe5c983ea186","5846636efb90a1024d2982fa" ], // select type Fieldの場合 選択肢ID o_id の配列を指定
    "5ab84bfecce5fe5c983ea184": ["58272f4efb90a148d8508d9c","5ab84c1fcce5fe5c983ea999" ], // user type Fieldの場合 user_id の配列を指定
    "5ab0c239cce5fed3a859a910": ["5ab84c1fcce5fe5c983ea185","5ab84c1fcce5fe5c983ea789" ]　// attachment file type Fieldの場合、file_idの配列を指定
  }
  "comment": "一括承認", // アクション実行時にアイテムへ付加するコメントメッセージ
  "max_items": 100, // 最大の処理実行件数. デフォルトは100.　最大300件まで。10件単位で指定する（10,20,30,...300)
  "use_display_id" : false, // 画面IDを指定 trueの場合、フィールドIDに画面IDを利用可能
  "continue_proc": true // true: 対象アイテム件数がmax_itemsを超えた場合、max_items件まで処理を実行する。false(default): 対象がmax_itemsを超えていたらエラー（処理しない）
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
POST https://api.xxx.com//api/v0/applications/:app-id/datastores/:datastore-id/items/bulkaction/:action-id
```

**Response Sample**
```text
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
            "description": "error occured when execute action.",
            "error": "Error",
            "error_level": "ERROR",
            "reference_id": "i_id:5c6a674f84f4be1f241ff4af"
        },
        {
            "description": "error occured when execute action.",
            "error": "Error sample",
            "error_level": "ERROR",
            "reference_id": "i_id:5c6a674f84f4be1f241ff778"
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
