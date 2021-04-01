
#### UploadFile

添付ファイルフィールドにFileをアップロード

**Description**

添付ファイルフィールドにファイルをアップロードします

* アップロードされたファイルはStorageに保存されますが、Itemへは登録されません。
* 該当Itemへ登録するためには、Responseにふくまれる`file_id`を使って、アクション実行API（[CreateItemWithItemID](/docs/v0/item-actions/CreateItemWithItemID)や[ExecuteAction](/docs/v0/item-actions/ExecuteAction)など）をcallする必要があります。

**Method**

POST

**Request URL Format**

```text
/api/v0/items/:item-id/fields/:field-id/attachments
```

**URL Params**

```text
item-id          : アイテムID
field-id         : フィールドID
```

`Content-Type : multipart/form-data`

```text
application_id   : アプリケーションID
datastore_id     : データストアID
filename         : 添付ファイル名
file             : 添付ファイル
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/items/59ad2d8a0e247927638e761a/fields/58cc9253fbfcba88307142d1/attachments
```

* CSVファイル名:./testcsv/importapi/test.csv
* CSVファイルイメージ:

**Response Sample**

```javascript
{
    "file_id": "59af720c0e247958c7011a88"
}
```

