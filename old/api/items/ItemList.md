
#### ItemList

アイテム一覧の取得

**Description**

検索条件を指定してアイテムの一覧を取得します

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/search
```

**URL Params**

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したIDを指定）
```

**Payload**

```text
conditions          : 検索条件を指定
per_page            : 検索結果の件数(省略、または、0を指定すると、全件取得されます）
page                : ページ数
sort_field_id       : ソートするフィールドIDを指定(ソートキーが1fieldのみの場合)
sort_order          : 昇順の場合"asc" 降順の場合"desc"(ソートキーが1fieldのみの場合)
sort_fields         : ソートキーが複数ある場合に指定します。 sort_field_idに優先してソートに利用されます。 [{id: "FIELD_A", order: "asc"},{id: "FIELD_B", order: "desc"}]
                      idにフィールド画面ID、orderにソート順を指定します。orderを省略できます。省略すると昇順となります。
                      配列で指定した順番で第1ソートキー、第2ソートキーという形で適用されます。
use_default_search  : true or false デフォルト検索条件(注)を適用する場合、trueを指定
include_links       : true をしていすると、関連するアイテムのIDの配列を取得できます
format              : "csv"を指定すると、結果をCSV形式で出力されます
```
 (注：`デフォルト検索条件`はHexabase UIの一覧画面で、検索条件ダイアログでチェックを入れて指定します。)

#### conditions

（説明）conditions パラメータの指定について
- 日付型、時刻型、数値型フィールドの場合、 `search_value` の一番目の値がFrom、2番目の値がToを意味します。
- どちらかにnullを指定すると、From～、To～といった検索が可能となります。
- 日付型の場合、値に `"TODAY"`という文字列を入れると、本日～といった検索が可能です。
- テキスト型または複数行テキストの場合、search_valueを"|"で区切ると、OR検索が可能です。
- テキスト型または複数行テキストの場合、"exact_match": trueとした場合、serach_valueの配列に複数条件を指定するとOR検索となります。
```javascript
"exact_match": true, // 完全一致で検索
"search_value": [
  "ABC|DEF",
  "GHI", 
  "JKL", // ABC or DEF or GHI or JKLを検索
]
```
- テキスト型または複数行テキストの場合、"exact_match": falseとした場合、serach_valueの1番目の値に対して正規表現が利用可能です。例えば以下のような指定でOR検索が可能です。正規表現言語としてPCRE（Perl互換正規表現）に従います。
```javascript
"exact_match": false, 
"search_value": [
  "ABC|DEF", // ABC または DEFを検索
]
```
（conditions 指定サンプル）
```javascript
  {
  "conditions": [
    {
      "id": "FIELD_ID", // Hexabase画面で入力したIDを指定
      "search_value": [
        "fa"
      ],
      "exact_match": true, // 完全一致で検索
      "include_null": true // 空白を含む
    },{
      "id": "FIELD_ID2", 
      "search_value": [
        "value"
      ],
      "exact_match": false, // 部分一致で検索
      "include_null": false // 空白を除く
    },{
      "id": "i_id", // idに "i_id" を指定すると、指定したItemを対象にできます
      "search_value": [
        "58272f4efb90a148d850qwer", // item_id
        "5846636efb90a1024d29as12", // item_id
        "5846636efb90a1024d29asdf"  // item_id (複数件を指定可能)(OR条件)
      ]
    },{
      "id": "updated_by", // idに "updated_by" または "created_by" を指定すると、指定したユーザー(u_id)が更新、作成したItemを検索可能です。
      "search_value": [
        "58272f4efb90a148d850qwer", // user_id
        "5846636efb90a1024d29as12", // user_id
        "5846636efb90a1024d29asdf"  // user_id (複数件をOR指定可能)(OR条件)
      ]
    },{
      "id": "updated_at", // idに "updated_at" または "created_at" を指定すると、更新日・作成日での範囲検索が可能です。
      "search_value": [
        "2020-01-24T10:42:07.880Z",
        null,                       // 指定日付以後の更新されたItemを指定
      ]
    },{
      "id": "58bbaa27fbfcba773851339f", // 日付型フィールドでは "TODAY"キーワードを指定可能
      "search_value": [
        "TODAY",
        null     //本日以降のItemを対象とする
      ],
    },{
      "id": "58bbaa27fbfcba773851339f", // 数値型
      "search_value": [
        null,
        "100"  // 100以下の値を検索 ※数値も""で括って指定する
      ],
    },{
      "id": "5e5f334e8250710006078dbd", // StatusID のフィールドID
      "search_value": [
        "5e5f334e8250710006078dc0"   // status_id  
      ]
    }
  ],
  "page": 1,
  "per_page": 100,
  "sort_fields": [
        {"id": "Status", "order": "desc"}, 　// 第１ソートキー id:は画面Dを指定
        {"id": "Category", "order": "asc"}　// 第２ソートキー ascの場合,orderは省略できます
　],
  "sort_field_id": "FIELD_ID", // 画面Dを指定。ソートキーが1つの場合に利用する。sort_fieldsが指定されている場合は、この指定は無視されます
  "sort_order": "asc",
  "include_links" : true, // true or false.  trueの場合、取得結果に各Itemに関連するi_idの配列を含める
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/5c6363d984f4be7de0350445/datastores/DATABASEID/items/search
```

**Response Sample**

```javascript
{
    "items": [
        {
            "58bbaa27fbfcba773851339f": "fadfa",
            "58bbaa27fbfcba77385133a2": "新規",
            "_id": "596e2327fbfcbab8283dde09",
            "a_id": "58bbaa27fbfcba77385133ac",
            "access_keys": "",
            "created_at": "2017-07-19T00:03:06+09:00",
            "created_by": "58272f4efb90a148d8508d9c",
            "d_id": "58bbaa27fbfcba6098746061",
            "i_id": "596e2327fbfcbab8283dde09",
            "p_id": "586f6c2ccce5fe6ad071b1d4",
            "rev_no": "1",
            "status_id": "58bbaa27fbfcba77385133a4",
            "title": "fadfa",
            "unread": "0"
        },
        {
            "58bbaa27fbfcba773851339f": "ｆｈｓｆｇｓｄｆｇdadfa",
            "58bbaa27fbfcba77385133a2": "受付",
            "_id": "594255b8cce5fe234076d7d4",
            "a_id": "58bbaa27fbfcba77385133ac",
            "access_keys": "",
            "created_at": "2017-06-15T18:39:08+09:00",
            "created_by": "58272f4efb90a148d8508d9c",
            "d_id": "58bbaa27fbfcba6098746061",
            "i_id": "594255b8cce5fe234076d7d4",
            "p_id": "586f6c2ccce5fe6ad071b1d4",
            "rev_no": "2",
            "status_id": "58bbaa27fbfcba77385133a7",
            "title": "ｆｈｓｆｇｓｄｆｇdadfa",
            "unread": "0",
            "updated_at": "2017-07-19T00:02:57+09:00",
            "updated_by": "58272f4efb90a148d8508d9c"
        }
    ],
    "totalItems": 2
}
```
