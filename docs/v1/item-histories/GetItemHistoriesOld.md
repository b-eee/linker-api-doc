
#### GetItemHistoriesOld

履歴取得

**Description**

コメントやアクション実行の履歴を取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/datastores/:datastore-id/items/:item-id/histories
```

**Params**

```text
from_item_index : 最新コメントから何番目を取得するか、を指定
to_item_index : 最新コメントから何番目まで取得するか、を指定
```
（例）
1ページ目の取得
from_item_index=0
to_item_index=10

2ページ目の取得
from_item_index=10
to_item_index=20


**Request URL Sample**

最初の30件の更新コメントを取得します
```text
GET https://api.xxx.com/api/v0/datastores/58cbf6cbfbfcba78dc71228d/items/59ad2d8a0e247927638e761a/histories?from_item_index=0&to_item_index=30
```

**Response Sample**

```javascript
{
    "histories": [
        {
            "h_id": "59af71aa0e247958c7011a87",
            "user_id": "59ac9f980e2479264852594f",
            "i_id": "59ad2d8a0e247927638e761a",
            "history": {
                "user_id": "59ac9f980e2479264852594f",
                "history_id": "59af71aa0e247958c7011a87",
                "item_id": "59ad2d8a0e247927638e761a",
                "transaction_id": "59af71aa0e247958c7011a80",
                "comment": "更新しました",
                "datastore_id": "59ad2d890e247927638e7619",
                "workspace_id": "59ac9fac0e24792648525951",
                "action_id": "59ad2d8a0e2479348590c85f",
                "action_name": "次のステータスに進める",
                "post_mode": "ExcecuteAction",
                "created_at": "2017-09-06T12:55:22.409+09:00",
                "username": "user1",
                "email": "user1@example.com",
                "datastore_name": "データストア1",
                "media_link": "https://storage.googleapis.com/linker/pub/default.png",
                "display_order": 0
            }
        }
    ],
    "unread": 0
}
```

