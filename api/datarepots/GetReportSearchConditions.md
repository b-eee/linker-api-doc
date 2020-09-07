
#### GetReportSearchConditions

レポートの検索条件を取得

**Description**

データレポートの検索条件を取得する（検索条件ダイアログ等、表示用）

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/reports/:report-id/conditions
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID/conditions
```

**Response Sample**

```javascript
[
    {
        "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",
        "display_id": "TITLE",
        "f_id": "5c69148384f4be344c2ff0f1",
        "name": "Title",
        "dataType": "text",
        "order": 0
    },
    {
        "rpf_id": "b752bf7f-9f0d-4370-ac34-45b9be01453f",
        "display_id": "DueDate",
        "f_id": "5c69148384f4be344c2ff0f2",
        "name": "Due Date",
        "dataType": "date",
        "order": 4
    },
    {
        "rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
        "display_id": "CATEGORY",
        "f_id": "5c6363ed84f4be7de0350452",
        "name": "Category",
        "dataType": "select",
        "order": 2,
        "options": [
            {
                "o_id": "5c6363f384f4be2550bfe91b",
                "value": "C",
                "color": "",
                "enabled": true,
                "sort_id": 0
            },
            {
                "o_id": "5c6363f384f4be2550bfe91c",
                "value": "B",
                "color": "",
                "enabled": true,
                "sort_id": 1
            },
            {
                "o_id": "5c6363f384f4be2550bfe91d",
                "value": "A",
                "color": "",
                "enabled": true,
                "sort_id": 2
            }
        ]
    },
    {
        "rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",
        "name": "Status",
        "display_id": "STATUS",
        "f_id": "5c6363ed84f4be7de0350453",
        "dataType": "status",
        "order": 3,
        "statuses": [
            {
                "s_id": "5c6363ed84f4be7de0350457",
                "name": "New",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de0350456",
                "name": "Closed",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de0350459",
                "name": "In Review",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de0350458",
                "name": "Assigned",
                "color": ""
            },
            {
                "s_id": "5c6363ed84f4be7de035045a",
                "name": "In Progress",
                "color": ""
            }
        ]
    },
    {
        "rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",
        "display_id": "NOTE",
        "f_id": "5c6459de84f4be4588a77288",
        "name": "note",
        "dataType": "textarea",
        "order": 5
    },
    {
        "rpf_id": "8a20643b-fe36-45f1-bbd6-b2b6e4296a54",
        "display_id": "NUM",
        "f_id": "5c91f38a84f4be29540c4e9c",
        "name": "Num",
        "dataType": "number",
        "order": 6
    }
]
```
