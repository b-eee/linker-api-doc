
#### GetChartDataByConditions

条件を指定してチャートデータを取得

**Description**

条件を指定してレポートデータを取得する

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/charts/:chart-id/filter
```

**Payload**

```text
conditions -  検索条件を指定
            DataReportフィールドのdisplay_id　または、 "rpf_id"(/conditions APIで返されるレポートフィールドID) を指定して絞り込む
            "search_value": 検索条件を配列で指定（サンプルを参照） ※アイテム一覧の指定と同様、フィールドタイプごとに指定内容が異なる
```

**Request URL Sample**


検索条件に画面IDを利用する場合　（id: にデータレポートフィールドの画面IDを指定します）
```text
POST https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID/conditions

{
    "conditions":[
        {
            "id":"CATEGORY",
            "search_value":["B"]
        }
  ]
}
```

レポート用フィールドIDを利用する場合 （rpf_id: にレポートフィールドIDを指定します）

```text
POST https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID/conditions

{
    "conditions":[
        {
          "rpf_id": "9ac0d794-fc4a-473f-be36-647d22c7cfa2",
          "search_value":["7"]
        }
    ]
}
```

**Response Sample**

```javascript
{
    "chart": {
        "type": "barStacked"
    },
    "color": "DEFAULT",
    "datasets": [
        {
            "data": [
                60,
                120
            ],
            "label": "7月"
        }
    ],
    "labels": [
        "事業部A",
        "事業部B"
    ],
    "title": {
        "text": "１"
    },
    "zero": true
}
```

