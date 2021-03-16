
#### PostItemComment

コメント登録

**Description**

アイテムのコメントを編集します。

（注意）
- 自分の投稿したコメントのみ削除できます
- アプリケーションadminロール保持者は削除できます
- 現状、更新後のサーバからの通知イベントはありません。

**Method**

PUT

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/histories/:item-id/:history-id
```

**URL Params**

```text
  app-id: アプリケーションID（画面ID、または、システム内部ID p_id）
  datastore-id: データベースID（画面ID、または、システム内部ID d_id）
  item-id: コメント登録する対象Itemのitem_id
  history-id: 履歴ID
```

**Payload**

```text
{
  "comment" : 更新したいコメント
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/applications/AppName/datastores/DatabaseID/items/histories/5f38a121aa395581685afdc4/5fe370eb28dc5c41e836d4db
```

```text
{
    "comment" : "update text..."
}
```

**Response Sample**

成功
```javascript
null
```

権限がない場合、は403
```
{
    "error": "no privileges to update history"
}
```