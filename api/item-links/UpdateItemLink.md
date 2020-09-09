
#### UpdateItemLink

関連アイテムとのリンクを更新

**Description**

関連アイテムとのリンクを更新します

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/updatelink/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

```text
{
  "old_link_datastore_id": "DATABASE_2",　// 更新するリンク先データストアID
  "old_link_item_id": "5db16351ef2261da6f3b3560",　// 更新するリンク先アイテムID
  "new_link_datastore_id": "DATABASE_2",　// 追加するデータストアID
  "new_link_item_id": "5db16351ef2261da6f3b356b"　// 追加するアイテムID
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/updatelink/5d4c058baa39555618ac9e8b
```

**Response Sample**

```text
null
```
