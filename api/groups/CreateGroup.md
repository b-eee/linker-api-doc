#### CreateGroup

新規グループ作成

**Description**

新規でグループを指定したグループの配下に作成する

**Method**

POST

**Request URL Format**

```text
/api/v0/groups/:parent-group-id
```

**URL Params**

```text
"parent-group-id": 必須　指定したグループの配下に新規グループを作成
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "name" : "グループ名",  // 必須
  "display_id": "グループID"　 // 必須
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/groups/:parent-group-id
```

**Response Sample**

```javascript
{
    "group": {
        "access_key": "作成されたグループのアクセスキー",
        "created_at": "作成時間　年-月-日時刻",
        "display_id": "グループのDisplay_ID",
        "g_id": "作成されたグループID",
        "id": "作成されたグループID",
        "index": 0, //("int このグループレイヤーのindex位置")
        "is_root": false, //("bool グループツリー上最上位に位置される場合true")
        "name": "グループ名"
    },
    "groupTree_datastores_res": null　// ("配下にグループ有るかどうか")
}
```
