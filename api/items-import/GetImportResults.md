
#### GetImportResults

データインポート結果の取得

**Description**

データインポートの処理結果を取得する

**Method**

GET

**Request Format**

```text
/api/v0/datastores/:datastore-id/import/:temp-datastore-id
```

**Params**

```text
temp-datastore-id  :  インポート処理時の結果ID
```

**Request Sample**

```text
GET https://api.xxx.com/api/v0/datastores/59bf3a310e2479145baba476/import/59706031bc29a9afa46b59eb
```

**Response Sample**

成功時

```text
なし
```

エラー時

```javascript
{
  "errors": [
    {
      "description": "Insert ERROR",
      "line": 2
    },
    {
      "description": "Update ERROR",
      "line": 3
    }
  ]
}
```
