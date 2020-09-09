
#### DeleteItemByConditions

条件を指定してアイテムを削除（DisplayIDの利用）

**Description**

検索条件を指定して、条件にマッチしたアイテムを削除します

**Method**

DELETE

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/delete
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
```

`Content-Type : application/json`

```javascript
{
  "conditions": [
    {
      "id": "FIELD_ABC",
      "search_value": [
        "abc"
      ],
      "exact_match": false, // 完全一致で検索 
    }
  ]
}
```

**Request URL Sample**

```text
DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/items/delete
```

**Response Sample**

```javascript
{
    "error": null,
}
```

