
#### CreateItemWithItemID

item\_idを指定して新規アイテムを作成

**Description**

item\_idを指定して新規アイテムを作成します。  
 このAPIは、`アイテム登録前`に`添付ファイルのアップロードが必要`な場合で利用します。  
 新規に添付ファイルを持ったアイテムを作成するためには、あらかじめ添付ファイルの登録が必要です。添付ファイルの登録にはitem\_idが必要なため、item\_idを取得した後に添付ファイルを登録し、変換されたfile\_idを指定して、このAPIでアイテムを新規作成します。item\_idは、[CreateNewItemID API](/docs/v0/item-actions/CreateNewItemID)を利用して事前に取得できます。

**Method**

POST

**Request URL Format**

```text
/api/v0/items/:item-id/new-actions/:action-id
```

**URL Params**

```text
item-id      : アイテムID
action-id    : 新規作成アクションID（Payload内の`use_display_id`がtrueの場合、画面ID(設定で指定したID)を使用。falseの場合システム内部のID(a_id)を使用。
```

**Payload**

`Content-Type : application/json`

```json
{
  "item": {
    "項目ID1": "作成アイテム項目の値１",
    "項目ID2": "作成アイテム項目の値２"
    },
  "project_id": "プロジェクトID",
  "datastore_id": "データベースID",
  "use_display_id": true or false //trueの場合、item内の項目IDに画面IDを使用する。falseの場合システム内部のFieldID(f_id)を使用する。指定しない場合、デフォルトはfalse。
}
```

**Request Sample1**

```text
POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/new-actions/アクションID
```

```json
{
  "item": {
    "Locaton": "北極",
    "weather": "雪"
  },
  "project_id": "アプリケーションID",
  "datastore_id": "データベースD",
  "use_display_id": true
}
```

**Response Sample**

```text
null
```

**Request Sample2**

```text
POST https://api.xxx.com/api/v0/items/5a2671ef0e24794cb08e6200/new-actions/5e99e6a8aeae8e9af01ec366
```

```json
{
  "item": {
    "5e99e2e3aeae8e9af01ec35b": "北極",
    "5e99e690aeae8e9af01ec363": "雪"
  },
  "project_id": "5e99e696aeae8e9af01ec364",
  "datastore_id": "5e99e69caeae8e9af01ec365",
  "use_display_id": false
}
```

**Response Sample2**

```text
null
```
