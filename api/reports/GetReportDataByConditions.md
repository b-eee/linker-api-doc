
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

```text
conditions :  検索条件を指定
            DataReportフィールドのdisplay_id　または、 "rpf_id"(/conditions APIで返されるレポートフィールドID) を指定して絞り込む
            "search_value": 検索条件を配列で指定（サンプルを参照） ※アイテム一覧の指定と同様、フィールドタイプごとに指定内容が異なる
per_page : 一度のCallで返す結果件数
page : ページ番号
```

**Request URL Sample**


検索条件に画面IDを利用する場合　（id: にフィールドIDを指定します）
```text
POST https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions
```
**Payload Sample**
```javascript
{
    "conditions":[
        {
            "id":"CATEGORY",
            "search_value":["B"]
        }
    ],
    "per_page": 100, 
    "page": 6  // 600件目から100件を返す
}
}
```

レポート用フィールドIDを利用する場合 （rpf_id: にレポートフィールドIDを指定します）
```text
POST https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions
```
**Payload Sample**
```javascript
{
    "conditions":[
        {
            "rpf_id":"4552a666-508d-419c-ba99-7c9a16b24894",
            "search_value":["B"]
        }
    ],
    "per_page": 0  //全件
}
```

**Response Sample**

```javascript
※ （省略） 形式は、データレポート取得サンプルと同様
```

