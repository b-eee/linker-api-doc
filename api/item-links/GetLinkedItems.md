#### GetLinkedItems

関連アイテム一覧

**Description**

アイテムに関連するデータストアと、リンクされたアイテムの一覧を返す

利用用途に従って、2 週類の URL があります。

#####

- [(1) 画面 ID を利用する場合](#画面IDを利用する場合)
- [(2) 画面 ID を利用しない場合](#画面IDを利用しない場合)

**Method**

GET

##### 画面 ID を利用する場合

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
linked_p_id : 関連先のp_idを画面ID指定 linked_d_idと一緒に設定します
linked_d_id : 関連先のd_idを画面ID指定 指定すると、対象のデータストアのみに結果を絞りこみ出来ます。
use_display_id  : true を指定すると画面IDのmap形式で返される
include_lookups : true を指定すると関連Item内のデータベース参照型の参照先Itemが含まれる　（include_lookupsの詳細については、ItemList APIを参照）
return_number_value : true を指定すると、数値型データがNumberとして出力されます（defaultでは、数値は文字列("123")で返却される）
```

**Response Sample**

```text
GET https://api.xxx.com/api/v0/applications/APPNAME/datastores/DSNAME/items/links/5cbd75d984f4bef6c0ed8591
```

```javascript
{
    "has_error": false,
    "result": {
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
    }
}
```

##### 画面 ID を利用しない場合

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
GET https://api.xxx.com/api/v0/datastores/5cc25d1e84f4be574418d580/items/58cd1e5bfbfcba2ebcaf0b1e/links/58cbf6cbfbfcba78dc71228d
```

**Response Sample**

```javascript
{
    "has_error": false,
    "result": {
        "5f263b7628dc5c6af0b1206a": {
            "d_id": "5f263b7628dc5c6af0b1206a",
            "ds_name": "TestDB",
            "display_id": "TestDB",
            "fields": {
                "5f263b7628dc5c5dcc669033": {
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
                "5f263b7628dc5c5dcc669034": {
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
                "60158e6a28dc5c5264d96a3b": {
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
                    "5f263b7628dc5c5dcc669033": "サンプルデータ",
                    "5f263b7628dc5c5dcc669034": "ステータス１",
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
                    "5f263b7628dc5c5dcc669033": "サンプルデータ",
                    "5f263b7628dc5c5dcc669034": "ステータス２",
                    "60158e6a28dc5c5264d96a3b": "3",
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
        },
        "5f38b0afaa395581685afdf6": {
            "d_id": "5f38b0afaa395581685afdf6",
            "ds_name": "TODO関連",
            "display_id": "TODORelated",
            "fields": {
                "5f38b0afaa39558bfca29636": {
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
                },
                "5f38b0afaa39558bfca29637": {
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
                "5f38b0afaa39558bfca29638": {
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
                "5f38b0afaa39558bfca29639": {
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
                "5f38b0afaa39558bfca2963a": {
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
                "600a83b728dc5c3e9cd7e7df": {
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
                "600b054628dc5c4aa0e5209c": {
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
                }
            },
            "items": [
                {
                    "5f38b0afaa39558bfca29636": "タスクE",
                    "5f38b0afaa39558bfca29637": "X",
                    "5f38b0afaa39558bfca29638": "B",
                    "5f38b0afaa39558bfca29639": "完了",
                    "5f38b0afaa39558bfca2963a": "2015-12-31T15:00:00Z",
                    "600a83b728dc5c3e9cd7e7df": "3",
                    "600b054628dc5c4aa0e5209c": "3",
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
                    "5f38b0afaa39558bfca29636": "タスクB",
                    "5f38b0afaa39558bfca29637": "Y",
                    "5f38b0afaa39558bfca29638": "A",
                    "5f38b0afaa39558bfca29639": "受付",
                    "5f38b0afaa39558bfca2963a": "2015-12-31T15:00:00Z",
                    "600a83b728dc5c3e9cd7e7df": "0",
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
        }
    }
}
```
