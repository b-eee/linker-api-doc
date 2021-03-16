---
id: getstart
title: 使い方
---

本ドキュメントでは、Hexabase APIの基本的な使い方を解説しています。

## バージョン

```text
Version 0
```

## 事前準備

- HexabaseプラットホームのベースURIを確認します。ベースURIは、テナントと環境(本番、ステージング)によって異なります
- Hexabaseプラットホームでユーザー登録します

## APIトークンの取得

- 本APIでは、ログインAPIでユーザーを指定します。各APIは、このユーザが持つ権限に従って実行されます
- 本APIを使用するには、最初にログインAPIを実行して、トークンを取得します
- ログインAPIを除く各APIの実行時には、HTTPリクエストヘッダに以下のようにトークンを指定します

```text
Authorization: Bearer XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX(発行したトークン)
```

## 画面ID (display_id)

- 画面ID(display_id)とは、Hexabase設定画面から指定可能なIDのことを指します。
- 画面ID(display_id)に対応しているAPIは、app-id, datastore-id, field-id など、URLやPayloadの一部に画面から入力したIDを指定できます。

- さらに詳しい内容は、[開発ガイド](https://b-eee.github.io/development_guide) > [機能](https://b-eee.github.io/development_guide/docs/features/index) > [ID による指定](https://b-eee.github.io/development_guide/docs/features/select_by_id)をご覧ください。
