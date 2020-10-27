
#### GetReportData

レポートデータの取得

**Description**

データレポートの結果を取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/reports/:report-id
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_ID/reports/REPORT_ID
```

**Response Sample**

- 出力フィールドに画面ID(display_id)が指定されている場合は、report_result はdisplay_id が使用されます。

```javascript
{
    "error": ""
    "report_title": "SimpleJoin", // レポート名
    "totalItems": 40932, // 全データ件数
    "report_results": [ // 取得データ
        {
            "NOTE": "B",
            "TITLE": "タスクC",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,
            "DUE_DATE": "2016/01/01",
            "items": [　 // 集計レポートの場合、集計結果に含まれる該当Item,DatasstoreのIDが含まれる
                {
                    "d_id": "5f267f1028dc5c6988bc2fe0",
                    "i_id": "5f267f1628dc5c6988bc2ff0"
                },
                {
                    "d_id": "5f267f1028dc5c6988bc2fe0",
                    "i_id": "5f267f1628dc5c6988bc2ff2"
                }
            ],
            "i_id": "5f267f1628dc5c6988bc2fef" // 集計されていないレポートの場合は、該当アイテムのIDが含まれる
        },
        {
            "NOTE": "B",
            "TITLE": "案件（明細あり）",
            "CATEGORY": "B",
            "STATUS": "In Review",
            "NUM": 0,
            "DUE_DATE": "2016/01/01"
            "items": [ 
                {
                    "d_id": "5f267f1028dc5c6988bc2fe0",
                    "i_id": "5f267f1628dc5c6988bc2ff1"
                }
            ]
        },
        {
            "NOTE": "B",
            "TITLE": "",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,,
            "items": [
                {
                    "d_id": "5f267f1028dc5c6988bc2fe0",
                    "i_id": "5f267f1628dc5c6988bc2fef"
                }
            ]
        },
        {
            "NOTE": "B",
            "TITLE": "１１１新規起票",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,,
            "items": [
                {
                    "d_id": "5f267f1028dc5c6988bc2fe0",
                    "i_id": "5f267f1628dc5c6988bc2fee"
                }
            ]
        },
        {
            "NOTE": "B",
            "TITLE": "タスクB",
            "CATEGORY": "B",
            "STATUS": "New",
            "NUM": 0,
            "DUE_DATE": "2016/01/01",
            "items": [
                {
                    "d_id": "5f267f1028dc5c6988bc2fe0",
                    "i_id": "5f267f1628dc5c6988bc2fbb"
                }
            ]
        }
    ],
    "report_fields": [ // 取得レポートのfield情報
        {
            "title": "Title",
            "rpf_id": "4a0b2f8a-f332-4579-a2d4-e9b5971d9e80",
            "display_id" : "TITLE",
            "data_type": "text",
            "display_type": "",
            "align": "",
            "width": 235,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c69148384f4be344c2ff0f1",
            "d_id": "5c69148384f4be1f241fedcd",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Due Date",
            "rpf_id": "b752bf7f-9f0d-4370-ac34-45b9be01453f",
            "display_id" : "DUE_DATE",
            "data_type": "date",
            "display_type": "",
            "align": "",
            "width": 106,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c69148384f4be344c2ff0f5",
            "d_id": "5c69148384f4be1f241fedcd",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Category",
            "rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
            "display_id" : "CATEGORY",
            "data_type": "select",
            "display_type": "text",
            "align": "left",
            "width": 94,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "B",
                    "bg_color": "#dcecf3",
                    "ft_color": "#165896",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "C",
                    "bg_color": "#dcecf3",
                    "ft_color": "#165896",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "7b9db4bb-3516-4cd7-946a-97c1ddcdca2a",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "A",
                    "bg_color": "#f4eaf3",
                    "ft_color": "#9e9e9e",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                }
            ],
            "f_id": "5c6363ed84f4be7de0350452",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Status",
            "rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",
            "display_id" : "STATUS",
            "data_type": "status",
            "display_type": "text",
            "align": "left",
            "width": 97,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "85c15eca-1b7a-4423-9969-55f363efc4c1",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "新規",
                    "bg_color": "#f9e9e9",
                    "ft_color": "#c01717",
                    "apply_row": true,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "2d9bfd30-e194-4492-a93e-e6d0e4323685",
                    "condition": "eq",
                    "cond_type": "text",
                    "value": "",
                    "bg_color": "#f0f7df",
                    "ft_color": "#2a7850",
                    "apply_row": false,
                    "use_field_ref": true,
                    "value_rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",
                    "font_size": "small",
                    "font_style": "italic",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                }
            ],
            "f_id": "5c6363ed84f4be7de0350453",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": true,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "note",
            "rpf_id": "4552a666-508d-419c-ba99-7c9a16b24894",
            "display_id" : "NOTE",
            "data_type": "textarea",
            "display_type": "",
            "align": "",
            "width": 174,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c6459de84f4be4588a77288",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "Num",
            "rpf_id": "8a20643b-fe36-45f1-bbd6-b2b6e4296a54",
            "display_id" : "NUM",
            "data_type": "number",
            "display_type": "number",
            "align": "right",
            "width": 200,
            "negative_sign_type": "triangle",
            "num_format": "comma-separeted",
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [],
            "f_id": "5c91f38a84f4be29540c4e9c",
            "d_id": "5c6363ed84f4be2550bfe8ff",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": false
        },
        {
            "title": "X",
            "rpf_id": "X",
            "data_type": "number",
            "display_type": "number",
            "align": "right",
            "width": 104,
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": 1,
                    "bg_color": "#f8eadc",
                    "ft_color": "#d26c07",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "font_size": "big",
                    "font_style": "italic",
                    "font_weight": "bold",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": "",
                    "bg_color": "#FFFFFF",
                    "ft_color": "#000000",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "num_format"
                }
            ],
            "f_id": "",
            "d_id": "",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": true
        },
        {
            "title": "Y",
            "rpf_id": "Y",
            "data_type": "number",
            "display_type": "number",
            "align": "right",
            "width": 104,
            "num_info": {
                "prefix": "",
                "suffix": "",
                "no_comma": false
            },
            "conditions": [
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": 1,
                    "bg_color": "#f8eadc",
                    "ft_color": "#d26c07",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "font_size": "big",
                    "font_style": "italic",
                    "font_weight": "bold",
                    "negative_sign_type": "normal",
                    "num_format": "comma-separeted"
                },
                {
                    "cond_rpf_id": "5ccad4b2-831a-4172-a91c-aa1f93ff107b",
                    "condition": "eq",
                    "cond_type": "number",
                    "value": "",
                    "bg_color": "#FFFFFF",
                    "ft_color": "#000000",
                    "apply_row": false,
                    "use_field_ref": false,
                    "value_rpf_id": "",
                    "font_size": "normal",
                    "font_style": "normal",
                    "font_weight": "normal",
                    "negative_sign_type": "normal",
                    "num_format": "num_format"
                }
            ],
            "f_id": "",
            "d_id": "",
            "merge_cells": false,
            "hide": false,
            "disable_search": false,
            "use_integrated_report": false,
            "is_cross_key": true
        }
    ]
}
```

