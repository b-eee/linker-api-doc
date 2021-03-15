
#### ImportItems

CSVデータインポート

**Description**

CSVファイルを指定して、データベース\(datastore\)を更新します。新規・更新・削除が可能です。

* キーフィールドに指定したフィールドに同値が存在する場合は更新され、存在しない場合は新規で登録されます。
* replace\_all\(bool\) オプションをtrue とすると、全データを削除し、指定したCSVデータで新規登録（洗い替え）します。指定しない場合に比べて高速に処理が可能です。
* append\(bool\)オプションをtrue とすると、既存データを残したまま、指定したCSVデータを追加登録します。指定しない場合に比べて高速に処理が可能です。
* CSV内に削除フィールド（項目名を`_delete_`とする）を用意し、削除するItemには`true`または`1`を指定すると、該当Itemが削除されます。
* CSV内のステータスを意味するフィールドは、CSVのヘッダー名を`_status_`として、データにはステータス名\(status\_idではありません\)を指定します。
* CSV内に公開グループ指定フィールド（項目名を`_group_id_`とする）を用意し、CSVデータにHexabaseで画面から定義された`グループID`を指定すると、該当Itemが指定したグループへ公開されます。（グループアクセスキーが付与される）

**Method**

POST

**Request URL Format**

```text
/api/v0/applications/:app-id/datastores/:datastore-id/import
```

**URL Params**

```text
app-id    : アプリケーションID(画面から指定したアプリケーションID、または、p_id)
datastore-id    : データストアID(画面から指定したデータストアID、または、d_id)
```

`Content-Type : multipart/form-data`

```text
filename            : インポートデータファイル名
file                ： インポートファイル
key_field_displayid : インポート先データストアのキー項目として利用するフィールドIDを指定します（この列をキーとして更新をかけます）
replace_all         ： false | true  指定されたCSVでデータを初期化（すべてのデータを削除して、新規追加されます）
append              ： false | true  指定されたCSVデータを既存のデータに追加します。別途、`条件を指定して削除API`と順番に実行することでデータを差分削除＆追加インポートが可能です。
overwrite_autonumber： false | true  インポート先の自動採番項目が初期化されてゼロスタートされてインポートされます。
validate            ： true | false  インポート時、データチェックを省略する。
```

**Request Sample**

```text
POST https://api.xxx.com/api/v0/applications/APP-ID/datastores/DATABASE-ID/import
```

CSVファイルイメージ

* CSVヘッダ行には、画面から指定したフィールドIDを指定します
* `key_field_displayid` 更新利用時は、キーフィールドと更新対象フィールド以外の列を省略したCSVを利用できます。（データベース内のすべてのフィールドを含む必要はありません）

  ```text
  TITLE,_status_,Field1,No,_delete_
  import1,ステータス１,A,001,0
  import2,ステータス２,B,002,0
  ```

  **Response**

  ```javascript
  {
   "temp_datastore_id": "5e58aa0fe4ecac3bd828aead",
   "stream_id": "saXjPYrkoJULrJTXHystqbXBqmUkILVbbBxvyXNsiJXKUdcROfTQOwGwCo6nqkwDDGjnUeiPtdkjkDeqgjquUOmcl0B6aM9q2V5526y2Xn3XmPZFsBSrooAwqTSAjWYr"
  }
  ```

  ```text
  temp_datastore_id : データインポート結果の取得で利用できるID
  stream_id : インポート経過をSubscribeするためのID
  ```

  * Subscribe仕様については、このドキュメントには記載していない（現在、ドキュメント準備中）


