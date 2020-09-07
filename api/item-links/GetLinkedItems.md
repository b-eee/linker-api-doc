#### GetLinkedItems

関連アイテム一覧

**Description**

アイテムに関連するデータストアと、リンクされたアイテムの一覧を返す

利用用途に従って、2週類のURLがあります。
##### 
- [(1) 画面IDを利用する場合](#画面IDを利用する場合) 
- [(2) 画面IDを利用しない場合](#画面IDを利用しない場合) 

**Method**

GET

##### 画面IDを利用する場合

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/links/:item-id
```
**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id  :  アイテムのID
```

**Query Params**

```text
linked_p_id : 関連先のp_idを画面ID指定
linked_d_id : 関連先のd_idを画面ID指定
use_display_id  : true を指定すると画面IDのmap形式で返される

```

**Response Sample**
```text
GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/DSNAME/items/links/5cbd75d984f4bef6c0ed8591?use_display_id=true
```
```javascript
{
    "has_error": false,
    "result": {
        "RelatedData": {
            "d_id": "5cd3bde184f4be40c092eca7",
            "ds_name": "関連DB１",
            "display_id": "RelatedData",
            "fields": {
                "AutoNo": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "autonum_info": {
                        "digit": 9,
                        "prefix": "No."
                    },
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "autonum",
                    "display_id": "AutoNo",
                    "f_id": "5eaf90c5aa39556034e0db8c",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5eaf90c5aa39556034e0db8c",
                    "max_value": "",
                    "min_value": "",
                    "name": "AutoNo",
                    "names": {
                        "en": "AutoNo",
                        "ja": "AutoNo"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Branch-No": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "autonum_info": {
                        "digit": 9,
                        "prefix": "PRE"
                    },
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "autonum",
                    "display_id": "Branch-No",
                    "f_id": "5ec0814caa3955e3e4374062",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ec0814caa3955e3e4374062",
                    "max_value": "",
                    "min_value": "",
                    "name": "枝番",
                    "names": {
                        "en": "BranchNo",
                        "ja": "枝番"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": false,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "FILE": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "file",
                    "display_id": "FILE",
                    "f_id": "5e297386aa3955626c67afb7",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "file_info": {
                        "show_img": false
                    },
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5e297386aa3955626c67afb7",
                    "max_value": "",
                    "min_value": "",
                    "name": "File",
                    "names": {
                        "en": "File",
                        "ja": "File"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": false,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-BLoaNKjo": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "select",
                    "display_id": "Fld-BLoaNKjo",
                    "f_id": "5cd3bde184f4be5808a6b3a8",
                    "fieldIndex": 2,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5cd3bde184f4be5808a6b3a8",
                    "max_value": "",
                    "min_value": "",
                    "name": "カテゴリ",
                    "names": {
                        "en": "Category",
                        "ja": "カテゴリ"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-M9kSDGIY": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "users",
                    "display_id": "Fld-M9kSDGIY",
                    "f_id": "5ec0afa8aa39551a401f6524",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ec0afa8aa39551a401f6524",
                    "max_value": "",
                    "min_value": "",
                    "name": "ユーザー選択",
                    "names": {
                        "en": "Users",
                        "ja": "ユーザー選択"
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
                        "single_select": false,
                        "users_publish_userfield": false,
                        "users_show_mygroup": false,
                        "users_show_workspacemembers": true
                    },
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-NdC29Im0": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "date",
                    "display_id": "Fld-NdC29Im0",
                    "f_id": "5cd3bde184f4be5808a6b3aa",
                    "fieldIndex": 4,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5cd3bde184f4be5808a6b3aa",
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
                "Fld-cWyzLxb6": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "radio",
                    "display_id": "Fld-cWyzLxb6",
                    "f_id": "5ec4dc7faa3955faf8200081",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ec4dc7faa3955faf8200081",
                    "max_value": "",
                    "min_value": "",
                    "name": "Radio",
                    "names": {
                        "en": "Radio",
                        "ja": "Radio"
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
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "text",
                    "display_id": "Fld-d0g8UE7D",
                    "f_id": "5cd3bde184f4be5808a6b3a7",
                    "fieldIndex": 1,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5cd3bde184f4be5808a6b3a7",
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
                "Fld-r2uIjvTP": {
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
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "calc",
                    "display_id": "Fld-r2uIjvTP",
                    "f_id": "5cda5af384f4bec92c8b8d04",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cda5af384f4bec92c8b8d04",
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
                "Fld-u3PpPmne": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "date",
                    "display_id": "Fld-u3PpPmne",
                    "f_id": "5ec0d7bdaa395579586f7ca1",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ec0d7bdaa395579586f7ca1",
                    "max_value": "2020-09-24T15:00:00.000Z",
                    "min_value": "2020-04-30T15:00:00.000Z",
                    "name": "日付範囲",
                    "names": {
                        "en": "DateRange",
                        "ja": "日付範囲"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-v8ezNQB9": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "checkbox",
                    "display_id": "Fld-v8ezNQB9",
                    "f_id": "5ebb5f04aa3955f14cd71cba",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ebb5f04aa3955f14cd71cba",
                    "max_value": "",
                    "min_value": "",
                    "name": "CheckBox",
                    "names": {
                        "en": "CheckBox",
                        "ja": "CheckBox"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "selected": [],
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-xjKEyppI": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "status",
                    "display_id": "Fld-xjKEyppI",
                    "f_id": "5cd3bde184f4be5808a6b3a9",
                    "fieldIndex": 3,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5cd3bde184f4be5808a6b3a9",
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
                "Fld-zXHEV5Rl": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "number",
                    "display_id": "Fld-zXHEV5Rl",
                    "f_id": "5ec0d7d1aa395579586f7ca2",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ec0d7d1aa395579586f7ca2",
                    "max_value": "99",
                    "min_value": "10",
                    "name": "数値範囲",
                    "names": {
                        "en": "NumRange",
                        "ja": "数値範囲"
                    },
                    "num_info": {
                        "no_comma": true,
                        "prefix": "Pre",
                        "suffix": "Suff"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "ImageFiles": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "file",
                    "display_id": "ImageFiles",
                    "f_id": "5ec87c20aa3955a76895dd0d",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "file_info": {
                        "show_img": true
                    },
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5ec87c20aa3955a76895dd0d",
                    "max_value": "",
                    "min_value": "",
                    "name": "FILE2",
                    "names": {
                        "en": "FILE2",
                        "ja": "FILE2"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": false,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "LinkKEY": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": true,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "text",
                    "display_id": "LinkKEY",
                    "f_id": "5cd3bde184f4be5808a6b3a6",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5cd3bde184f4be5808a6b3a6",
                    "max_value": "",
                    "min_value": "",
                    "name": "リンクキー",
                    "names": {
                        "en": "Link Key",
                        "ja": "リンクキー"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 5,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "LookUP": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c",
                        "5ca5561484f4be19cc01d378",
                        "5ca5562084f4be19cc01d37a"
                    ],
                    "as_title": false,
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "dataType": "dslookup",
                    "display_id": "LookUP",
                    "dslookup_info": {
                        "dslookup_datastore_id": "5cc25d1e84f4be574418d580",
                        "dslookup_field_id": "5cfe3cc7aa39554fac8c1d0a",
                        "dslookup_project_id": "5c6363d984f4be7de0350445"
                    },
                    "f_id": "5ec0cdf5aa39551a401f6525",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5ec0cdf5aa39551a401f6525",
                    "max_value": "",
                    "min_value": "",
                    "name": "DB参照",
                    "names": {
                        "en": "LookUP",
                        "ja": "DB参照"
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
            "items": [
                {
                    "AutoNo": "21",
                    "Fld-BLoaNKjo": "A",
                    "Fld-NdC29Im0": "2016-01-01T00:00:00Z",
                    "Fld-d0g8UE7D": "X",
                    "Fld-r2uIjvTP": null,
                    "Fld-v8ezNQB9": "222",
                    "Fld-xjKEyppI": "新規",
                    "LinkKEY": "タスクE",
                    "created_at": "2019-05-09T05:43:04Z",
                    "created_by": "IMPORT",
                    "d_id": "5cd3bde184f4be40c092eca7",
                    "i_id": "5cd3bde884f4be40c092ecb8",
                    "labels": "",
                    "p_id": "5c6363d984f4be7de0350445",
                    "rev_no": "3",
                    "status_id": "5cd3bde284f4be5808a6b3ad",
                    "title": "タスクE",
                    "updated_at": "2020-05-13T02:45:12Z",
                    "updated_by": "5c5fa7aa84f4be4250aaee25"
                }
            ]
        },
        "見積依頼詳細_20190324_123051": {
            "d_id": "5c96facc84f4be55f8a04f6c",
            "ds_name": "見積",
            "display_id": "見積依頼詳細_20190324_123051",
            "fields": {
                "Fld-NtiB3bkj": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "text",
                    "display_id": "Fld-NtiB3bkj",
                    "f_id": "5c96fe0084f4befb08d1532a",
                    "fieldIndex": 10,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5c96fe0084f4befb08d1532a",
                    "max_value": "",
                    "min_value": "",
                    "name": "リンクKey",
                    "names": {
                        "en": "リンクKey",
                        "ja": "リンクKey"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "Fld-p4BHH7sY": {
                    "access_keys": [
                        "5c6363da84f4be7de035044a",
                        "5c6363da84f4be7de035044c"
                    ],
                    "as_title": false,
                    "autonum_info": {
                        "digit": 9,
                        "prefix": ""
                    },
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "autonum",
                    "display_id": "Fld-p4BHH7sY",
                    "f_id": "5c96fdc484f4befb08d15320",
                    "fieldIndex": 9,
                    "field_csv_name": "",
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5c96fdc484f4befb08d15320",
                    "max_value": "",
                    "min_value": "",
                    "name": "案件No",
                    "names": {
                        "en": "案件No",
                        "ja": "案件No"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "サプライヤー名": {
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "text",
                    "display_id": "サプライヤー名",
                    "f_id": "4593a16c-a72a-4edf-8014-9df53f62a274",
                    "fieldIndex": 2,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "4593a16c-a72a-4edf-8014-9df53f62a274",
                    "max_value": "",
                    "min_value": "",
                    "name": "サプライヤー名",
                    "names": {
                        "en": "サプライヤー名",
                        "ja": "サプライヤー名"
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
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "status",
                    "display_id": "ステータス",
                    "f_id": "4920f215-3efe-4f0c-b683-e9c17044f64c",
                    "fieldIndex": 0,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "4920f215-3efe-4f0c-b683-e9c17044f64c",
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
                "加工費": {
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "number",
                    "display_id": "加工費",
                    "f_id": "5542346a-d8f6-41fd-9801-802e47dc963f",
                    "fieldIndex": 3,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5542346a-d8f6-41fd-9801-802e47dc963f",
                    "max_value": "",
                    "min_value": "",
                    "name": "加工費",
                    "names": {
                        "en": "加工費",
                        "ja": "加工費"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "合計": {
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "number",
                    "display_id": "合計",
                    "f_id": "7f400294-6049-485d-87ba-2b28722b0a36",
                    "fieldIndex": 8,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "7f400294-6049-485d-87ba-2b28722b0a36",
                    "max_value": "",
                    "min_value": "",
                    "name": "合計",
                    "names": {
                        "en": "合計",
                        "ja": "合計"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "品目名": {
                    "as_title": true,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "text",
                    "display_id": "品目名",
                    "f_id": "4131d6d3-cc6c-4e5d-8e51-e3c3c400ee3c",
                    "fieldIndex": 1,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "4131d6d3-cc6c-4e5d-8e51-e3c3c400ee3c",
                    "max_value": "",
                    "min_value": "",
                    "name": "品目名",
                    "names": {
                        "en": "品目名",
                        "ja": "品目名"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 1,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "材料費": {
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "number",
                    "display_id": "材料費",
                    "f_id": "a370ba78-97b8-46f5-9164-6c175d7f3fab",
                    "fieldIndex": 4,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "a370ba78-97b8-46f5-9164-6c175d7f3fab",
                    "max_value": "",
                    "min_value": "",
                    "name": "材料費",
                    "names": {
                        "en": "材料費",
                        "ja": "材料費"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "見積もり回数": {
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "text",
                    "display_id": "見積もり回数",
                    "f_id": "247bca02-36b9-4cb7-88b3-b9e6ca01955d",
                    "fieldIndex": 6,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "247bca02-36b9-4cb7-88b3-b9e6ca01955d",
                    "max_value": "",
                    "min_value": "",
                    "name": "見積もり回数",
                    "names": {
                        "en": "見積もり回数",
                        "ja": "見積もり回数"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "見積回答日": {
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "text",
                    "display_id": "見積回答日",
                    "f_id": "757d27c9-c5c2-497f-8615-7cb012778123",
                    "fieldIndex": 7,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "757d27c9-c5c2-497f-8615-7cb012778123",
                    "max_value": "",
                    "min_value": "",
                    "name": "見積回答日",
                    "names": {
                        "en": "見積回答日",
                        "ja": "見積回答日"
                    },
                    "p_id": "5c6363d984f4be7de0350445",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false,
                    "w_id": "5c5fa7da84f4be4250aaee27"
                },
                "運賃": {
                    "as_title": false,
                    "d_id": "5c96facc84f4be55f8a04f6c",
                    "dataType": "number",
                    "display_id": "運賃",
                    "f_id": "c80a4da3-c331-4c08-a240-c038795b8c17",
                    "fieldIndex": 5,
                    "field_csv_name": "",
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "c80a4da3-c331-4c08-a240-c038795b8c17",
                    "max_value": "",
                    "min_value": "",
                    "name": "運賃",
                    "names": {
                        "en": "運賃",
                        "ja": "運賃"
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
            "items": []
        }
    }
}
```

##### 画面IDを利用しない場合

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/items/:item-id/links/:linked-datastore-id
```

**URL Params**

```text
datastore-id : 関連元のデータストアID
item-id  :  アイテムのID
linked-datastore-id  :  関連先のデータストアID
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/items/58cd1e5bfbfcba2ebcaf0b1e/links/58cbf6cbfbfcba78dc71228d
```

**Response Sample**

```javascript
{
 "datastore_id": "5cc25d1e84f4be574418d580",
  "fields": {
    "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": {
      "id": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
      "f_id": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "重要度",
      "names": {
        "en": "重要度",
        "ja": "重要度"
      },
      "display_id": "重要度",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 5,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "3e9a47e1-ec41-477a-8b18-f324c67d9116": {
      "id": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
      "f_id": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "担当者",
      "names": {
        "en": "担当者",
        "ja": "担当者"
      },
      "display_id": "担当者",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 2,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": {
      "id": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
      "f_id": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "開始日",
      "names": {
        "en": "開始日",
        "ja": "開始日"
      },
      "display_id": "開始日",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 3,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "5cc4dbb284f4be926c491d96": {
      "id": "5cc4dbb284f4be926c491d96",
      "f_id": "5cc4dbb284f4be926c491d96",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "Num1",
      "names": {
        "en": "Num1",
        "ja": "Num1"
      },
      "display_id": "Fld-fjpeoxrY",
      "dataType": "number",
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
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "num_info": {
        "prefix": "Code:",
        "suffix": "",
        "no_comma": true
      }
    },
    "5cc4dbc084f4be926c491d97": {
      "id": "5cc4dbc084f4be926c491d97",
      "f_id": "5cc4dbc084f4be926c491d97",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "Num2",
      "names": {
        "en": "Num2",
        "ja": "Num2"
      },
      "display_id": "Fld-xGx9u6A2",
      "dataType": "number",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 7,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ]
    },
    "5cc4dbcd84f4be926c491d98": {
      "id": "5cc4dbcd84f4be926c491d98",
      "f_id": "5cc4dbcd84f4be926c491d98",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "Calc",
      "names": {
        "en": "Calc",
        "ja": "Calc"
      },
      "display_id": "Fld-fAcrbFfs",
      "dataType": "number",
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
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "num_info": {
        "prefix": "\\",
        "suffix": "yen",
        "no_comma": false
      }
    },
    "5cc4dbf484f4be926c491d99": {
      "id": "5cc4dbf484f4be926c491d99",
      "f_id": "5cc4dbf484f4be926c491d99",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "This is a Label",
      "names": {
        "en": "This is a Label",
        "ja": "This is a Label"
      },
      "display_id": "Fld-XbOD2IvT",
      "dataType": "label",
      "search": false,
      "show_list": false,
      "as_title": false,
      "status": false,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ]
    },
    "5cc8fa5484f4be926c491d9a": {
      "id": "5cc8fa5484f4be926c491d9a",
      "f_id": "5cc8fa5484f4be926c491d9a",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "計算式フィールド",
      "names": {
        "en": "計算式フィールド",
        "ja": "計算式フィールド"
      },
      "display_id": "Fld-1hfacFJP",
      "dataType": "calc",
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
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "calc_info": {
        "formula": "{Fld-xGx9u6A2}   /   {Fld-fAcrbFfs}+{Fld-xGx9u6A2}",
        "calc_target_fields": [
          "5cc4dbc084f4be926c491d97",
          "5cc4dbcd84f4be926c491d98"
        ],
        "prefix": "\\",
        "suffix": "",
        "no_comma": false
      }
    },
    "5cda5ac384f4bec92c8b8d03": {
      "id": "5cda5ac384f4bec92c8b8d03",
      "f_id": "5cda5ac384f4bec92c8b8d03",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "NoCalc",
      "names": {
        "en": "NoCalc",
        "ja": "NoCalc"
      },
      "display_id": "Fld-7ANOlTq4",
      "dataType": "calc",
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
      "hideOnInput": false,
      "access_keys": [
        "5c6363da84f4be7de035044a",
        "5c6363da84f4be7de035044c",
        "5ca5561484f4be19cc01d378",
        "5ca5562084f4be19cc01d37a"
      ],
      "calc_info": {
        "formula": "",
        "calc_target_fields": [],
        "prefix": "",
        "suffix": "",
        "no_comma": false
      }
    },
    "6f5779f7-6d34-46ce-afd1-9e83c77260b9": {
      "id": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
      "f_id": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "完了予定日",
      "names": {
        "en": "完了予定日",
        "ja": "完了予定日"
      },
      "display_id": "完了予定日",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": false,
      "fieldIndex": 4,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "a38850be-4fb9-4025-a297-4c500c793716": {
      "id": "a38850be-4fb9-4025-a297-4c500c793716",
      "f_id": "a38850be-4fb9-4025-a297-4c500c793716",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "ステータス",
      "names": {
        "en": "ステータス",
        "ja": "ステータス"
      },
      "display_id": "ステータス",
      "dataType": "status",
      "search": true,
      "show_list": true,
      "as_title": false,
      "status": true,
      "fieldIndex": 0,
      "title_order": 0,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    },
    "f99f6b08-dd8b-4816-adc7-9b28555a1e93": {
      "id": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
      "f_id": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
      "w_id": "5c5fa7da84f4be4250aaee27",
      "p_id": "5c6363d984f4be7de0350445",
      "d_id": "5cc25d1e84f4be574418d580",
      "field_csv_name": "",
      "name": "タスク",
      "names": {
        "en": "タスク",
        "ja": "タスク"
      },
      "display_id": "タスク",
      "dataType": "text",
      "search": true,
      "show_list": true,
      "as_title": true,
      "status": false,
      "fieldIndex": 1,
      "title_order": 1,
      "full_text": false,
      "unique": false,
      "min_value": "",
      "max_value": "",
      "hideOnInput": false
    }
  },

  "column_settings": [
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "label",
      "displayID": "Fld-XbOD2IvT",
      "displayName": "This is a Label",
      "dslookup_info": null,
      "field": "5cc4dbf484f4be926c491d99",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "This is a Label",
        "ja": "This is a Label"
      },
      "num_info": null,
      "order": 6,
      "search": false,
      "show_list": false,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": {
        "formula": "{Fld-xGx9u6A2}   /   {Fld-fAcrbFfs}+{Fld-xGx9u6A2}",
        "calc_target_fields": [
          "5cc4dbc084f4be926c491d97",
          "5cc4dbcd84f4be926c491d98"
        ],
        "prefix": "\\",
        "suffix": "",
        "no_comma": false
      },
      "dataType": "calc",
      "displayID": "Fld-1hfacFJP",
      "displayName": "計算式フィールド",
      "dslookup_info": null,
      "field": "5cc8fa5484f4be926c491d9a",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "計算式フィールド",
        "ja": "計算式フィールド"
      },
      "num_info": null,
      "order": 7,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": {
        "formula": "",
        "calc_target_fields": [],
        "prefix": "",
        "suffix": "",
        "no_comma": false
      },
      "dataType": "calc",
      "displayID": "Fld-7ANOlTq4",
      "displayName": "NoCalc",
      "dslookup_info": null,
      "field": "5cda5ac384f4bec92c8b8d03",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "NoCalc",
        "ja": "NoCalc"
      },
      "num_info": null,
      "order": 8,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "number",
      "displayID": "Fld-fjpeoxrY",
      "displayName": "Num1",
      "dslookup_info": null,
      "field": "5cc4dbb284f4be926c491d96",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "Num1",
        "ja": "Num1"
      },
      "num_info": {
        "prefix": "Code:",
        "suffix": "",
        "no_comma": true
      },
      "order": 3,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "status",
      "displayID": "ステータス",
      "displayName": "ステータス",
      "dslookup_info": null,
      "field": "a38850be-4fb9-4025-a297-4c500c793716",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "ステータス",
        "ja": "ステータス"
      },
      "num_info": null,
      "order": 10,
      "search": true,
      "show_list": true,
      "statuses": [
        {
          "id": "5cc25d2584f4bed46001b75f",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75f",
          "name": "進行中"
        },
        {
          "id": "5cc25d2584f4bed46001b75e",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75e",
          "name": "未着手"
        },
        {
          "id": "5cc25d2584f4bed46001b75c",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75c",
          "name": "完了"
        },
        {
          "id": "5cc25d2584f4bed46001b75d",
          "color": "",
          "s_id": "5cc25d2584f4bed46001b75d",
          "name": "承認待ち"
        }
      ],
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "number",
      "displayID": "Fld-fAcrbFfs",
      "displayName": "Calc",
      "dslookup_info": null,
      "field": "5cc4dbcd84f4be926c491d98",
      "field_index": 0,
      "file_info": null,
      "names": {
        "en": "Calc",
        "ja": "Calc"
      },
      "num_info": {
        "prefix": "\\",
        "suffix": "yen",
        "no_comma": false
      },
      "order": 5,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": true,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "タスク",
      "displayName": "タスク",
      "dslookup_info": null,
      "field": "f99f6b08-dd8b-4816-adc7-9b28555a1e93",
      "field_index": 1,
      "file_info": null,
      "names": {
        "en": "タスク",
        "ja": "タスク"
      },
      "num_info": null,
      "order": 11,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "担当者",
      "displayName": "担当者",
      "dslookup_info": null,
      "field": "3e9a47e1-ec41-477a-8b18-f324c67d9116",
      "field_index": 2,
      "file_info": null,
      "names": {
        "en": "担当者",
        "ja": "担当者"
      },
      "num_info": null,
      "order": 1,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "開始日",
      "displayName": "開始日",
      "dslookup_info": null,
      "field": "46564f59-fbf4-40f0-a5a1-2edaee92a9c7",
      "field_index": 3,
      "file_info": null,
      "names": {
        "en": "開始日",
        "ja": "開始日"
      },
      "num_info": null,
      "order": 2,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "完了予定日",
      "displayName": "完了予定日",
      "dslookup_info": null,
      "field": "6f5779f7-6d34-46ce-afd1-9e83c77260b9",
      "field_index": 4,
      "file_info": null,
      "names": {
        "en": "完了予定日",
        "ja": "完了予定日"
      },
      "num_info": null,
      "order": 9,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "text",
      "displayID": "重要度",
      "displayName": "重要度",
      "dslookup_info": null,
      "field": "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0",
      "field_index": 5,
      "file_info": null,
      "names": {
        "en": "重要度",
        "ja": "重要度"
      },
      "num_info": null,
      "order": 0,
      "search": true,
      "show_list": true,
      "users_info": null
    },
    {
      "as_title": false,
      "autonum_info": null,
      "calc_info": null,
      "dataType": "number",
      "displayID": "Fld-xGx9u6A2",
      "displayName": "Num2",
      "dslookup_info": null,
      "field": "5cc4dbc084f4be926c491d97",
      "field_index": 7,
      "file_info": null,
      "names": {
        "en": "Num2",
        "ja": "Num2"
      },
      "num_info": null,
      "order": 4,
      "search": true,
      "show_list": true,
      "users_info": null
    }
  ],
  "items": [
    {
      "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": "高",
      "3e9a47e1-ec41-477a-8b18-f324c67d9116": "",
      "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": "",
      "5cc8fa5484f4be926c491d9a": null,
      "6f5779f7-6d34-46ce-afd1-9e83c77260b9": "",
      "_id": "5cc25d3584f4be574418d58b",
      "access_keys": [
        "5c5fa7da84f4be4250aaee29",
        "5c5fa7da84f4be4250aaee26"
      ],
      "created_at": "2019-04-26T01:21:57.008Z",
      "created_by": "IMPORT",
      "d_id": "5cc25d1e84f4be574418d580",
      "f99f6b08-dd8b-4816-adc7-9b28555a1e93": "H",
      "i_id": "5cc25d3584f4be574418d58b",
      "labeled_at": "2019-05-02T13:20:57.652Z",
      "labels": [
        {
          "c6934716-9bab-4f35-b2a5-aff9169d3a1a": "高"
        }
      ],
      "p_id": "5c6363d984f4be7de0350445",
      "rev_no": 2,
      "status_id": "5cc25d2584f4bed46001b75f",
      "title": "H",
      "updated_at": "2019-05-02T13:20:57.61Z",
      "updated_by": "5c5fa7aa84f4be4250aaee25"
    },
    {
      "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": "高",
      "3e9a47e1-ec41-477a-8b18-f324c67d9116": "",
      "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": "",
      "5cc8fa5484f4be926c491d9a": null,
      "6f5779f7-6d34-46ce-afd1-9e83c77260b9": "",
      "_id": "5cc25d3584f4be574418d58c",
      "access_keys": [
        "5c5fa7da84f4be4250aaee29",
        "5c5fa7da84f4be4250aaee26"
      ],
      "created_at": "2019-04-26T01:21:57.008Z",
      "created_by": "IMPORT",
      "d_id": "5cc25d1e84f4be574418d580",
      "f99f6b08-dd8b-4816-adc7-9b28555a1e93": "G",
      "i_id": "5cc25d3584f4be574418d58c",
      "labeled_at": "2019-05-02T13:20:56.403Z",
      "labels": [
        {
          "c6934716-9bab-4f35-b2a5-aff9169d3a1a": "高"
        }
      ],
      "p_id": "5c6363d984f4be7de0350445",
      "rev_no": 2,
      "status_id": "5cc25d2584f4bed46001b75c",
      "title": "G",
      "updated_at": "2019-05-02T13:20:56.366Z",
      "updated_by": "5c5fa7aa84f4be4250aaee25"
    },
    {
      "294c2cf8-c64c-4b0f-8d2d-4adaf64477e0": "高",
      "3e9a47e1-ec41-477a-8b18-f324c67d9116": "",
      "46564f59-fbf4-40f0-a5a1-2edaee92a9c7": "",
      "5cc4dbb284f4be926c491d96": 57007,
      "5cc4dbc084f4be926c491d97": 1233,
      "5cc4dbcd84f4be926c491d98": 1264,
      "5cc8fa5484f4be926c491d9a": 55608,
      "6f5779f7-6d34-46ce-afd1-9e83c77260b9": "",
      "_id": "5cc25d3584f4be574418d58d",
      "access_keys": [
        "5c5fa7da84f4be4250aaee29",
        "5c5fa7da84f4be4250aaee26"
      ],
      "created_at": "2019-04-26T01:21:57.008Z",
      "created_by": "IMPORT",
      "d_id": "5cc25d1e84f4be574418d580",
      "f99f6b08-dd8b-4816-adc7-9b28555a1e93": "F",
      "i_id": "5cc25d3584f4be574418d58d",
      "labeled_at": "2019-05-07T01:46:49.749Z",
      "labels": [
        {
          "c6934716-9bab-4f35-b2a5-aff9169d3a1a": "高"
        }
      ],
      "p_id": "5c6363d984f4be7de0350445",
      "rev_no": 18,
      "status_id": "5cc25d2584f4bed46001b75f",
      "title": "F",
      "updated_at": "2019-05-07T01:46:49.69Z",
      "updated_by": "5c5fa7aa84f4be4250aaee25"
    }
  ],
  "stateflowActions": [
    {
      "_id": "5cc25d2584f4bed46001b761",
      "a_id": "5cc25d2584f4bed46001b761",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 0,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_UPDATE",
      "operation": "2",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    },
    {
      "_id": "5cc25d2584f4bed46001b762",
      "a_id": "5cc25d2584f4bed46001b762",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 1,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_COPY",
      "operation": "4",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    },
    {
      "_id": "5cc25d2584f4bed46001b763",
      "a_id": "5cc25d2584f4bed46001b763",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 2,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_NEW",
      "operation": "1",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "5cc25d2584f4bed46001b75f",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    },
    {
      "_id": "5cc25d2584f4bed46001b764",
      "a_id": "5cc25d2584f4bed46001b764",
      "access_keys": [],
      "created_at": "2019-04-26T01:21:41.656Z",
      "d_id": "5cc25d1e84f4be574418d580",
      "description": "",
      "display_order": 3,
      "isOwnedBySystem": true,
      "is_status_action": false,
      "name": "DEFAULTS_FOR_IMPORTER.DEFAULT_ACTION_NAME_DELETE",
      "operation": "3",
      "p_id": "5c6363d984f4be7de0350445",
      "set_status": "",
      "slack_channels": [],
      "updated_at": "2019-04-26T01:21:41.656Z",
      "user_slack_channels": {},
      "w_id": "5c5fa7da84f4be4250aaee27"
    }
  ]
}
```
