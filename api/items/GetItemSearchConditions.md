#### GetItemSearchConditions

アイテム検索条件の取得

**Description**

アイテム一覧を絞り込むための検索条件（search_conditions) を取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/conditions
```

**URL Params**

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したIDを指定）
```

**Query Params**

```text
なし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/5c6363d984f4be7de0350445/datastores/DATABASEID/items/conditions
```

**Response Description**
- result 配列に、検索条件として利用できるフィールドが返ります
```text
    {
        "f_id": "5cd3bde184f4be5808a6b3a6", // フィールドID
        "name": "タイトル",　// フィールド名
        "display_id": "Fld-eAXmZhXn",　　// フィールドの画面ID
        "data_type": "text",　//データ型
        "order": 0 //　表示順
    },
```
- data_typeによっては、選択肢が含まれます。
選択肢型（選択肢、チェックボックス、ラジオボタン）
```
    {
        "f_id": "5cd3bde184f4be5808a6b3a8",
        "name": "カテゴリ",
        "display_id": "Fld-BLoaNKjo",
        "data_type": "select",
        "order": 2,
        "options": [
            {
                "option_id": "5cd3bde884f4be40c092ecc3",
                "sort_id": 0,
                "value": "C",
                "enabled": true,
                "color": ""
            },
            {
                "option_id": "5cd3bde884f4be40c092ecc4",
                "sort_id": 1,
                "value": "B",
                "enabled": true,
                "color": ""
            },
            {
                "option_id": "5cd3bde884f4be40c092ecc5",
                "sort_id": 2,
                "value": "A",
                "enabled": true,
                "color": ""
            }
        ]
    },
```
ステータス型
```
    {
        "f_id": "5cd3bde184f4be5808a6b3a9",
        "name": "ステータス",
        "display_id": "Fld-xjKEyppI",
        "data_type": "status",
        "order": 3,
        "statuses": [
            {
                "status_id": "5cd3bde284f4be5808a6b3ad",
                "status_name": "新規"
            },
            {
                "status_id": "5cd3bde284f4be5808a6b3ae",
                "status_name": "受付"
            },
            {
                "status_id": "5cd3bde284f4be5808a6b3b0",
                "status_name": "作業中"
            },
            {
                "status_id": "5cd3bde284f4be5808a6b3af",
                "status_name": "確認"
            },
            {
                "status_id": "5cd3bde284f4be5808a6b3ac",
                "status_name": "完了"
            }
        ]
    },
```
データベース参照型には、参照しているデータベースID、フィールドIDが含まれます
```
    {
        "f_id": "5ec0cdf5aa39551a401f6525",
        "name": "DB参照",
        "display_id": "LookUP",
        "data_type": "dslookup",
        "order": 11,
        "ds_lookup_info": {
            "dslookup_project_id": "5c6363d984f4be7de0350445",
            "dslookup_datastore_id": "5cc25d1e84f4be574418d580",
            "dslookup_field_id": "5cfe3cc7aa39554fac8c1d0a"
        }
    },
```
ユーザー型フィールドの`single_select`がtrueの場合、単一ユーザーを選択するタイプを意味します。falseの場合は複数ユーザーを選択可能なタイプを意味します。
```
    {
        "f_id": "5ec0afa8aa39551a401f6524",
        "name": "ユーザー選択",
        "display_id": "Fld-M9kSDGIY",
        "data_type": "users",
        "order": 10,
        "users_info": {
            "single_select": false
        }
    },
```

**Response Sample**

