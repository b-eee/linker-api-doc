#### AddGroupRoles

グループロール追加

**Description**

グループにロールを追加する（既存ロールは削除されない）

**Method**

PUT

**Request URL Format**

```text
/api/v0/grouproles/:group-id
```

**URL Params**

```text
group-id :  グループID
```

`Content-Type : application/json`

```javascript
{
  "group_roles":
  [
    {
      "app_id":"追加対象のアプリケーションディスプレイＩＤ-１",
      "role_id":"追加対象のロールディスプレイID-1"
    },
    {
      "app_id":"追加対象のアプリケーションデイスプレイＩＤ-２",
      "role_id":"追加対象のロールディスプレイID-2"
    }
  ]
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/grouproles/:group-id
```

**Response Sample**

```text
{} //空のオブジェクトが返ってくる
```
