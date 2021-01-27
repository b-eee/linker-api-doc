
#### DeleteItemLink

関連アイテムとのリンクを削除（DisplayIDの利用）

**Description**

関連アイテムとのリンクを削除します

**Method**

DELETE

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/dellink/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

```javascript
{
    "link_datastore_id": "DATABASE_2",
    "link_item_id": "5d4c055eaa39555618ac9e6a"  //省略すると、link_datastore_idに関連するすべてのItemのリンクが削除されます
}
```

**Request URL Sample**

```text
DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/DATABASE_1/items/dellink/5d4c058baa39555618ac9e8b
```

**Response Sample**

```javascript
null
```

