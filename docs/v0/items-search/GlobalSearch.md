
#### GlobalSearch

ワークスペース内のデータリソースに対して全文検索を行う

**Description**

指定したワード(query)に対して、全文検索(Full-text-search)を実行します。
フィールドの設定で、「全文検索の対象とする」チェックがONになっている場合のみ、検索対象となります。

**Method**

POST

**Request URL Format**

```text
/api/v0/globalsearch
```

**URL Params**

```text
(N/A)
```

**Payload**

```text
query               : 検索ワードを指定（必須）
category            : "items", "files", "histories" のいずれかを指定する。指定しない場合は、すべてが検索対象となる。
                      "items"         : Item内のデータを検索
                      "files"         : 添付ファイル内の文字を検索
                      "histories"     : Itemの履歴コメントを検索
app_id              : 該当アプリケーションのみを検索対象としたい場合に、アプリケーションIDを指定
datastore_id        : 該当データベースのみを検索対象としたい場合に、データベースID（datastore-id）を指定
field_id            : 該当フィールドのみを検索対象としたい場合に、フィールドIDを指定
return_item_list    : trueを指定すると、該当したItemに対して、[ItemList](/docs/v0/items/ItemList) で検索した結果を返却する
item_search_params  : [ItemList](/docs/v0/items/ItemList) の絞込条件や、ソート、ページネーションパラメータを指定可能
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/globalsearch
```


##### Payload sample
```javascript
{
    "query": "タスクX",
    "category": "items",
    "app_id": "TestApp",
    "datastore_id": "TODO-SAMPLE",
    "field_id": "Assignee",
    "return_item_list": true,
    "item_search_params": {
        "page": 1, 
        "per_page" : 100,
        "sort_fields" : [{ "id" :"ID", "order": "desc" }]
    }
}
```

**Response Sample**
"return_item_list": falseの場合
```javascript
{
    "search_result": [ 
        {
            "category": "items",
            "d_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "f_id": "5f38a11baa39556e74845a39",
            "highlight_value": {
                "value": [
                    "<em class='searched_em'>X</em>"   // hitした文章の前後を含めたハイライト値が返ります
                ]
            },
            "i_id": "5f38a121aa395581685afdc0",
            "p_id": "5f25956528dc5c55b463bc7b",
            "project_name": "TestApp",
            "title": "TaskE",
            "w_id": "5f25956428dc5c55b463bc78"
        },
        {
            "category": "items",
            "d_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "f_id": "5f38a11baa39556e74845a39",
            "highlight_value": {
                "value": [
                    "<em class='searched_em'>X</em>"
                ]
            },
            "i_id": "5f38a121aa395581685afdc1",
            "p_id": "5f25956528dc5c55b463bc7b",
            "project_name": "TestApp",
            "title": "TaskD",
            "w_id": "5f25956428dc5c55b463bc78"
        }
    ]
}
```


"return_item_list": trueの場合
```javascript
{
    "item_list": {
        "items": [
            {
                "Assignee": "X",
                "AutoNum1": "PREFIX_6",
                "Category": "A",
                "Checkbox": "A",
                "DueDate": "2015-12-31T15:00:00Z",
                "LU2": null,
                "Lookup1": "bbb",
                "Num1": "5",
                "Num2": "12",
                "Radio": "B",
                "Status": "Closed",
                "Title": "TaskE",
                "Total": "17",
                "created_at": "2020-08-16T02:59:45Z",
                "created_by": "IMPORT",
                "d_id": "5f38a11baa395581685afdb4",
                "i_id": "5f38a121aa395581685afdc0",
                "p_id": "5f25956528dc5c55b463bc7b",
                "rev_no": "8",
                "status_id": "5f38a11baa39556e74845a3e",
                "title": "TaskE",
                "unread": "0",
                "updated_at": "2021-04-27T06:59:27Z",
                "updated_by": "5f25952c28dc5c55b463bc76"
            },
            {
                "Assignee": "X",
                "Category": "B",
                "Checkbox": "B",
                "DueDate": "2015-12-31T15:00:00Z",
                "Status": "In Review",
                "Title": "TaskD",
                "User": "hi-hexabase",
                "created_at": "2020-08-16T02:59:45Z",
                "created_by": "IMPORT",
                "d_id": "5f38a11baa395581685afdb4",
                "i_id": "5f38a121aa395581685afdc1",
                "p_id": "5f25956528dc5c55b463bc7b",
                "rev_no": "4",
                "status_id": "5f38a11baa39556e74845a41",
                "title": "TaskD",
                "unread": "0",
                "updated_at": "2020-09-30T14:04:30Z",
                "updated_by": "5f25952c28dc5c55b463bc76"
            }
        ],
        "totalItems": 2
    },
    "search_result": [
        {
            "category": "items",
            "d_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "f_id": "5f38a11baa39556e74845a39",
            "highlight_value": {
                "value": [
                    "<em class='searched_em'>X</em>"
                ]
            },
            "i_id": "5f38a121aa395581685afdc0",
            "p_id": "5f25956528dc5c55b463bc7b",
            "project_name": "TestApp",
            "title": "TaskE",
            "w_id": "5f25956428dc5c55b463bc78"
        },
        {
            "category": "items",
            "d_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "f_id": "5f38a11baa39556e74845a39",
            "highlight_value": {
                "value": [
                    "<em class='searched_em'>X</em>"
                ]
            },
            "i_id": "5f38a121aa395581685afdc1",
            "p_id": "5f25956528dc5c55b463bc7b",
            "project_name": "TestApp",
            "title": "TaskD",
            "w_id": "5f25956428dc5c55b463bc78"
        }
    ]
}
```

データがヒットしなかった場合
```
{
    "search_result": []
    "item_list": {
        "items": [],
        "totalItems": 0
    }
}
```