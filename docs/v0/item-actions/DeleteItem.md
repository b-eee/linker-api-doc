
#### DeleteItem

アイテムの削除（DisplayIDの利用）

**Description**

指定したアイテムを削除します（Hexabase画面から入力したIDを指定）

**Method**

DELETE

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/delete/:item-id
```

**URL Params**

```text
app-id          : アプリケーションID（Hexabase画面から入力したIDまたは内部ID[p_id]を指定）
datastore-id    : データストアID（Hexabase画面から入力したIDまたは内部ID[d_id]を指定）
item-id         : 対象アイテムのID
```

**Payload**

（注意）
- パラメータ指定しない場合でも、空のJSON `{}`を指定する必要があります
- delete_linked_items : trueの場合は、削除対象のtarget_datastoresを指定する必要があります。
- target_datastoresには、画面IDまたはd_idを指定可能です。孫データベースなど、関連をたどって指定可能です。
- このAPIが削除可能な１アイテムに関連するアイテムの上限は`100件`です。100件を超えた場合、その関連アイテムは削除されません。

```javascript
{
  delete_linked_items : true,                                     // true : 関連したアイテムも削除
  target_datastores: [ "DATASTORE_A", "DATASTORE_B", ...] // delete_linked_items: trueの場合、削除する関連データストアの画面ID(またはd_id)を指定します。（同一アプリケーション内のみ指定可能）注意：指定しない場合は、削除されません。
}
```

**Request URL Sample**

```text
DELETE http://api.xxx.com/api/v0/applications/APPNAME/datastores/RESERVES/items/delete/5d4c058baa39555618ac9e8b

Payload (空のJSONを指定する必要があります)
{}
```

**Response Sample**

```javascript
{
    "error": null,
}
```
