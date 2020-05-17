#### GetUserQueries

よく使う一覧の取得

**Description**

ユーザーごとに記憶された利用可能な検索条件の一覧を取得する

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/queries
```

**URL Params**

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
```

**Query Params**

なし
**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/APP_NAME/queries
```

**Response Description**
- ユーザーが利用可能な「よく使う一覧」（検索条件の一覧）を返す

**Response Sample**

```javascript
[
    {
        "q_id": "5c7a323484f4be4ae0b9ae11",
        "name": "優先度A",
        "desc": "優先度が高い一覧",
        "display_order": 0,
        "conditions": [
            {
                "search_value": [
                    "5c69148a84f4be1f241fedeb"
                ],
                "data_type": "select",
                "id": "5c69148384f4be344c2ff0f3"
            }
        ],
        "projectId": "5c6363d984f4be7de0350445",
        "datastoreId": "5c69148384f4be1f241fedcd"
    },
    {
        "q_id": "5c7bc3e684f4be8478f89069",
        "name": "未完了案件",
        "desc": "完了されていないアイテム一覧",
        "display_order": 0,
        "conditions": [
            {
                "search_value": [
                    "5c6363ed84f4be7de0350456"
                ],
                "data_type": "status",
                "id": "5c6363ed84f4be7de0350453"
            }
        ],
        "projectId": "5c6363d984f4be7de0350445",
        "datastoreId": "5c6363ed84f4be2550bfe8ff"
    },
    {
        "q_id": "5cbb020784f4bebc88dd5646",
        "name": "特定ワードを含む検索",
        "desc": "",
        "display_order": 0,
        "conditions": [
            {
                "search_value": [
                    "T"
                ],
                "data_type": "text",
                "id": "27955aef-5d15-4762-ae3e-b96a1bf04275"
            }
        ],
        "projectId": "5c6363d984f4be7de0350445",
        "datastoreId": "5c6a657b84f4be1f241fee2b"
    }
]
```
