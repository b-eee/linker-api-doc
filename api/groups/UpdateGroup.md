#### UpdateGroup

グループの更新

**Description**

指定したグループ名を更新します。

**Method**

PUT

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/groups/:group-id
```

**URL Params**

```text
workspace-id    : ワークスペースID
group-id        : グループID
```

`Content-Type : application/json`

```javascript
{
  "name": "グループ名→new name",
  "display_id": "グループを識別するID（組織コードなど）"
}
```

**Request URL Sample**

```text
PUT https://api.xxx.com/api/v0/workspaces/582b26d7fb90a15e0c24ad80/groups/59bf3b300e24791418da1aa1
```

**Response Sample**

```text
null
```
