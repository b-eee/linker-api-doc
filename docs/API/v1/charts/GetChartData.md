
#### GetChartData

チャートデータの取得

**Description**

チャートデータを取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/charts/:chart-id
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/charts/CHART_ID
```

**Response Sample**

注意）チャートタイプにより、フォーマットが異なる場合がある

```javascript
{
    "chart": {
        "type": "barStacked"
    },
    "color": "DEFAULT",
    "datasets": [
        {
            "data": [
                80,
                30
            ],
            "label": "9月"
        },
        {
            "data": [
                90,
                80
            ],
            "label": "8月"
        },
        {
            "data": [
                140,
                80
            ],
            "label": "11月"
        },
        {
            "data": [
                100,
                70
            ],
            "label": "1月"
        },
        {
            "data": [
                150,
                90
            ],
            "label": "12月"
        },
        {
            "data": [
                120,
                30
            ],
            "label": "2月"
        },
        {
            "data": [
                160,
                60
            ],
            "label": "3月"
        },
        {
            "data": [
                80,
                80
            ],
            "label": "4月"
        },
        {
            "data": [
                50,
                100
            ],
            "label": "6月"
        },
        {
            "data": [
                120,
                40
            ],
            "label": "10月"
        },
        {
            "data": [
                70,
                60
            ],
            "label": "5月"
        },
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
