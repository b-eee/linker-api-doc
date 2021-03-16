
#### GetChartSearchConditions

チャートの検索条件を取得

**Description**

チャートを絞り込むための検索条件を取得する（検索条件ダイアログ等、表示用）

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/charts/:chart-id/conditions
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID/conditions
```

**Response Sample**

```javascript
[
    {
        "rpf_id": "9ac0d794-fc4a-473f-be36-647d22c7cfa2",
        "name": "月",
        "dataType": "text",
        "order": 0
    },
    {
        "rpf_id": "1adebfeb-150b-4a7f-91ca-a3be1faf37f8",
        "name": "売上",
        "dataType": "number",
        "order": 2
    },
    {
        "rpf_id": "2e4f0de6-1682-4b76-a99f-9229fa5fa868",
        "name": "工場",
        "dataType": "text",
        "order": 1
    }
]
```
