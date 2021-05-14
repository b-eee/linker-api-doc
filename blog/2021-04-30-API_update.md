---
title: API Update 2021-04-30
author: hx-support
author_title: hx-support
author_url: https://github.com/b-eee
tags: [API, web-ui, update, 2021]
---

### Web UI：ユーザープロファイル設定にユーザーIDを表示する

管理画面のユーザープロファイル設定に、ユーザーIDを表示するようになりました。

![ユーザープロファイル設定](/img/blogs/2021-04-30/user_profile.png)

### Web UI：項目名の代わりに、Display IDを表示する

管理画面のデータベース設定に、以下のオプションを追加しました。

- リストの項目と詳細画面に画面ID(display_id)を表示する
- リストの項目にアイテム情報(item_id, rev_no, updated_at, created_at)を表示する

![データベース設定](/img/blogs/2021-04-30/option_fields_display_id.png)

これにより、アイテム一覧とアイテム詳細で、項目名の代わりに、Display IDを表示できるようになりました。また、アイテム一覧に、アイテム情報(item_id, rev_no, updated_at, created_at)を表示できるようになりました。

![Display IDを表示](/img/blogs/2021-04-30/visible_fields_display_id.png)

### アイテムのアクセスキーをAPIから操作する

アイテムのアクセスキーが、APIから操作できるようになりました。

- APIからアクセスキーを追加/上書きする
- アクション設定は無視して、APIからのみaccessKeyを追加できる

#### 対象API

対象となるのは、以下のAPIです。

- [CreateItem](/docs/v0/item-actions/CreateItem)
- [UpdateItem](/docs/v0/item-actions/UpdateItem)
- [ExecuteAction](/docs/v0/item-actions/ExecuteAction)
- [ExecuteBulkAction](/docs/v0/item-actions/ExecuteBulkAction)

#### access_key_updatesオプション

|option|説明|
|:----|:----|
|overwrite|false(デフォルト)：既存のキーにaccessKeysを追加します。<br />true：アイテムのaccessKeysを上書きします。|
|ignore_action_settings|false(デフォルト)：設定から取得したキーに追加します。<br />true：ActionSettings(グループ、ロールの場合)とFieldSettings（ユーザーの場合）を無視します。|
|apply_related_ds|false(デフォルト)：指定アイテムに適用します。<br />true：すべてのrelated_ds_items（new、update）にkey_updatesを適用します|
|groups_to_publish|公開したいグループをdisplay_idで指定します。<br />[Important!!] ログインユーザーは、自分が持っているキーを追加できます。特権がない場合は、エラー結果でWARNINGを返しますが、有効なキーのみの追加に進みます|
|roles_to_publish|公開したいロールをdisplay_idで指定します。<br />[Important!!] ログインユーザーは、自分が持っているキーを追加できます。特権がない場合は、エラー結果でWARNINGを返しますが、有効なキーのみの追加に進みます|
|users_to_publish|公開したいユーザーのUserIDを指定します。ワークスペースに存在しない場合はエラーを返します。|

#### オプションの記述例

UpdateItem APIに記述した access_key_updates オプションの例を以下に示します。

```json
"access_key_updates": {		
    "overwrite": false,
    "ignore_action_settings": true,	
    "apply_related_ds": true,	
    "groups_to_publish": ["AAA", "BBB"],	
    "roles_to_publish": ["ADMIN", "Tester"],	
    "users_to_publish": ["5fc9b4aaaa39557110839cf7", "unknown-user"]	
},
```
