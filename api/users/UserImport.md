
#### UserImport

ユーザーをインポート

**Description**

指定されたグループにユーザーをインポートする

**Method**

POST

**Request URL Format**

/api/v0/userimport

**Payload**

`Content-Type : application/form-data`

```javascript
{
  "current_workspace_id":"ユーザーをインポートする対象のワークスペースID", //必須
  "filename":"インポートする目的のCSVファイル名",　//必須 
  "file":"バイナリー型CSVファイル　, CSV ファイルのヘッダーはEmail, UserName,    Password,    GroupDisplayIDs,    RoleDisplayIDs,    IsDelete
" //必須
}
```

**Request Sample**

```text
POST https://api.xxx.com/api/v0/userimport
```

**Response Sample**

```javascript
{"error":null}
```
