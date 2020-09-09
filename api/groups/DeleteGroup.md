#### DeleteGroup

グループを削除

**Description**

指定したグループ名を削除します

**Method**

DELETE

**Request URL Format**

```text
/api/v0/groups/:group-id
```

**URL Params**

```text
group-id        : グループID
```

`Content-Type : application/json`

```javascript
{
  "workspace-id": "グループ名→new name",
  "group-id": "グループを識別するID（組織コードなど）"
}
```

**Request URL Sample**

```text
DELETE https://api.xxx.com/api/v0/groups/59bf3b300e24791418da1aa1
```

**Response Sample**

```text
null
```
