
#### GetReportDataByConditions

条件を指定してレポートデータを取得

**Description**

条件を指定してレポートデータを取得する

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/reports/:report-id/filter
```

**Payload**

```javascript

// 検索条件の指定
"conditions" : [] //検索条件を指定
            // "id" : DataReportフィールドのdisplay_id　または、 "rpf_id"(/conditions APIで返されるレポートフィールドID) を指定
            // "search_value": 検索条件を配列で指定（サンプルを参照） ※アイテム一覧の指定と同様、フィールドタイプごとに指定内容が異なる

// ページネーション
"per_page" : 10 // 1ページたあたりの取得件数　（省略、または、ゼロを指定すると、対象データ全件を返します）
"page" : 1 // ページ数 

// ソート順の指定（複数のソートキー指定）
"sort_fields": [
    {"id": "Status", "order": "desc"},  // idには、 display_id または rpf_idを指定　
    {"id": "Category", "order": "asc"}　// order にはソート順を指定　desc : 降順　ask : 昇順　（省略すると昇順となります）
],

// ソート順の指定（単一のソートキー指定）※"sort_fields": []が指定されている場合は、この指定は無視されれます（sort_fieldsが優先される）
"sort_field_id": "No",　// display_id または rpf_idを指定
"sort_order": "desc",  // asc または descを指定

// 検索結果に作成日、更新日を含める場合は以下を指定します。データソースに指定したデータの作成日、更新日が結果に含まれます。（関連先を結合した場合、関連先アイテムの作成日、更新日は含まれません）
"include_date_at": true,

// 検索結果にデータベース参照(Lookup)先アイテムの値を含める場合、以下を指定します。
"include_lookups": true,

// "include_lookups": trueのとき、参照先Itemの数値型データがNumberとして出力する場合は、以下を指定します（defaultでは、数値は文字列("123")で返却される）
"return_number_value": true,

// 結果をCSV形式取得する場合、"csv"と指定（省略するとJSON形式となる）
"format": "csv" 

```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions
```
**Payload Sample**

検索条件に画面IDを利用する場合　（id: にフィールドIDを指定します）
```javascript
{
    "conditions":[
        { "id":"CATEGORY",  "search_value":["B"] } // CATEGORYカラムのデータ値Bのもののみに絞込み
    ],
    "sort_fields": [
        {"id": "Status", "order": "desc"}, 　// 第１ソートキー
        {"id": "Category", "order": "asc"}　// 第２ソートキー
    ],
    "per_page" : 10,
    "page" : 1
}
```

レポート用フィールドIDを利用する場合 （rpf_id: にレポートフィールドIDを指定します）
```javascript
{
    "conditions":[
        {
            "rpf_id":"4552a666-508d-419c-ba99-7c9a16b24894",  // 特定カラムの値で絞込
            "search_value":["B"]
        }
    ],
    "sort_field_id": "No",  // No カラムでソート
    "sort_order": "desc", // 降順
    "format": "csv" // CSV形式で出力
    // per_pageを省略＝全件を出力
}
```

**Response Sample**

通常の結果サンプルについては、[GetReportData](GetReportData.md) を参照
```javascript
※　JSON形式は、データレポート取得サンプルと同様
※　format="csv"の場合は、1行目がヘッダ行、2行目以降にデータをカンマ区切りで出力される
```

### "include_lookups": trueを指定した場合
"lookup_items" フィールドに、該当データベース参照(Lookup)先のアイテム情報が展開されます。
Lookup先のItemが再帰的に自分のItemを参照しているようなケースでは、最大で2回まで展開されますが、（無限ループを避けるため）それ以上の呼び出しはされません。
```javascript
{
    "report_fields": [
        // (省略)
    ],
    "report_results": [
        {
            "ChildID": "3",
            "LookupMySelf": "タスクE", // Lookup type 1
            "Status1": "確認",
            "Status2": "完了",
            "Title": "TaskD",
            "Title2": "タスクE",
            "created_at": "2020/08/16 11:59:45",
            "items": [
                {
                    "d_id": "5f38a11baa395581685afdb4",
                    "i_id": "5f38a121aa395581685afdc1"
                }
            ],
            "lookup_items": {
                "LookupMySelf": { // Item values of Lookup type 1
                    "Assignee": "X",
                    "Category": "B",
                    "DueDate": "2015-12-31T15:00:00Z",
                    "LookupMySelf": "3",   // Item values of Lookup type 1 (LookupField in the Lookup Item)
                    "Status": "完了",
                    "Title": "タスクE",
                    "created_at": "2020-08-16T04:06:14Z",
                    "created_by": "IMPORT",
                    "d_id": "5f38b0afaa395581685afdf6",
                    "i_id": "5f38b0b6aa395581685afdff",
                    "lookup_items": {
                        "LookupMySelf": { // Item values of Lookup type 1 (Recursive Link... )
                            "Assignee": "X",
                            "Category": "B",
                            "DueDate": "2015-12-31T15:00:00Z",
                            "LookupMySelf": "4", // Recursive call will be limited by twice for the same datastores in the result
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
            "updated_at": "2020/09/30 23:04:30"
        }
    ],
    "report_title": "LookupJoin",
    "error": "",
    "totalItems": 9,
    "item_index_from": 0,
    "item_index_to": 0
}
```