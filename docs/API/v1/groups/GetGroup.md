#### GetGroup

グループ情報取得

**Description**

指定したグループ情報とその配下のグループ一覧を取得

**Method**

GET

**Request URL Format**

```text
/api/v0/groups/:group-id
```

* `:group-id` は省略可。省略すると、TOPグループの情報を返す。

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/groups
```

**Response Sample**

```javascript
{
    "error": "",
    "group": {
        "g_id": "親グループID",
        "group_id": "親グループのDISPLAY_ID",
        "name": "親グループ名",
        "index": 0　//("親グループ位置")
    },
    "children": [], //("配下グループのグループID")
    "count": 0 //（"親グループの配下数"）
}
```

**Request Sample2**

```text
GET https://api.xxx.com/api/v0/groups/5c5fd6c084f4be2574e2bcb2
```

**Response Sample2**

```javascript
{
    "error": "",
    "group": {
        "g_id": "親グループID",
        "group_id": "親グループのDISPLAY_ID",
        "name": "親グループ名",
        "index": 0 //("親グループ位置")
    },
    "children": [
        {
            "g_id": "配下グループID",
            "group_id": "配下グループのDISPLAY_ID",
            "name": "配下グループ名,　例：事業部A2",
            "index": 0 //("配下グループ位置")
        },
        {
            "g_id": "配下グループID",
            "group_id": "配下グループのDISPLAY_ID",
            "name": "配下グループ名,　例：事業部A2",
            "index": 1//("配下グループ位置")
        }
    ],
    "count": 2 //（"親グループの配下数"
}
```