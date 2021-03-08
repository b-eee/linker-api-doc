
#### PostItemComment

コメント削除

**Description**

アイテムのコメントを削除します

（注意）
- 自分の投稿したコメントのみ削除できます
- アプリケーションadminロール保持者は削除できます
- 現状、削除後の通知はされないため、画面表示時はAPIによる再取得が必要です

**Method**

DELETE

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
なし
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/applications/AppName/datastores/DatabaseID/items/histories/5f38a121aa395581685afdc4/5fe370eb28dc5c41e836d4db
```


**Response Sample**

成功
```javascript
null
```

権限がない場合、は403
```
{
    "error": "no privileges to delete history"
}
```