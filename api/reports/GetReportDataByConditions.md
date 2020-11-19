
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

// 結果をCSV形式取得する場合、"csv"と指定（省略するとJSON形式となる）
"format": "csv" 
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions
```
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

```javascript
（省略） 
※　JSON形式は、データレポート取得サンプルと同様
※　format="csv"の場合は、1行目がヘッダ行、2行目以降にデータをカンマ区切りで出力される
```

