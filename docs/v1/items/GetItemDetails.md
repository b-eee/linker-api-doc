#### GetItemDetails

アイテムの詳細情報、アクションリストを取得

**Description**

指定したアイテムの情報（フィールド、ステータス、アクションなど）を取得します

**Method**

GET

**Request URL Format**

(1) 画面IDの利用時
```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/details/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id  :  アイテムのID
```

(2) 内部データストアID(d_id)指定時

```text
/api/v0/datastores/:datastore-id/items/:item-id
```

**URL Params**

```text
datastore-id  :  データストアID  (d_id)
item-id  :  アイテムのID
```

**Query Params**

```text
format                : "map"　を指定すると、field_valuesの結果が画面IDのmap形式で返される
include_linked_items  : true を指定すると、関連アイテム一覧データを含む。format=mapの場合は、画面IDの形式で返される
```

**Request URL Sample**


**Response Sample**

(1) 画面ID利用時、format=map指定、関連アイテム一覧を含む

```text
GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/DSNAME/items/details/5cd3bde884f4be40c092ecb8?format=map&include_linked_items=true
```
```javascript
{
    "title": "タスクE",
    "field_values": {
        "AutoNo": {
            "field_id": "AutoNo",
            "field_name": "AutoNo",
            "dataType": "autonum",
            "value": "21",
            "use_as_search": true,
            "show_in_list": true
        },
        "Branch-No": {
            "field_id": "Branch-No",
            "field_name": "枝番",
            "dataType": "autonum",
            "value": null,
            "use_as_search": true,
            "show_in_list": false
        },
        "FILE": {
            "field_id": "FILE",
            "field_name": "File",
            "dataType": "file",
            "value": null,
            "use_as_search": false,
            "show_in_list": true
        },
        "Fld-BLoaNKjo": {
            "field_id": "Fld-BLoaNKjo",
            "field_name": "カテゴリ",
            "dataType": "select",
            "value": "5cd3bde884f4be40c092ecc5",
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-M9kSDGIY": {
            "field_id": "Fld-M9kSDGIY",
            "field_name": "ユーザー選択",
            "dataType": "users",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-NdC29Im0": {
            "field_id": "Fld-NdC29Im0",
            "field_name": "期限",
            "dataType": "date",
            "value": "2016-01-01T00:00:00Z",
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-cWyzLxb6": {
            "field_id": "Fld-cWyzLxb6",
            "field_name": "Radio",
            "dataType": "radio",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-d0g8UE7D": {
            "field_id": "Fld-d0g8UE7D",
            "field_name": "担当",
            "dataType": "text",
            "value": "X",
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-r2uIjvTP": {
            "field_id": "Fld-r2uIjvTP",
            "field_name": "NoCalc",
            "dataType": "calc",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-u3PpPmne": {
            "field_id": "Fld-u3PpPmne",
            "field_name": "日付範囲",
            "dataType": "date",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-v8ezNQB9": {
            "field_id": "Fld-v8ezNQB9",
            "field_name": "CheckBox",
            "dataType": "checkbox",
            "value": [
                "222"
            ],
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-xjKEyppI": {
            "field_id": "Fld-xjKEyppI",
            "field_name": "ステータス",
            "dataType": "status",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        },
        "Fld-zXHEV5Rl": {
            "field_id": "Fld-zXHEV5Rl",
            "field_name": "数値範囲",
            "dataType": "number",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        },
        "ImageFiles": {
            "field_id": "ImageFiles",
            "field_name": "FILE2",
            "dataType": "file",
            "value": null,
            "use_as_search": false,
            "show_in_list": true
        },
        "LinkKEY": {
            "field_id": "LinkKEY",
            "field_name": "リンクキー",
            "dataType": "text",
            "value": "タスクE",
            "use_as_search": true,
            "show_in_list": true
        },
        "LookUP": {
            "field_id": "LookUP",
            "field_name": "DB参照",
            "dataType": "dslookup",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        }
    },
    "status_list": {
        "5cd3bde284f4be5808a6b3ac": {
            "status_id": "5cd3bde284f4be5808a6b3ac",
            "status_name": "完了"
        },
        "5cd3bde284f4be5808a6b3ad": {
            "status_id": "5cd3bde284f4be5808a6b3ad",
            "status_name": "新規"
        },
        "5cd3bde284f4be5808a6b3ae": {
            "status_id": "5cd3bde284f4be5808a6b3ae",
            "status_name": "受付"
        },
        "5cd3bde284f4be5808a6b3af": {
            "status_id": "5cd3bde284f4be5808a6b3af",
            "status_name": "確認"
        },
        "5cd3bde284f4be5808a6b3b0": {
            "status_id": "5cd3bde284f4be5808a6b3b0",
            "status_name": "作業中"
        }
    },
    "status_actions": {
        "5cd3bde284f4be5808a6b3b1": {
            "action_id": "5cd3bde284f4be5808a6b3b1",
            "action_name": "次のステータスに進める",
            "display_order": 0,
            "crud_type": "2",
            "next_status_id": "5cd3bde284f4be5808a6b3ae"
        }
    },
    "item_actions": {
        "5cd3bde384f4be5808a6b3b9": {
            "action_id": "5cd3bde384f4be5808a6b3b9",
            "action_name": "内容を更新する",
            "display_order": 0,
            "crud_type": "2"
        },
        "5cd3bde384f4be5808a6b3ba": {
            "action_id": "5cd3bde384f4be5808a6b3ba",
            "action_name": "コピーして新規に登録する",
            "display_order": 0,
            "crud_type": "4"
        },
        "5cd3bde384f4be5808a6b3bb": {
            "action_id": "5cd3bde384f4be5808a6b3bb",
            "action_name": "新規登録",
            "display_order": 0,
            "crud_type": "1"
        },
        "5cd3bde384f4be5808a6b3bd": {
            "action_id": "5cd3bde384f4be5808a6b3bd",
            "action_name": "このデータを削除する",
            "display_order": 0,
            "crud_type": "3"
        },
        "5eaf86d8aa39554a445af4dd": {
            "action_id": "5eaf86d8aa39554a445af4dd",
            "action_name": "NewItem2",
            "display_order": 4,
            "crud_type": "1"
        },
        "5eaf94c7aa39551340a7b8f4": {
            "action_id": "5eaf94c7aa39551340a7b8f4",
            "action_name": "NewAction3",
            "display_order": 5,
            "crud_type": "1"
        }
    },
    "linked_items": {
        "ChildDB1": {
            "d_id": "5cc25d1e84f4be574418d580",
            "ds_name": "ChildDB1",
            "display_id": "ChildDB1",
            "fields": {
                "Fld-1hfacFJP": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "calc_info": {
                        "calc_target_fields": [
                            "5cc4dbc084f4be926c491d97",
                            "5cc4dbcd84f4be926c491d98"
                        ],
                        "formula": "{Fld-xGx9u6A2}   /   {Fld-fAcrbFfs}+{Fld-xGx9u6A2}",
                        "no_comma": false,
                        "prefix": "\\",
                        "suffix": ""
                    },
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "calc",
                    "display_id": "Fld-1hfacFJP",
                    "f_id": "5cc8fa5484f4be926c491d9a",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cc8fa5484f4be926c491d9a",
                    "max_value": "",
                    "min_value": "",
                    "name": "計算式フィールド",
                    "names": {
                        "en": "計算式フィールド",
                        "ja": "計算式フィールド"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-7ANOlTq4": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "calc_info": {
                        "calc_target_fields": [],
                        "formula": "",
                        "no_comma": false,
                        "prefix": "",
                        "suffix": ""
                    },
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "calc",
                    "display_id": "Fld-7ANOlTq4",
                    "f_id": "5cda5ac384f4bec92c8b8d03",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cda5ac384f4bec92c8b8d03",
                    "max_value": "",
                    "min_value": "",
                    "name": "NoCalc",
                    "names": {
                        "en": "NoCalc",
                        "ja": "NoCalc"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-DOURZoJP": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "dslookup",
                    "display_id": "Fld-DOURZoJP",
                    "f_id": "5d27516faa39559de85d1408",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5d27516faa39559de85d1408",
                    "max_value": "",
                    "min_value": "",
                    "name": "LkUp",
                    "names": {
                        "en": "LkUp",
                        "ja": "LkUp"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-XbOD2IvT": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "label",
                    "display_id": "Fld-XbOD2IvT",
                    "f_id": "5cc4dbf484f4be926c491d99",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cc4dbf484f4be926c491d99",
                    "max_value": "",
                    "min_value": "",
                    "name": "This is a Label",
                    "names": {
                        "en": "This is a Label",
                        "ja": "This is a Label"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": false,
                    "show_list": false,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-YBngOOkg": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "text",
                    "display_id": "Fld-YBngOOkg",
                    "f_id": "5cfe3cc7aa39554fac8c1d0a",
                    "fieldIndex": 8,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5cfe3cc7aa39554fac8c1d0a",
                    "max_value": "",
                    "min_value": "",
                    "name": "Uniqe",
                    "names": {
                        "en": "Uniqe",
                        "ja": "Uniqe"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": true,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-fAcrbFfs": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "number",
                    "display_id": "Fld-fAcrbFfs",
                    "f_id": "5cc4dbcd84f4be926c491d98",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cc4dbcd84f4be926c491d98",
                    "max_value": "",
                    "min_value": "",
                    "name": "Calc",
                    "names": {
                        "en": "Calc",
                        "ja": "Calc"
                    },
                    "num_info": {
                        "no_comma": false,
                        "prefix": "\\",
                        "suffix": "yen"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-fjpeoxrY": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "number",
                    "display_id": "Fld-fjpeoxrY",
                    "f_id": "5cc4dbb284f4be926c491d96",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cc4dbb284f4be926c491d96",
                    "max_value": "",
                    "min_value": "",
                    "name": "Num1",
                    "names": {
                        "en": "Num1",
                        "ja": "Num1"
                    },
                    "num_info": {
                        "no_comma": true,
                        "prefix": "Code:",
                        "suffix": ""
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-xGx9u6A2": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "number",
                    "display_id": "Fld-xGx9u6A2",
                    "f_id": "5cc4dbc084f4be926c491d97",
                    "fieldIndex": 7,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cc4dbc084f4be926c491d97",
                    "max_value": "",
                    "min_value": "",
                    "name": "Num2",
                    "names": {
                        "en": "Num2",
                        "ja": "Num2"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "ステータス": {
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "status",
                    "display_id": "ステータス",
                    "f_id": "a38850be-4fb9-4025-a297-4c500c793716",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "a38850be-4fb9-4025-a297-4c500c793716",
                    "max_value": "",
                    "min_value": "",
                    "name": "ステータス",
                    "names": {
                        "en": "ステータス",
                        "ja": "ステータス"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": true,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "タスク": {
                    "as_title": true,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "text",
                    "display_id": "タスク",
                    "f_id": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
                    "fieldIndex": 1,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
                    "max_value": "",
                    "min_value": "",
                    "name": "タスク",
                    "names": {
                        "en": "タスク",
                        "ja": "タスク"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 1,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "完了予定日": {
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "text",
                    "display_id": "完了予定日",
                    "f_id": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
                    "fieldIndex": 4,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
                    "max_value": "",
                    "min_value": "",
                    "name": "完了予定日",
                    "names": {
                        "en": "完了予定日",
                        "ja": "完了予定日"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "担当者": {
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "text",
                    "display_id": "担当者",
                    "f_id": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
                    "fieldIndex": 2,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
                    "max_value": "",
                    "min_value": "",
                    "name": "担当者",
                    "names": {
                        "en": "担当者",
                        "ja": "担当者"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "重要度": {
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "text",
                    "display_id": "重要度",
                    "f_id": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
                    "fieldIndex": 5,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
                    "max_value": "",
                    "min_value": "",
                    "name": "重要度",
                    "names": {
                        "en": "重要度",
                        "ja": "重要度"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "開始日": {
                    "as_title": false,
                    "d_id": "5cc25d1e84f4be574418d580",
                    "dataType": "text",
                    "display_id": "開始日",
                    "f_id": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
                    "fieldIndex": 3,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
                    "max_value": "",
                    "min_value": "",
                    "name": "開始日",
                    "names": {
                        "en": "開始日",
                        "ja": "開始日"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                }
            },
            "items": []   // 関連アイテム　無し
        },
        "FieldTypeLineItems": {
            "d_id": "5c6d32f784f4be1f241ff9ff",
            "ds_name": "フィールドType明細",
            "display_id": "FieldTypeLineItems",
            "fields": {
                "FK": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": true,
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "dataType": "text",
                    "display_id": "FK",
                    "f_id": "5c6d32f784f4be70b8bd20b9",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5c6d32f784f4be70b8bd20b9",
                    "max_value": "",
                    "min_value": "",
                    "name": "外部キー",
                    "names": {
                        "en": "FK",
                        "ja": "外部キー"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 3,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-677Ld02p": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "dataType": "users",
                    "display_id": "Fld-677Ld02p",
                    "f_id": "5c9e3f6d84f4be72e49097f3",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5c9e3f6d84f4be72e49097f3",
                    "max_value": "",
                    "min_value": "",
                    "name": "User",
                    "names": {
                        "en": "User",
                        "ja": "User"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "users_info": {
                        "groups": [],
                        "roles": [],
                        "single_select": true,
                        "users_publish_userfield": false,
                        "users_show_mygroup": false,
                        "users_show_workspacemembers": true
                    },
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-BLoaNKjo": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "dataType": "select",
                    "display_id": "Fld-BLoaNKjo",
                    "f_id": "5c6d32f784f4be70b8bd20bb",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5c6d32f784f4be70b8bd20bb",
                    "max_value": "",
                    "min_value": "",
                    "name": "カテゴリ",
                    "names": {
                        "en": "Category",
                        "ja": "カテゴリ"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "selected": "5c6d3bc284f4be1f241ffa21",
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-NdC29Im0": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "dataType": "date",
                    "display_id": "Fld-NdC29Im0",
                    "f_id": "5c6d32f784f4be70b8bd20bd",
                    "fieldIndex": 4,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5c6d32f784f4be70b8bd20bd",
                    "max_value": "",
                    "min_value": "",
                    "name": "期限",
                    "names": {
                        "en": "Due Date",
                        "ja": "期限"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-d0g8UE7D": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "dataType": "text",
                    "display_id": "Fld-d0g8UE7D",
                    "f_id": "5c6d32f784f4be70b8bd20ba",
                    "fieldIndex": 1,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5c6d32f784f4be70b8bd20ba",
                    "max_value": "",
                    "min_value": "",
                    "name": "担当",
                    "names": {
                        "en": "Assignee",
                        "ja": "担当"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-xjKEyppI": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "dataType": "status",
                    "display_id": "Fld-xjKEyppI",
                    "f_id": "5c6d32f784f4be70b8bd20bc",
                    "fieldIndex": 3,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5c6d32f784f4be70b8bd20bc",
                    "max_value": "",
                    "min_value": "",
                    "name": "ステータス",
                    "names": {
                        "en": "Status",
                        "ja": "ステータス"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": true,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-zto1YlDw": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "dataType": "checkbox",
                    "display_id": "Fld-zto1YlDw",
                    "f_id": "5ca30ebd84f4be88ac61b172",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ca30ebd84f4be88ac61b172",
                    "max_value": "",
                    "min_value": "",
                    "name": "CHECK",
                    "names": {
                        "en": "CHECK",
                        "ja": "CHECK"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "selected": [],
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                }
            },
            "items": [
                {
                    "FK": "タスクE",
                    "Fld-677Ld02p": "h.iwasaki,BeeBot",
                    "Fld-BLoaNKjo": "A",
                    "Fld-NdC29Im0": "2015-12-31T15:00:00Z",
                    "Fld-d0g8UE7D": "X",
                    "Fld-xjKEyppI": "確認",
                    "Fld-zto1YlDw": "AAAAA,DDDDD",
                    "created_at": "2019-04-22T08:05:45Z",
                    "created_by": "IMPORT",
                    "d_id": "5c6d32f784f4be1f241ff9ff",
                    "i_id": "5cbd75d984f4bef6c0ed8591",
                    "labels": "",
                    "p_id": "5c6363d984f4be7de0350445",
                    "rev_no": "2",
                    "status_id": "5c6d32f884f4be70b8bd20c2",
                    "title": "タスクE",
                    "updated_at": "2020-05-23T07:48:16Z",
                    "updated_by": "5c5fa7aa84f4be4250aaee25"
                }
            ]
        }
    }
}
```


