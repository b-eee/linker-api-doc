

自動採番API

関連情報 > [採番APIによる自動採番について](https://b-eee.github.io/development_guide/docs/features/api_getautonumber)

## Description

データストア内の特定フィールドに対する、自動採番結果を取得する

## Method

GET

## Request URL Format

```text
/api/v0/applications/:app-id/datastores/:datastore-id/fields/:field-id/autonum
```

## URL Params

```text
app-id      : アプリケーションID（Hexabase画面から入力したIDを指定）
datastore-id    : データストアID（Hexabase画面から入力したIDを指定）
field-id    : 自動採番項目のフィールドID（Hexabase画面から入力したIDを指定）
```

## Query Params

```text
branch_key      : 枝番コードを指定（省略可能）
zero_padding    : 番号をゼロ埋めする　例） 1  ->  0001
digit           : 桁数を指定する 例）  5  ->  00001
```

## Request URL Sample

```text
GET https://api.xxx.com/api/v0/applications/APP_NAME/datastores/DS_NAME/fields/Branch-No/autonum?branch_key=SUB_&zero_padding=true&digit=3
```

## Response Description
- 自動採番フィールドに指定したプレフィックスの後に、branch_keyごとの番号を指定した形式で返す
- プレフィックスの指定は、Hexabase上のUIでフィールド設定で指定する

## Response Sample

例１
- 自動採番項目のプレフィックスを `PREFIX_`と指定(Hexabase UIにて)
- QueryParamに以下を指定
  - `branch_key=SUBCODE_`
  - `zero_padding=true`
  - `digit=3`

```json
{
    "has_error": false,
    "result": {
        "number": 4,
        "value": "PREFIX_SUBCODE_004"
    }
}
```

例２
- 自動採番項目のプレフィックス `A`と指定(Hexabase UIにて)
- QueryParamに以下を指定
  - `branch_key`は指定なし
  - `zero_padding=true`
  - `digit=5`

```json
{
    "has_error": false,
    "result": {
        "number": 1,
        "value": "A00001"
    }
}
```



**Errors**
- エラー発生時、以下のようにエラーが返ります。
- エラーコードは[こちら](/docs/errors)を参照ください。

#### 該当Fieldが見つかりません
- 指定したデータストア、フィールドIDに誤りがあるか、見つからない場合、エラーとなります。
```
HTTP 403(Bad Request)

{
    "errors": [
        {
            "description": "invalid fieldID in the datastore",
            "error": "could not find field for AutoNum1",
            "error_code": "INVALID_PARAMS",
            "error_level": "ERROR",
            "reference_id": "f_id:AutoNum1"
        }
    ],
    "has_error": true,
    "result": null
}
```

- 指定したフィールドはAutoNumber型である必要があります。そうでない場合、エラーとなります。
```
HTTP 403(Bad Request)
{
    "errors": [
        {
            "description": "invalid fieldID in the datastore",
            "error": "specified field[600a839528dc5c3e9cd7e7de] is not the auto number type",
            "error_code": "INVALID_PARAMS",
            "error_level": "ERROR",
            "reference_id": "f_id:600a839528dc5c3e9cd7e7de"
        }
    ],
    "has_error": true,
    "result": null
}
```