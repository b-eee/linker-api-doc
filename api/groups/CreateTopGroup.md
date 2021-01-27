#### CreateTopGroup

新規グループ作成\(第1階層\)

**Description**

グループの第1階層に、新しいグループを登録します。登録したグループは、ツリーの直下に配置されます。

**Method**

POST

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/groups
```

**URL Params**

```text
workspace-id    : ワークスペースID
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "name": "グループ名",
  "display_id": "グループを識別するID（組織コードなど）"
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups
```

**Response Sample**

```javascript
{
    "group": {
        "name": "グループ名"
        "id": "59bf3b300e24791418da1aa1",
        "g_id": "59bf3b300e24791418da1aa1",
        "access_key": "59bf3b300e24791418da1aa2",
        "display_id": "グループを識別するID（組織コードなど）",
        "created_at": "2017-09-18T12:19:12.007119961+09:00",
    }
}
```