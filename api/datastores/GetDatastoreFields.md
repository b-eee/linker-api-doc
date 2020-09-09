
#### GetDatastoreFields

フィールド一覧（DisplayIDを利用）

**Description**

利用可能なフィールドの一覧を取得します（DisplayIDを利用）

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/fields
```

**URL Params**

```text
app-id  : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したID）
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/fields
```

**Response Sample**

```javascript
{
    "fields": {
        "59bf42550e247918255de00d": {
            "field_id": "59bf42550e247918255de00d",
            "name": "タイトル",
            "display_id": "タイトル",
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
        "59bf42550e247918255de00e": {
            "field_id": "59bf42550e247918255de00e",
            "name": "ステータス",
            "display_id": "Fld-nj1ZetGV",
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
        "5a26722e0e24794c979fa5b6": {
            "field_id": "5a26722e0e24794c979fa5b6",
            "name": "n1",
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
        "5a82bffd0e247948bd5cfaf2": {
          "field_id": "5a82bffd0e247948bd5cfaf2",
          "name": "ds1",
          "display_id": "Fld-qFRXJAF2",
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
          "max_value": "",
          "dslookup_info": {
            "dslookup_datastore_id": "5a82bfd50e247948dba5ad20",
            "dslookup_field_id": "ae47af42-3740-4840-a395-b1b5cc4a8b72"
          }
        },
        "5a8392390e247948bd5cfaf3": {
          "field_id": "5a8392390e247948bd5cfaf3",
          "name": "s1",
          "display_id": "Fld-FZR9lYNR",
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
              "option_id": "dc236a0d-58b0-400e-88c7-9276207438cb",
              "sort_id": 0,
              "value": "選択1",
              "enabled": true
            },
            {
              "option_id": "a355531b-c80f-40e8-b6d7-3dc75cc9f3c5",
              "sort_id": 1,
              "value": "選択2",
              "enabled": true
            }
          ]
        }
    },
    "field_layout": {
        "59bf42550e247918255de00d": {
            "field_id": "59bf42550e247918255de00d",
            "sizeX": 9,
            "sizeY": 1,
            "col": 0,
            "row": 0
        },
        "5a26722e0e24794c979fa5b6": {
            "field_id": "5a26722e0e24794c979fa5b6",
            "sizeX": 6,
            "sizeY": 1,
            "col": 0,
            "row": 1
        },
    }
}
```
