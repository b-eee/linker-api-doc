
#### GetItemHistories

履歴取得

**Description**

コメントやアクション実行の履歴を取得します。

（注意）
- このAPIを実行すると、実行したユーザーが取得した未読履歴は既読に変更されます。
- 表示件数の最大件数は100件までとなります。

**Method**

GET

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/items/:item-id/histories
```

**Query Params**

```javascript
"from_index" int // 取得履歴の最初履歴Index(From) 省略すると0がセットされます。
"to_index" int // 取得履歴の最後のIndex(To)。省略すると30がセットされます。  (To) - (From) が表示件数となります。表示件数の最大件数は100までとなります。
"from_datetime" Date // 取得履歴の検索From　UTC日付をISO 8601 に基づいたフォーマット[ YYYY-MM-DDThh:mm:ss.uuuZ ]にて指定. 例） new Date(Date.UTC(2020, 1, 2, 3, 4, 5)).toISOString(); 
"to_datetime" Date  // 取得履歴の検索範囲To UTC日付をISO 8601 に基づいたフォーマットにて指定
"exclude_action_history"  bool  //アクション実行による履歴を除く。コメントのみを取得する場合にtrueを指定
"exclude_comment_history" bool  //コメント投稿による履歴を除く。アクション実行履歴のみを取得する場合にtrueを指定
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/applications/AppID/datastores/DS-ID/items/59ad2d8a0e247927638e761a/histories
```

**Response Sample**

```javascript
{
    "unread": 2,  // 未読件数　（取得結果に関係なく、指定したItemの未読「全件数」がカウントされます）
    "histories": [
        {
            "history_id": "604384aa28dc5c20307cf4a2",
            "display_order": 0,
            "is_unread": true,  // 未読
            "comment": "コメント内容です",
            "created_at": "2021-03-06T13:33:30.29Z",
            "action_id": "5f38a11daa39556e74845a4b", // アクションによる履歴
            "action_name": "Update", // アクションによる履歴
            "transaction_id": "604384aa28dc5c20307cf498", // このIDをもとに、フィールドの変更履歴を取得できます（API準備中）
            "action_operation": "2",　// 更新系の場合 "2" 新規の場合 "1"が返されます
            "is_status_action": true, // ステータスに紐づくアクションの場合、trueがセットされます
            "datastore_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "user_id": "5fc9b4aaaa39557110839cf7",
            "username": "h.i",
            "email": "hi@xxx.com",
            "updated_by": "5fc9b4aaaa39557110839cf7", // 更新ユーザーID
            "updated_at": "2021-03-08T15:05:44.104Z", // 更新日
            "is_updated": true  // コメントが更新されていると、trueがセットされます
        },
        {
            "history_id": "6046212628dc5c0ca8114001",
            "display_order": 1,
            "is_unread": true, // 未読
            "comment": "コメント２",   // コメントのみの履歴の場合、action_id等のアクション情報が含まれません。
            "created_at": "2021-03-08T13:05:42.924Z",
            "datastore_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "user_id": "5fc9b4aaaa39557110839cf7",
            "username": "h.iwasaki",
            "email": "h.iwasaki@b-eee.com",
            "updated_at": "2021-03-08T13:05:42.924Z", // コメント更新がない場合、created_atと同じ
            "is_updated": false 
        },
        {
            "history_id": "6046211128dc5c0ca8113fff",
            "display_order": 2,
            "is_unread": false,
            "comment": "コメント",
            "created_at": "2021-03-08T13:05:21.922Z",
            "datastore_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "user_id": "5fc9b4aaaa39557110839cf7",
            "username": "h.iwasaki",
            "email": "h.iwasaki@b-eee.com",
            "updated_at": "2021-03-08T13:05:21.922Z",
            "is_updated": false 
        },
        {
            "history_id": "5f9441e328dc5c771c1f5a0a",
            "display_order": 3,
            "is_unread": false,
            "comment": "更新しました",
            "created_at": "2020-10-24T15:01:55.576Z",
            "action_id": "5f38a11daa39556e74845a4b",  // アクションによる履歴
            "action_name": "Update",　 // アクションによる履歴
            "transaction_id": "5f9441e328dc5c771c1f5a02", // アクションによる履歴
            "datastore_id": "5f38a11baa395581685afdb4",
            "datastore_name": "TODO-SAMPLE",
            "user_id": "5f25952c28dc5c55b463bc76",
            "username": "hi-hexabase",
            "email": "hi@hexabase.com",
            "updated_at": "2020-10-24T15:01:55.576Z",
            "is_updated": false 
        },
        {
            "history_id": "5f45294228dc5ca3a826371e",
            "display_order": 4,
            "is_unread": false,
            "comment": "新規作成しました",
            "created_at": "2020-08-25T15:07:46.335Z",
            "action_id": "5f38a11daa39556e74845a4d",　 // アクションによる履歴
            "action_name": "New",　　 // アクションによる履歴
            "datastore_id": "5f38a11baa395581685afdb4", // アクションによる履歴
            "datastore_name": "TODO-SAMPLE",
            "user_id": "5f25952c28dc5c55b463bc76",
            "username": "hi-hexabase",
            "email": "hi@hexabase.com",
            "updated_at": "2020-08-25T15:07:46.335Z",
            "is_updated": false 
        }
    ]
}
```

