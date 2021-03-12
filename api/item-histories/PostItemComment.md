
#### PostItemComment

コメント登録

**Description**

- アイテムにコメントを投稿します。コメントはアイテムの履歴へ投稿され、[GetItemHistories](GetItemHistories)で取得できます。
- 投稿は設定に従って他のユーザに通知され、他メンバーの未読履歴となります。

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id
```

**URL Params**

```text
  app-id: アプリケーションID（画面ID、または、システム内部ID p_id）
  datastore-id: データベースID（画面ID、または、システム内部ID d_id）
  item-id: コメント登録する対象Itemのitem_id
```

**Payload**

```text
{
  "comment" : 登録したいコメント
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/histories
```

```text
{
    "comment" : "text..."
}
```

**Response Sample**

```javascript
null
```

