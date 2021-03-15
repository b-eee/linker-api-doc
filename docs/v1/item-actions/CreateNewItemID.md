#### CreateNewItemID

新規アイテムID取得

**Description**

新規アイテムの入力フォームを表示する際に、あらかじめアイテムIDを取得する際に利用します。  
 取得したアイテムIDは、アイテム登録前に添付ファイルのアップロードすることが必要な場合に利用します。  
 このAPIで取得したitem\_idは、[PostNewAction](api-document_jp.md#PostNewAction) APIで新規アイテムを登録する際に利用します。

**Method**

POST

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/items/create-id
```

**URL Params**

```text
datastore-id    : データストアID
```

**Request Sample**

```text
POST https://api.xxx.com/api/v0/datastores/58bbaa27fbfcba6098746061/items/create-id
```

**Response Sample**

```javascript
{
    "item_id": "5a2647410e24792d87451e34"
}
```

