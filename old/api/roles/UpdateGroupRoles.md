#### UpdateGroupRoles

グループロール更新

**Description**

グループにひも付くロールをすべて削除し、新規付与（洗い変え）する

**Method**

POST

**Request URL Format**

```text
/api/v0/grouproles/:group-id
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "group_roles":
  [
    {
      "app_id":"アプリケーションディスプレイＩＤ-１",
      "role_id":"ロールディスプレイID-1"
    },
    {
      "app_id":"アプリケーションデイスプレイＩＤ-２",
      "role_id":"ロールディスプレイID-2"
    }
  ]
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/grouproles/:group-id
```

**Response Sample**

```javascript
{}   // empty object
```