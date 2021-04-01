#### CreateNewWorkspace

ワークスペースの新規作成

**Description**

新規ワークスペースを作成します。

**Method**

POST

**Request URL Format**

```text
/api/v0/workspaces
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "name": "ワークスペースの名前"　//必須
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/workspaces
```

**Response Sample**

```javascript
{
    w_id: "5d760ffc38c8950007b30680"  // 新規作成されたワークスペースID
}
```

管理者の設定により新規作成が許可されていない場合、または、作成権限がない場合は、エラーとなります。
- 403 : "Not permitted in the current workspace"  新規ワークスペース作成が許可されていません。
- 403 : "No privileges to create new workspace"　新規ワークスペースを作成するには、ワークスペース管理者である必要があります。