(2) 内部ID利用時　（パラメーターなし例）

```text
GET https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/58cd1e5bfbfcba2ebcaf0b1e
```

```javascript
{
    "title": "このアイテムのタイトル",
    "field_values": [
        {
            "field_id": "Fld-cx4MBjkE",
            "field_name": "ファイル２",
            "dataType": "file",
            "value": {
                "_id": "58ce52a5fb90a1429b958025",
                "contentType": "text/plain; charset=utf-8",
                "created_at": "2017-03-19T18:43:01.336+09:00",
                "d_id": "58cbf6cbfbfcba78dc71228d",
                "datastore_id": "58cbf6cbfbfcba78dc71228d",
                "deleted": false,
                "field_id": "58cc9253fbfcba88307142d1",
                "file_id": "58ce52a5fb90a1429b958025",
                "filename": "win7_Excelで作成.csv",
                "filepath": "58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "i_id": "58cd1e5bfbfcba2ebcaf0b1e",
                "item_id": "58cd1e5bfbfcba2ebcaf0b1e",
                "mediaLink": "/download_storage/storage/v1/b/attachment-files-test/o/58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "name": "58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "p_id": "58ca3211cce5fe2e84446cd6",
                "selfLink": "/storage/v1/b/attachment-files-test/o/58cbf6cbfbfcba78dc71228d/58cd1e5bfbfcba2ebcaf0b1e/58cc9253fbfcba88307142d1/win7_Excelで作成.csv",
                "size": 185,
                "timeCreated": "2017-03-19T09:43:01.178Z",
                "updated": "2017-03-19T18:43:01.178+09:00",
                "user_id": "58272f4efb90a148d8508d9c",
                "w_id": "58ca3211cce5fe2e84446cd3"
            },
            "use_as_search": false,
            "show_in_list": false
        },
        {
            "field_id": "Fld-xV8qUygH",
            "field_name": "タイトル",
            "dataType": "text",
            "value": "５５５",
            "use_as_search": true,
            "show_in_list": true
        },
        {
            "field_id": "Fld-hN28Dy1C",
            "field_name": "ステータス",
            "dataType": "status",
            "value": null,
            "use_as_search": true,
            "show_in_list": true
        }
    ],
    "status_list": [
        {
            "status_id": "58cbf6cbfbfcba8244ace719",
            "status_name": "ステータス１",
            "sort_id": 1
        },
        {
            "status_id": "58cbf6cbfbfcba8244ace718",
            "status_name": "ステータス２",
            "sort_id": 0
        }
    ],
    "status_actions": [
        {
            "action_id": "58cbf6cbfbfcba8244ace722",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_PREVIOUS",
            "display_order": 0,
            "crud_type": "2",
            "next_status_id": "58cbf6cbfbfcba8244ace719"
        }
    ],
    "item_actions": [
        {
            "action_id": "58cbf6cbfbfcba8244ace71b",
            "action_name": "新しいレコードを登録する",
            "display_order": 0,
            "description": "新規申請がめん",
            "crud_type": "1"
        },
        {
            "action_id": "58cbf6cbfbfcba8244ace71d",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_UPDATE",
            "display_order": 2,
            "crud_type": "2"
        },
        {
            "action_id": "58cbf6cbfbfcba8244ace71c",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_DELETE",
            "display_order": 1,
            "crud_type": "3"
        },
        {
            "action_id": "58cbf6cbfbfcba8244ace71e",
            "action_name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_COPY",
            "display_order": 3,
            "crud_type": "4"
        }
    ]
}
```