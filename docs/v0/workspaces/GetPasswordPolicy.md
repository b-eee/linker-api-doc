#### GetPasswordPolicy

現在ワークスペースのパスワードポリシーを取得します

**Description**

- 指定したワークスペースに設定されたパスワードポリシー情報を取得します。
- ワークスペースにアクセスできないユーザは利用できません（403:Forbidden）

**Method**

GET

**Request URL Format**

```text
/api/v0/workspaces/:workspace-id/password-policy
```

**URL Params**

```text
workspace-id　取得したいワークスペースIDを指定
```

**Query Params**

```text
なし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/workspaces/58ca3597cce5fe3ea0a42fa8/password-policy
```

**Response Sample**

```javascript
{
    "use_expired_day": false,　// パスワード有効期限の利用可否
    "use_lockout_count": false,　// パスワードロックの利用可否
    "use_lockout_time": false,　// パスワードロック時間の利用可否
    "use_min_length": false,　　// パスワード最小文字数の利用可否
    "use_pattern_check": false,　// パスワードの複雑性チェックの利用可否
    "use_same_limit": false,　// パスワード失敗回数の利用可否
    "expired_day": 30,  // パスワード有効期限
    "lockout_count": 5, // パスワードロックされるまでの失敗回数
    "lockout_time": 5, // パスワードロック時間（分）
    "min_length": 6, // パスワードの最小文字数
    "pattern_check_type": 0, // パスワードチェックパターン (下記参照)
    "same_limit": 2
}
```

#### パスワードチェックパターン
```
- 0: "パスワードにスペースを使用できません"
- 1: "英・数字両方を含める必要があります"
- 2: "字、数字、および特殊文字（!#$%-_=+<>のいずれか）を含める必要があります"
```

**Errors**
- ログインユーザーが、指定したワークスペースを利用できない場合は403エラーとなります