```javascript
{
    "has_error": false,
    "result": [
        {
            "f_id": "5cd3bde184f4be5808a6b3a6",
            "name": "タイトル",
            "display_id": "Fld-eAXmZhXn",
            "data_type": "text",
            "order": 0
        },
        {
            "f_id": "5cd3bde184f4be5808a6b3a7",
            "name": "担当",
            "display_id": "Fld-d0g8UE7D",
            "data_type": "text",
            "order": 1
        },
        {
            "f_id": "5cd3bde184f4be5808a6b3a8",
            "name": "カテゴリ",
            "display_id": "Fld-BLoaNKjo",
            "data_type": "select",
            "order": 2,
            "options": [
                {
                    "option_id": "5cd3bde884f4be40c092ecc3",
                    "sort_id": 0,
                    "value": "C",
                    "enabled": true,
                    "color": ""
                },
                {
                    "option_id": "5cd3bde884f4be40c092ecc4",
                    "sort_id": 1,
                    "value": "B",
                    "enabled": true,
                    "color": ""
                },
                {
                    "option_id": "5cd3bde884f4be40c092ecc5",
                    "sort_id": 2,
                    "value": "A",
                    "enabled": true,
                    "color": ""
                }
            ]
        },
        {
            "f_id": "5cd3bde184f4be5808a6b3a9",
            "name": "ステータス",
            "display_id": "Fld-xjKEyppI",
            "data_type": "status",
            "order": 3,
            "statuses": [
                {
                    "status_id": "5cd3bde284f4be5808a6b3ad",
                    "status_name": "新規"
                },
                {
                    "status_id": "5cd3bde284f4be5808a6b3ae",
                    "status_name": "受付"
                },
                {
                    "status_id": "5cd3bde284f4be5808a6b3b0",
                    "status_name": "作業中"
                },
                {
                    "status_id": "5cd3bde284f4be5808a6b3af",
                    "status_name": "確認"
                },
                {
                    "status_id": "5cd3bde284f4be5808a6b3ac",
                    "status_name": "完了"
                }
            ]
        },
        {
            "f_id": "5cd3bde184f4be5808a6b3aa",
            "name": "期限",
            "display_id": "Fld-NdC29Im0",
            "data_type": "date",
            "order": 4
        },
        {
            "f_id": "5cda5af384f4bec92c8b8d04",
            "name": "NoCalc",
            "display_id": "Fld-r2uIjvTP",
            "data_type": "calc",
            "order": 5
        },
        {
            "f_id": "5eaf90c5aa39556034e0db8c",
            "name": "AutoNo",
            "display_id": "AutoNo",
            "data_type": "autonum",
            "order": 7
        },
        {
            "f_id": "5ebb5f04aa3955f14cd71cba",
            "name": "CheckBox",
            "display_id": "Fld-v8ezNQB9",
            "data_type": "checkbox",
            "order": 8,
            "options": [
                {
                    "option_id": "4b724fcb-3dec-4fde-b211-f8f89fa50b53",
                    "sort_id": 0,
                    "value": "111",
                    "enabled": true,
                    "color": ""
                },
                {
                    "option_id": "511d9ee8-9062-4ebf-94d0-b40f6b614796",
                    "sort_id": 2,
                    "value": "333",
                    "enabled": true,
                    "color": ""
                },
                {
                    "option_id": "a1fc544f-eb05-40b0-9cf4-aa4823c5fa05",
                    "sort_id": 1,
                    "value": "222",
                    "enabled": true,
                    "color": ""
                }
            ]
        },
        {
            "f_id": "5ec0814caa3955e3e4374062",
            "name": "枝番",
            "display_id": "Branch-No",
            "data_type": "autonum",
            "order": 9
        },
        {
            "f_id": "5ec0afa8aa39551a401f6524",
            "name": "ユーザー選択",
            "display_id": "Fld-M9kSDGIY",
            "data_type": "users",
            "order": 10,
            "users_info": {
                "single_select": false
            }
        },
        {
            "f_id": "5ec0cdf5aa39551a401f6525",
            "name": "DB参照",
            "display_id": "LookUP",
            "data_type": "dslookup",
            "order": 11,
            "ds_lookup_info": {
                "dslookup_project_id": "5c6363d984f4be7de0350445",
                "dslookup_datastore_id": "5cc25d1e84f4be574418d580",
                "dslookup_field_id": "5cfe3cc7aa39554fac8c1d0a"
            }
        },
        {
            "f_id": "5ec0d7bdaa395579586f7ca1",
            "name": "日付範囲",
            "display_id": "Fld-u3PpPmne",
            "data_type": "date",
            "order": 12,
            "max_value": "2020-09-24T15:00:00.000Z",
            "min_value": "2020-04-30T15:00:00.000Z"
        },
        {
            "f_id": "5ec0d7d1aa395579586f7ca2",
            "name": "数値範囲",
            "display_id": "Fld-zXHEV5Rl",
            "data_type": "number",
            "order": 13,
            "max_value": "99",
            "min_value": "10"
        }
    ]
}
```
