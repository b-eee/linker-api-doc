
#### AddItemLink

関連アイテムとのリンクを追加（DisplayIDの利用）

**Description**

関連アイテムとのリンクを追加します

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/addlink/:item-id
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
    "link_datastore_id": "DATABASE_2",  // データストアID（Hexabase画面から入力したIDを指定）
    "link_item_id": "5d4c055eaa39555618ac9e6a" // 追加するアイテムID
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/addlink/5d4c058baa39555618ac9e8b
```

**Response Sample**

```text
null
```
