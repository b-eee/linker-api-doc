
#### PostItemComment

コメント登録

**Description**

アイテムにコメントを投稿します。コメントはアイテムの履歴へ投稿され、[GetItemHistories](api-document_jp.md#GetItemHistories)で取得できます。

**Method**

POST

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/items/histories
```

**URL Params**

```text
  "datastore-id": データベースID（システム内部ID d_id）
```

**Payload**

```text
{
  "project_id": アプリケーションID（p_id）,
  "item_id": データアイテムID(i_id),
  "comment" : 登録したいコメント
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/histories
```

```text
{
    "project_id": "5e5366474e128951e40b288b",
    "item_id": "5e53712e4e128936e84a623f",
    "comment" : "text..."
}
```

**Response Sample**

```javascript
null
```

