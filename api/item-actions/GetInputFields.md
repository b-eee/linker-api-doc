
#### GetInputFields

アクションフィールド情報

**Description**

アクションで利用可能なフィールド情報を取得する

**Method**

GET

**Request Format**

```text
/api/v0/datastores/:datastore-id/actions/:action-id/fields
```

**URL Params**

```text
datastore-id    : データストアID
action-id       : アクションID
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/datastores/59bf42550e2479186a6c6c70/5a2671ec0e24794c979fa5b1/fields
```

**Response Sample**

```javascript
{
    "action": {
        "action_id": "5a2671ec0e24794c979fa5b1",
        "display_order": 3,
        "description": "",
        "crud_type": "2",
        "next_status_id": "5a2671eb0e24794c979fa5ab"
    },
    "action_fields": {
        "5a2671eb0e24794c979fa5a9": {
            "field_id": "5a2671eb0e24794c979fa5a9",
            "name": "タイトル",
            "display_id": "Fld-U2WtgeXa",
            "dataType": "text",
            "search": true,
            "show_list": false,
            "as_title": true,
            "status": false,
            "fieldIndex": 0,
            "title_order": 1,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "5a2671eb0e24794c979fa5aa": {
            "field_id": "5a2671eb0e24794c979fa5aa",
            "name": "ステータス",
            "display_id": "Fld-cTsftJE1",
            "dataType": "status",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": true,
            "fieldIndex": 1,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "5a2672080e24794c979fa5b4": {
            "field_id": "5a2672080e24794c979fa5b4",
            "name": "選択肢1",
            "display_id": "Fld-oQmo4lvb",
            "dataType": "select",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": "",
            "options": [
                {
                    "option_id": "ba280b86-fa91-4ab5-acf7-4c6d2445ffc7",
                    "sort_id": 0,
                    "value": "選択1",
                    "enabled": true
                },
                {
                  "option_id": "c742f7f6-0339-4240-a1ea-66543fc504ca",
                  "sort_id": 1,
                  "value": "選択2",
                  "enabled": true
                }
            ]
        },
        "5a26722e0e24794c979fa5b6": {
            "field_id": "5a26722e0e24794c979fa5b6",
            "name": "数値1",
            "display_id": "Fld-BCgyvxUw",
            "dataType": "number",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "1",
            "max_value": "10"
        },
        "5a26724e0e24794c979fa5b7": {
            "field_id": "5a26724e0e24794c979fa5b7",
            "name": "ユーザ1",
            "display_id": "Fld-mZbgboDW",
            "dataType": "users",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "5a2672880e24794c979fa5b8": {
            "field_id": "5a2672880e24794c979fa5b8",
            "name": "データストア参照1",
            "display_id": "Fld-2CtMZFCM",
            "dataType": "dslookup",
            "search": false,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": false,
            "unique": false,
            "min_value": "",
            "max_value": ""
            },
        "5a2672970e24794c979fa5b9": {
            "field_id": "5a2672970e24794c979fa5b9",
            "name": "自動採番1",
            "display_id": "Fld-v8f4OWuI",
            "dataType": "autonum",
            "search": true,
            "show_list": true,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": true,
            "unique": false,
            "min_value": "",
            "max_value": ""
        },
        "5a2673740e24794c979fa5bf": {
            "field_id": "5a2673740e24794c979fa5bf",
            "name": "添付ファイル1",
            "display_id": "Fld-WLZo8vwy",
            "dataType": "file",
            "search": false,
            "show_list": false,
            "as_title": false,
            "status": false,
            "fieldIndex": 0,
            "title_order": 0,
            "full_text": true,
            "unique": false,
            "min_value": "",
            "max_value": ""
        }
    },
    "action_field_settings": {
        "5a2671eb0e24794c979fa5a9": {
            "action_id": "5a2671ec0e24794c979fa5b1",
            "field_id": "5a2671eb0e24794c979fa5a9",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2671eb0e24794c979fa5aa": {
            "action_id": "5a2671ec0e24794c979fa5b1",
            "field_id": "5a2671eb0e24794c979fa5aa",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2672080e24794c979fa5b4": {
            "action_id": "",
            "field_id": "5a2672080e24794c979fa5b4",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a26722e0e24794c979fa5b6": {
            "action_id": "",
            "field_id": "5a26722e0e24794c979fa5b6",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a26724e0e24794c979fa5b7": {
            "action_id": "",
            "field_id": "5a26724e0e24794c979fa5b7",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2672880e24794c979fa5b8": {
            "action_id": "",
            "field_id": "5a2672880e24794c979fa5b8",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2672970e24794c979fa5b9": {
            "action_id": "",
            "field_id": "5a2672970e24794c979fa5b9",
            "show": true,
            "update": true,
            "mandatory": false
        },
        "5a2673740e24794c979fa5bf": {
            "action_id": "",
            "field_id": "5a2673740e24794c979fa5bf",
            "show": true,
            "update": true,
            "mandatory": false
        }
    }
}
```
