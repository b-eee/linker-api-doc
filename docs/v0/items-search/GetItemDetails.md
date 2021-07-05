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
use_display_id        : true を指定すると、画面IDを利用した結果で返される。（format="map"が適用される）
include_linked_items  : true を指定すると、関連アイテム一覧データを含む。use_display_id=true または format=mapの場合は、画面IDの形式で返される
include_lookups　　　　: true を指定すると、データベース参照型Itemのデータまで含まれる
return_number_value   : 関連Itemやデータベース参照詳細がある場合(include_linked_items:true, または include_lookups:trueの場合)にtrue を指定すると、数値型データがNumberとして出力されます（defaultでは、関連アイテムの数値は文字列("123")で返却される）
```

**Request URL Sample**


**Response Sample**

(1) 画面ID利用（use_display_id=true)指定、(関連アイテム一覧をふくまない）

```text
GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/DSNAME/items/details/5cd3bde884f4be40c092ecb8?format=map&include_linked_items=true
```
```javascript
{
    "title": "TaskA2233",
    "rev_no": 20,
    "field_values": {
        "Assignee": {
            "field_id": "Assignee",
            "field_name": "担当",
            "dataType": "text",
            "value": "X223322323",
            "sizeX": 6,
            "sizeY": 1,
            "col": 0,
            "row": 2
        },
        "AutoNum1": {
            "field_id": "AutoNum1",
            "field_name": "AutoNumber1",
            "dataType": "autonum",
            "value": "PREFIX_1",
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 4
        },
        "Category": {
            "field_id": "Category",
            "field_name": "カテゴリ",
            "dataType": "select",
            "value": "OptionA",
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 1
        },
        "Checkbox": {
            "field_id": "Checkbox",
            "field_name": "Checkbox",
            "dataType": "checkbox",
            "value": [
                "CCCCC",
                "AAAAA"
            ],
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 3
        },
        "DateTime": {
            "field_id": "DateTime",
            "field_name": "DateTime",
            "dataType": "datetime",
            "value": "2020-12-24T23:59:59Z",
            "sizeX": 5,
            "sizeY": 1,
            "col": 5,
            "row": 4
        },
        "DueDate": {
            "field_id": "DueDate",
            "field_name": "期限",
            "dataType": "date",
            "value": "2020-12-24T03:00:00Z",
            "sizeX": 5,
            "sizeY": 1,
            "col": 7,
            "row": 1
        },
        "Fld-6V4agAYX": {
            "field_id": "Fld-6V4agAYX",
            "field_name": "AttachedFileA",
            "dataType": "file",
            "value": null,
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 6
        },
        "Fld-cPfc91aX": {
            "field_id": "Fld-cPfc91aX",
            "field_name": "第1承認者",
            "dataType": "users",
            "value": [
                {
                    "access_key": "5f25956428dc5c55b463bc77",
                    "email": "hi@hexabase.com",
                    "media_link": "https://storage.googleapis.com/linker/pub/default.png",
                    "user_id": "5f25952c28dc5c55b463bc76",
                    "user_name": "h.iwasaki"
                },
                {
                    "access_key": "5fc9b4fbaa39557110839cf9",
                    "email": "h.iwasaki@b-eee.com",
                    "media_link": "https://storage.googleapis.com/linker/pub/default.png",
                    "user_id": "5fc9b4aaaa39557110839cf7",
                    "user_name": "h.iwasaki"
                }
            ],
            "sizeX": 5,
            "sizeY": 1,
            "col": 5,
            "row": 3
        },
        "LU2": {
            "field_id": "LU2",
            "field_name": "LU2",
            "dataType": "dslookup",
            "value": null,
            "sizeX": 5,
            "sizeY": 1,
            "col": 5,
            "row": 5
        },
        "Lookup1": {
            "field_id": "Lookup1",
            "field_name": "Lookup1",
            "dataType": "dslookup",
            "value": null,
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 5
        },
        "Status": {
            "field_id": "Status",
            "field_name": "ステータス",
            "dataType": "status",
            "value": "Closed",
            "sizeX": 0,
            "sizeY": 0,
            "col": 0,
            "row": 0
        },
        "Title": {
            "field_id": "Title",
            "field_name": "タイトル",
            "dataType": "text",
            "value": "TaskA2233",
            "sizeX": 10,
            "sizeY": 1,
            "col": 0,
            "row": 0
        }
    },
    "status_list": {
        "Assigned": {
            "status_id": "Assigned",
            "s_id": "5f38a11baa39556e74845a40",
            "status_name": "受付"
        },
        "Closed": {
            "status_id": "Closed",
            "s_id": "5f38a11baa39556e74845a3e",
            "status_name": "完了"
        },
        "InProgress": {
            "status_id": "InProgress",
            "s_id": "5f38a11baa39556e74845a42",
            "status_name": "作業中"
        },
        "InReview": {
            "status_id": "InReview",
            "s_id": "5f38a11baa39556e74845a41",
            "status_name": "確認"
        },
        "New": {
            "status_id": "New",
            "s_id": "5f38a11baa39556e74845a3f",
            "status_name": "新規"
        }
    },
    "status_actions": {
        "BackToInReview": {
            "action_id": "BackToInReview",
            "a_id": "5f38a11caa39556e74845a44",
            "action_name": "確認中へ戻す",
            "display_order": 0,
            "crud_type": "2",
            "next_status_id": "InReview"
        }
    },
    "item_actions": {
        "CopyItem": {
            "action_id": "CopyItem",
            "a_id": "5f38a11daa39556e74845a4c",
            "action_name": "コピーして新規登録する",
            "display_order": 0,
            "crud_type": "4"
        },
        "CreateItem": {
            "action_id": "CreateItem",
            "a_id": "5f38a11daa39556e74845a4d",
            "action_name": "新しいデータを登録する",
            "display_order": 0,
            "crud_type": "1"
        },
        "DeleteItem": {
            "action_id": "DeleteItem",
            "a_id": "5f38a11eaa39556e74845a4f",
            "action_name": "このデータを削除する",
            "display_order": 0,
            "crud_type": "3"
        },
        "UpdateItem": {
            "action_id": "UpdateItem",
            "a_id": "5f38a11daa39556e74845a4b",
            "action_name": "内容を更新する",
            "display_order": 0,
            "crud_type": "2"
        }
    },
    "status_order": [ // return status order
        "New",
        "Closed",
        "InReview",
        "Assigned",
        "InProgress"
    ],
    "status_action_order": [
        "BackToInReview"
    ],
    "item_action_order": [
        "UpdateItem",
        "CopyItem",
        "CreateItem",
        "DeleteItem"
    ]
}
```


(2) use_display_id: ture ＋  include_linked_items: true の例
```javascript
{
    "title": "Title sample AA",
    "rev_no": 10,
    "field_values": {
        "Assignee": {
            "field_id": "Assignee",
            "field_name": "担当",
            "dataType": "text",
            "value": "",
            "sizeX": 6,
            "sizeY": 1,
            "col": 0,
            "row": 2
        },
        "AutoNum1": {
            "field_id": "AutoNum1",
            "field_name": "AutoNumber1",
            "dataType": "autonum",
            "value": "PREFIX_4",
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 4
        },
        "Category": {
            （....省略）
        }
    },
    "status_list": {
        "Assigned": {
            "status_id": "Assigned",
            "s_id": "5f38a11baa39556e74845a40",
            "status_name": "受付"
        },
        "Closed": {
            "status_id": "Closed",
            "s_id": "5f38a11baa39556e74845a3e",
            "status_name": "完了"
        },
        （....省略）
        }
    },
    "status_actions": {
        "BackToNew": {
            "action_id": "BackToNew",
            "a_id": "5f38a11daa39556e74845a48",
            "action_name": "新規へ戻す",
            "display_order": 1,
            "crud_type": "2",
            "next_status_id": "New"
        },
        （....省略）
        }
    },
    "item_actions": {
        "CopyItem": {
            "action_id": "CopyItem",
            "a_id": "5f38a11daa39556e74845a4c",
            "action_name": "コピーして新規登録する",
            "display_order": 0,
            "crud_type": "4"
        },
        （....省略）
        }
    },
    "linked_items": {
        "TODORelated": {
            "d_id": "5f38b0afaa395581685afdf6",
            "ds_name": "TODO関連",
            "display_id": "TODORelated",
            "fields": {
                "Assignee": {
                    "as_title": false,
                    "dataType": "text",
                    "display_id": "Assignee",
                    "f_id": "5f38b0afaa39558bfca29637",
                    "fieldIndex": 0,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5f38b0afaa39558bfca29637",
                    "name": "担当",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false
                },
                "Category": {
                    "as_title": false,
                    "dataType": "select",
                    "display_id": "Category",
                    "f_id": "5f38b0afaa39558bfca29638",
                    "fieldIndex": 0,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5f38b0afaa39558bfca29638",
                    "name": "カテゴリ",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false
                },
                "DueDate": {
                    "as_title": false,
                    "dataType": "date",
                    "display_id": "DueDate",
                    "f_id": "5f38b0afaa39558bfca2963a",
                    "fieldIndex": 4,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5f38b0afaa39558bfca2963a",
                    "name": "期限",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false
                },
                "Fld-tSWAyL4f": {
                    "as_title": false,
                    "dataType": "text",
                    "display_id": "Fld-tSWAyL4f",
                    "f_id": "600a83b728dc5c3e9cd7e7df",
                    "fieldIndex": 5,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "600a83b728dc5c3e9cd7e7df",
                    "name": "ID",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": true
                },
                "LookupMySelf": {
                    "as_title": false,
                    "dataType": "dslookup",
                    "display_id": "LookupMySelf",
                    "dslookup_info": {
                        "dslookup_datastore_id": "5f38b0afaa395581685afdf6",
                        "dslookup_field_id": "600a83b728dc5c3e9cd7e7df",
                        "dslookup_project_id": "5f25956528dc5c55b463bc7b"
                    },
                    "f_id": "600b054628dc5c4aa0e5209c",
                    "fieldIndex": 0,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "600b054628dc5c4aa0e5209c",
                    "name": "LookupMySelf",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false
                },
                "Status": {
                    "as_title": false,
                    "dataType": "status",
                    "display_id": "Status",
                    "f_id": "5f38b0afaa39558bfca29639",
                    "fieldIndex": 3,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5f38b0afaa39558bfca29639",
                    "name": "ステータス",
                    "search": true,
                    "show_list": true,
                    "status": true,
                    "title_order": 0,
                    "unique": false
                },
                "Title": {
                    "as_title": true,
                    "dataType": "text",
                    "display_id": "Title",
                    "f_id": "5f38b0afaa39558bfca29636",
                    "fieldIndex": 0,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5f38b0afaa39558bfca29636",
                    "name": "タイトル",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 3,
                    "unique": false
                }
            },
            "items": [
                {
                    "Assignee": "X",
                    "Category": "B",
                    "DueDate": "2015-12-31T15:00:00Z",
                    "Fld-tSWAyL4f": "3",
                    "LookupMySelf": "3",
                    "Status": "完了",
                    "Title": "タスクE",
                    "created_at": "2020-08-16T04:06:14Z",
                    "created_by": "IMPORT",
                    "d_id": "5f38b0afaa395581685afdf6",
                    "i_id": "5f38b0b6aa395581685afdff",
                    "labels": "",
                    "links": "",
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "4",
                    "status_id": "5f38b0afaa39558bfca2963c",
                    "title": "タスクE",
                    "updated_at": "2021-01-22T17:10:37Z",
                    "updated_by": "5f25952c28dc5c55b463bc76"
                },
                {
                    "Assignee": "Y",
                    "Category": "A",
                    "DueDate": "2015-12-31T15:00:00Z",
                    "Fld-tSWAyL4f": "0",
                    "Status": "受付",
                    "Title": "タスクB",
                    "created_at": "2020-08-16T04:06:14Z",
                    "created_by": "IMPORT",
                    "d_id": "5f38b0afaa395581685afdf6",
                    "i_id": "5f38b0b6aa395581685afe02",
                    "labels": "",
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "2",
                    "status_id": "5f38b0afaa39558bfca2963e",
                    "title": "タスクB",
                    "updated_at": "2021-01-22T07:50:24Z",
                    "updated_by": "5f25952c28dc5c55b463bc76"
                }
            ]
        },
        "TestDB": {
            "d_id": "5f263b7628dc5c6af0b1206a",
            "ds_name": "TestDB",
            "display_id": "TestDB",
            "fields": {
                "Fld-DtS3DOcO": {
                    "as_title": true,
                    "dataType": "text",
                    "display_id": "Fld-DtS3DOcO",
                    "f_id": "5f263b7628dc5c5dcc669033",
                    "fieldIndex": 0,
                    "full_text": true,
                    "hideOnInput": false,
                    "id": "5f263b7628dc5c5dcc669033",
                    "name": "タイトル",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 2,
                    "unique": false
                },
                "Fld-cwCrrWGn": {
                    "as_title": false,
                    "dataType": "status",
                    "display_id": "Fld-cwCrrWGn",
                    "f_id": "5f263b7628dc5c5dcc669034",
                    "fieldIndex": 1,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "5f263b7628dc5c5dcc669034",
                    "name": "ステータス",
                    "search": true,
                    "show_list": true,
                    "status": true,
                    "title_order": 0,
                    "unique": false
                },
                "Lookup1": {
                    "as_title": false,
                    "dataType": "dslookup",
                    "display_id": "Lookup1",
                    "dslookup_info": {
                        "dslookup_datastore_id": "5f38b0afaa395581685afdf6",
                        "dslookup_field_id": "600a83b728dc5c3e9cd7e7df",
                        "dslookup_project_id": "5f25956528dc5c55b463bc7b"
                    },
                    "f_id": "60158e6a28dc5c5264d96a3b",
                    "fieldIndex": 0,
                    "full_text": false,
                    "hideOnInput": false,
                    "id": "60158e6a28dc5c5264d96a3b",
                    "name": "Lookup1",
                    "search": true,
                    "show_list": true,
                    "status": false,
                    "title_order": 0,
                    "unique": false
                }
            },
            "items": [
                {
                    "Fld-DtS3DOcO": "サンプルデータ",
                    "Fld-cwCrrWGn": "ステータス１",
                    "created_at": "2020-08-02T04:05:16Z",
                    "created_by": "IMPORT",
                    "d_id": "5f263b7628dc5c6af0b1206a",
                    "i_id": "5f263b7c28dc5c6af0b12075",
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "1",
                    "status_id": "5f263b7628dc5c5dcc669037",
                    "title": "サンプルデータ"
                },
                {
                    "Fld-DtS3DOcO": "サンプルデータ",
                    "Fld-cwCrrWGn": "ステータス２",
                    "Lookup1": "3",
                    "created_at": "2020-08-02T04:05:16Z",
                    "created_by": "IMPORT",
                    "d_id": "5f263b7628dc5c6af0b1206a",
                    "i_id": "5f263b7c28dc5c6af0b12076",
                    "labels": "",
                    "links": "",
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "2",
                    "status_id": "5f263b7628dc5c5dcc669036",
                    "title": "サンプルデータ",
                    "updated_at": "2021-01-30T16:51:55Z",
                    "updated_by": "5f25952c28dc5c55b463bc76"
                }
            ]
        }
    },
    "status_order": [
        "New",
        "Closed",
        "InReview",
        "Assigned",
        "InProgress"
    ],
    "status_action_order": [
        "MoveToInProgress",
        "BackToNew"
    ],
    "item_action_order": [
        "UpdateItem",
        "CopyItem",
        "CreateItem",
        "DeleteItem"
    ]
}
```

(3) データベース参照型を含む例  include_lookups=true

```javascript
{
    "title": "Title sample AA",
    "rev_no": 10,
    "field_values": {
        "Assignee": {
            "field_id": "Assignee",
            "field_name": "担当",
            "dataType": "text",
            "value": "",
            "sizeX": 6,
            "sizeY": 1,
            "col": 0,
            "row": 2
        },
        "AutoNum1": {
            "field_id": "AutoNum1",
            "field_name": "AutoNumber1",
            "dataType": "autonum",
            "value": "PREFIX_4",
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 4
        },
        "LU2": { // LookUp field 
            "field_id": "LU2",
            "field_name": "LU2",
            "dataType": "dslookup",
            "value": {
                "d_id": "5f38b0afaa395581685afdf6",
                "item_id": "5f38b0b6aa395581685afe02",
                "lookup_item": {  // added lookup_item
                    "Assignee": "Y",
                    "Category": "",
                    "DueDate": "2015-12-31T15:00:00Z",
                    "Fld-tSWAyL4f": "0",
                    "Status": "受付",
                    "Title": "タスクB",
                    "created_at": "2020-08-16T04:06:14Z",
                    "created_by": "IMPORT",
                    "d_id": "5f38b0afaa395581685afdf6",
                    "i_id": "5f38b0b6aa395581685afe02",
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "2",
                    "status_id": "5f38b0afaa39558bfca2963e",
                    "title": "タスクB",
                    "updated_at": "2021-01-22T07:50:24Z",
                    "updated_by": "5f25952c28dc5c55b463bc76"
                },
                "title": "タスクB"
            },
            "sizeX": 5,
            "sizeY": 1,
            "col": 5,
            "row": 5
        },
        "Lookup1": {
            "field_id": "Lookup1",
            "field_name": "Lookup1",
            "dataType": "dslookup",
            "value": {
                "d_id": "5f38b0afaa395581685afdf6",
                "item_id": "5f38b0b6aa395581685afdff",
                "lookup_item": { // added lookup_item
                    "Assignee": "X",
                    "Category": "",
                    "DueDate": "2015-12-31T15:00:00Z",
                    "Fld-tSWAyL4f": "3",
                    "LookupMySelf": "3",
                    "Status": "完了",
                    "Title": "タスクE",
                    "created_at": "2020-08-16T04:06:14Z",
                    "created_by": "IMPORT",
                    "d_id": "5f38b0afaa395581685afdf6",
                    "i_id": "5f38b0b6aa395581685afdff",
                    "lookup_items": { //  lookup_item in lookup_item (limited by 2 times per datastore)
                        "LookupMySelf": {
                            "Assignee": "X",
                            "Category": "B",
                            "DueDate": "2015-12-31T15:00:00Z",
                            "Fld-tSWAyL4f": "3",
                            "LookupMySelf": "5f38b0b6aa395581685afdff",
                            "Title": "タスクE",
                            "created_at": "2020-08-16T04:06:14Z",
                            "created_by": "IMPORT",
                            "d_id": "5f38b0afaa395581685afdf6",
                            "i_id": "5f38b0b6aa395581685afdff",
                            "p_id": "5f25956528dc5c55b463bc7b",
                            "rev_no": "4",
                            "status_id": "5f38b0afaa39558bfca2963c",
                            "title": "タスクE",
                            "updated_at": "2021-01-22T17:10:37Z",
                            "updated_by": "5f25952c28dc5c55b463bc76"
                        }
                    },
                    "p_id": "5f25956528dc5c55b463bc7b",
                    "rev_no": "4",
                    "status_id": "5f38b0afaa39558bfca2963c",
                    "title": "タスクE",
                    "updated_at": "2021-01-22T17:10:37Z",
                    "updated_by": "5f25952c28dc5c55b463bc76"
                },
                "title": "タスクE"
            },
            "sizeX": 5,
            "sizeY": 1,
            "col": 0,
            "row": 5
        },
        "Category": {
            （....省略）
        }
    },
    "status_list": {
        "Assigned": {
            "status_id": "Assigned",
            "s_id": "5f38a11baa39556e74845a40",
            "status_name": "受付"
        },
        "Closed": {
            "status_id": "Closed",
            "s_id": "5f38a11baa39556e74845a3e",
            "status_name": "完了"
        },
        （....省略）
        }
    },
    "status_actions": {
        "BackToNew": {
            "action_id": "BackToNew",
            "a_id": "5f38a11daa39556e74845a48",
            "action_name": "新規へ戻す",
            "display_order": 1,
            "crud_type": "2",
            "next_status_id": "New"
        },
        （....省略）
        }
    },
    "item_actions": {
        "CopyItem": {
            "action_id": "CopyItem",
            "a_id": "5f38a11daa39556e74845a4c",
            "action_name": "コピーして新規登録する",
            "display_order": 0,
            "crud_type": "4"
        },
        （....省略）
        }
    },

```

(4) 内部ID利用時　（パラメーターなし例）

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



**Errors**
- エラー発生時、以下のようにエラーが返ります。
- エラーコードは[こちら](/docs/errors)を参照ください。

#### 該当アイテムが見つかりません
- ItemIDに誤りがあるか、削除された、または該当Itemへのアクセス権限がない場合、いずれもNOT_FOUNDエラーが返ります。
```
HTTP404
{
    "error": "NOT_FOUND",
    "errors": [
        {
            "description": "item not found for i_id:5f38b027aa39558bfca29",
            "error": "not found",
            "error_code": "NOT_FOUND",
            "error_level": "ERROR",
            "reference_id": "5f38b027aa39558bfca29"
        }
    ]
}
```