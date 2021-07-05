---
id: errors
title: エラーコード
slug: /errors
---


## 概要

本ドキュメントでは、Hexabase APIの基本的なエラーコードについて記載します。


### データ登録時のエラー

| エラーコード | エラー名称 | エラー理由 |
| :--- | :--- | :--- |
| INVALID_PARAMS |パラメータエラー |APIへ指定されたパラメータが正しくありません |
| ITEM_REV_CONFLICT　| 排他エラー　|他のユーザーが修正したデータを変更しようとしました |
| INVALID_VALUE　| 入力値エラー　|登録、更新のために指定されたデータが不正です |
| INVALID_SETTINGS　| 設定エラー　|設定値にエラーがあるため、処理を継続できません |
| NOT_FOUND　| 検索エラー　|指定された値が見つかりません |
| PROCESS_STOPPED　| 処理の中断　|処理が中断されました|
| SEARCH_TIMEOUT |タイムアウト |検索結果はタイムアウトしました |
| COUNT_TIMEOUT |タイムアウト |件数の取得はタイムアウトしました |
| TRANSACTION_ABORTED |ロールバック |データベースへの変更はロールバックされました |
| NO_PRIVILEGES　| 権限エラー　|ログインユーザに権限がありません
| SYSTEM_ERROR　| システムエラー|Hexabase内で発生したシステム例外エラーです　|
