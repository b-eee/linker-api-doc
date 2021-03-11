
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
use_or_condition    : conditionsの条件に対してOR条件で検索します（falseまたは指定しない場合は、AND条件が適用されます）
per_page            : 検索結果の件数(省略、または、0を指定すると、全件取得されます）
page                : ページ数
unread_only         : trueを指定すると、「未読履歴をもつItem」のみの絞込条件がconditionsへ追加されます。
sort_field_id       : ソートするフィールドIDを指定(ソートキーが1fieldのみの場合)
sort_order          : 昇順の場合"asc" 降順の場合"desc"(ソートキーが1fieldのみの場合)
sort_fields         : ソートキーが複数ある場合に指定します。 sort_field_idに優先してソートに利用されます。 [{id: "FIELD_A", order: "asc"},{id: "FIELD_B", order: "desc"}]
                      idにフィールド画面ID、orderにソート順を指定します。orderを省略できます。省略すると昇順となります。
                      配列で指定した順番で第1ソートキー、第2ソートキーという形で適用されます。
use_default_search  : true or false デフォルト検索条件(注)を適用する場合、trueを指定
include_links       : true を指定すると、関連するアイテムのIDの配列を取得できます
include_lookups     : true を指定すると、データベース参照型の参照先アイテム情報を結果に含めます
return_number_value : true を指定すると、数値型データがNumberとして出力されます（defaultでは、数値は文字列("123")で返却される）
format              : "csv"を指定すると、結果をCSV形式で出力されます
```
 (注：`デフォルト検索条件`は、Hexabase管理UIの一覧画面の検索条件ダイアログ内でチェックを入れて指定します。)

#### conditions

##### conditions パラメータの指定について
- 日時型、時刻型、数値型フィールドの場合、 `search_value` の一番目の値がFrom、2番目の値がToを意味します。
- 日時型へ指定する値は、必ずUTC時刻（世界標準時刻）、ISO 8601 に基づいたフォーマット[ YYYY-MM-DDThh:mm:ss.uuuZ ]にて指定する必要があります。 ISO formatでの時刻取得例 : `new Date(Date.UTC(2020, 1, 2, 3, 4, 5)).toISOString(); `
- 日時型、時刻型、数値型フィールドの場合、どちらかにnullを指定すると、From～、To～のような検索が可能となります。
- 日時型の場合、値に `"TODAY"`という文字列を入れると、本日～のような検索が可能です。
- テキスト型または複数行テキストの場合、`search_value`に指定した文字列は部分一致によりマッチします。
- テキスト型または複数行テキストの場合、`search_value`は正規表現を指定可能です。正規表現はPerl互換形式(PCRE)による指定となります。例えば、"|"で区切ると、OR検索が可能です。
- テキスト型または複数行テキストの場合、"exact_match": trueとした場合、完全一致による検索となります。
- "exact_match": trueとした場合、serach_valueの配列に複数文字列を指定するとOR検索となります。search_value: ["A","B","C"] => AまたはBまたはCにマッチ
- "not_match": true とすると、指定した値に対してNOT条件が適用されます。　


##### "conditions"のネスト 
conditions内にconditionsを指定可能です。use_or_conditionフラグと共に利用することで、AND/OR条件を組み合わせた条件指定が可能です。
例）例えば、以下のようなロジックの場合、
```
AND : {
   OR: {
     {"FieldA" == "X"},
     {"FieldB" == "Y"}
   }
   AND: {
     {"FieldA" is including "ABC"},
     {"FieldC" != "Z"},
   }
}
```

以下のように、conditionsをネストして条件指定することが可能です。
```javascript
{
    "conditions": [
        {  
           "conditions": [
                {"id": "FieldA", "search_value": ["X"], "exact_match": true},
                {"id": "FieldB", "search_value": ["Y"]}
           ],
           "use_or_condition": true // OR検索
        },
        {  
           "conditions": [
                {"id": "FieldA", "search_value": ["ABC"]},
                {"id": "FieldC", "search_value": ["Z"], "not_match": true}
           ] // AND検索時、"use_or_condition"は省略可能
        } 
    ],
    "use_or_condition": false, // AND検索

    "page": 1,
    "per_page": 0, // return all
    "use_display_id": true,
    "return_number_value": true
}
```
（注意）ネストの階層はいくつでも指定可能ですが、コードの複雑化やパフォーマンス劣化のリスクを避けるため、シンプルに設計することを推奨します。


##### conditionに指定可能なパラメータ
```javascript
"exact_match": true, // 完全一致で検索
"not_match": false, // true にするとNOT条件が適用される
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
      "not_match": true, // search_valueに指定した値でないItemを検索(NOT条件)
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

```
"use_display_id": true,
"return_number_value":true
を指定して検索した例
```
```javascript
{
    "items": [
        {
            "Assignee": "Y",
            "Category": "C",
            "Checkbox": "A,B,C",
            "DueDate": "2015-12-31T15:00:00Z",
            "Status": "作業中",
            "Title": "TaskC",
            "User": "hi-hexabase",
            "created_at": "2020-08-16T02:59:45Z",
            "created_by": "IMPORT",
            "d_id": "5f38a11baa395581685afdb4",
            "i_id": "5f38a121aa395581685afdc2",
            "p_id": "5f25956528dc5c55b463bc7b",
            "rev_no": 4,
            "status_id": "5f38a11baa39556e74845a42",
            "title": "TaskC",
            "unread": 0,
            "updated_at": "2020-09-02T17:48:04Z",
            "updated_by": "5f25952c28dc5c55b463bc76"
        },
        {
            "Assignee": "X",
            "Category": "B",
            "Checkbox": "B",
            "DueDate": "2015-12-31T15:00:00Z",
            "Status": "確認",
            "Title": "TaskD",
            "User": "hi-hexabase",
            "created_at": "2020-08-16T02:59:45Z",
            "created_by": "IMPORT",
            "d_id": "5f38a11baa395581685afdb4",
            "i_id": "5f38a121aa395581685afdc1",
            "p_id": "5f25956528dc5c55b463bc7b",
            "rev_no": 4,
            "status_id": "5f38a11baa39556e74845a41",
            "title": "TaskD",
            "unread": 0,
            "updated_at": "2020-09-30T14:04:30Z",
            "updated_by": "5f25952c28dc5c55b463bc76"
        },
        {
            "Assignee": "X",
            "AutoNum1": "PREFIX_6",
            "Category": "A",
            "Checkbox": "A",
            "DueDate": "2015-12-31T15:00:00Z",
            "LU2": null,
            "Lookup1": "タスクC",
            "Num1": 5,
            "Num2": 12,
            "Status": "完了",
            "Title": "TaskE",
            "Total": 17,
            "created_at": "2020-08-16T02:59:45Z",
            "created_by": "IMPORT",
            "d_id": "5f38a11baa395581685afdb4",
            "i_id": "5f38a121aa395581685afdc0",
            "p_id": "5f25956528dc5c55b463bc7b",
            "rev_no": 7,
            "status_id": "5f38a11baa39556e74845a3e",
            "title": "TaskE",
            "unread": 0,
            "updated_at": "2021-02-01T13:25:24Z",
            "updated_by": "5f25952c28dc5c55b463bc76"
        }
    ],
    "totalItems": 3
}
```

### include_links : true　を指定した場合の例
"item_links" フィールドに、関連アイテムのリンク先d_id, i_id情報が付与されます

"return_number_value": true を指定しない場合、数値は文字列に変換されて返されます
```javascript
{
    "items": [
        {
            "Assignee": "",
            "AutoNum1": "PREFIX_4",
            "Category": "A",
            "Checkbox": "C,A",
            "DateTime": "2020-12-23T01:41:14Z",
            "DueDate": null,
            "User": "h.iwasaki",
            "LU2": "タスクB",
            "Lookup1": "タスクE",
            "Status": "受付",
            "Title": "Title sample AA",
            "created_at": "2020-08-16T04:08:11Z",
            "created_by": "5f25952c28dc5c55b463bc76",
            "d_id": "5f38a11baa395581685afdb4",
            "i_id": "5f38b12aaa39558bfca2964f",
            "item_links": {
                "db_count": 1,
                "item_count": 3,
                "links": [
                    {
                        "d_id": "5f38b0afaa395581685afdf6",
                        "item_count": 3,
                        "items": [
                            {
                                "i_id": "5f38b0b6aa395581685afdff",
                                "type": "lookup"
                            },
                            {
                                "i_id": "5f38b0b6aa395581685afdff",
                                "type": "lookup"
                            },
                            {
                                "i_id": "5f38b0b6aa395581685afe02",
                                "type": "lookup"
                            }
                        ]
                    }
                ]
            },
            "p_id": "TestApp",
            "rev_no": "10",
            "status_id": "5f38a11baa39556e74845a40",
            "title": "Title sample AA",
            "unread": "0",
            "updated_at": "2021-01-22T16:55:59Z",
            "updated_by": "5f25952c28dc5c55b463bc76"
        }
    ],
    "totalItems": 1
}
```

### include_lookups : true　を指定した場合の例
"lookup_items" フィールドに、該当データベース参照(Lookup)先のアイテム情報が展開されます。
Lookup先のItemが再帰的に同一のデータベースを参照しているようなケースでは、最大で2回まで展開されますが、（無限ループを避けるため）それ以上の呼び出しはされません。
```javascript
{
    "items": [
        {
            "Assignee": "",
            "AutoNum1": "PREFIX_4",
            "Category": "A",
            "Checkbox": "C,A",
            "DateTime": "2020-12-23T01:41:14Z",
            "DueDate": null,
            "LU2": "タスクB", // Lookup type 1
            "Lookup1": "タスクE", // Lookup type 2 
            "Status": "受付",
            "Title": "Title sample AA",
            "created_at": "2020-08-16T04:08:11Z",
            "created_by": "5f25952c28dc5c55b463bc76",
            "d_id": "5f38a11baa395581685afdb4",
            "i_id": "5f38b12aaa39558bfca2964f",
            "lookup_items": {
                "LU2": { // Item values for Lookup type 1
                    "Assignee": "Y",
                    "Category": "A",
                    "DueDate": "2015-12-31T15:00:00Z",
                    "Fld-tSWAyL4f": "0",
                    "Status": "受付",
                    "Title": "タスクB",
                    "created_at": "2020-08-16T04:06:14Z",
                    "created_by": "IMPORT",
                    "d_id": "5f38b0afaa395581685afdf6",
                    "i_id": "5f38b0b6aa395581685afe02",
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "2",
                    "status_id": "5f38b0afaa39558bfca2963e",
                    "title": "タスクB",
                    "updated_at": "2021-01-22T07:50:24Z",
                    "updated_by": "5f25952c28dc5c55b463bc76"
                },
                "Lookup1": { // Item values for Lookup type 2
                    "Assignee": "X",
                    "Category": "B",
                    "DueDate": "2015-12-31T15:00:00Z",
                    "Fld-tSWAyL4f": "3",
                    "LookupMySelf": "タスクE",  // Lookup type 3 (LookupField in the Lookup Item)
                    "Status": "完了",
                    "Title": "タスクE",
                    "created_at": "2020-08-16T04:06:14Z",
                    "created_by": "IMPORT",
                    "d_id": "5f38b0afaa395581685afdf6",
                    "i_id": "5f38b0b6aa395581685afdff",
                    "lookup_items": {
                        "LookupMySelf": { // Items for Lookup Item 3 
                            "Assignee": "X",
                            "Category": "B",
                            "DueDate": "2015-12-31T15:00:00Z",
                            "Fld-tSWAyL4f": "3",
                            "LookupMySelf": "タスクE",  // Lookup Item 3 (Recursive Link... )
                            "Status": "完了",
                            "Title": "タスクE",
                            "created_at": "2020-08-16T04:06:14Z",
                            "created_by": "IMPORT",
                            "d_id": "5f38b0afaa395581685afdf6",
                            "i_id": "5f38b0b6aa395581685afdff",
                            "lookup_items": {
                                "LookupMySelf": {  // Recursive call will be limited by twice for the same datastores in the result
                                    "Assignee": "X",
                                    "Category": "B",
                                    "DueDate": "2015-12-31T15:00:00Z",
                                    "Fld-tSWAyL4f": "3",
                                    "LookupMySelf": "5f38b0b6aa395581685afdff",
                                    "Title": "タスクE",
                                    "created_at": "2020-08-16T04:06:14Z",
                                    "created_by": "IMPORT",
                                    "d_id": "5f38b0afaa395581685afdf6",
                                    "i_id": "5f38b0b6aa395581685afdff",
                                    "p_id": "5f25956528dc5c55b463bc7b",
                                    "rev_no": "4",
                                    "status_id": "5f38b0afaa39558bfca2963c",
                                    "title": "タスクE",
                                    "updated_at": "2021-01-22T17:10:37Z",
                                    "updated_by": "5f25952c28dc5c55b463bc76"
                                }
                            },
                            "p_id": "5f25956528dc5c55b463bc7b",
                            "rev_no": "4",
                            "status_id": "5f38b0afaa39558bfca2963c",
                            "title": "タスクE",
                            "updated_at": "2021-01-22T17:10:37Z",
                            "updated_by": "5f25952c28dc5c55b463bc76"
                        }
                    },
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "4",
                    "status_id": "5f38b0afaa39558bfca2963c",
                    "title": "タスクE",
                    "updated_at": "2021-01-22T17:10:37Z",
                    "updated_by": "5f25952c28dc5c55b463bc76"
                }
            },
            "p_id": "TestApp",
            "rev_no": "10",
            "status_id": "5f38a11baa39556e74845a40",
            "title": "Title sample AA",
            "unread": "0",
            "updated_at": "2021-01-22T16:55:59Z",
            "updated_by": "5f25952c28dc5c55b463bc76"
        }
    ],
    "totalItems": 1
}
```
