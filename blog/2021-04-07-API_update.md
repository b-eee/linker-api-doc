---
title: API Update 2021-04-07
author: hx-support
author_title: hx-support
author_url: https://github.com/b-eee
tags: [API, update, 2021]
---

### 検索条件の強化

- 検索条件に指定可能なパラメータが増えました。（件数のみまたは一覧のみ取得の指定、タイムアウト値の指定）
- DataReportにもＯＲ検索、Nestした検索条件の指定が可能となりました。

ItemList, DataStore(filter)に対して、以下パラメータを指定が可能となりました
- return_count_only   : trueを指定すると、totalItemsのみ返却します。 itemsは[] (空配列)となります。
- omit_fields_data    : 結果から、fieldsの情報を含めません。（不要な通信データ量を省略できます）
- omit_total_items    : trueを指定すると、totalItemsをカウントしません（より高速になります） totalItemsは0となります。
- data_result_timeout_sec    : 一覧結果取得までのタイムアウト秒数を指定します。タイムアウトした場合は、itemsは[] (空配列)となります。
- total_count_timeout_sec    : 件数取得までのタイムアウト秒数を指定します。タイムアウトした場合は-1が返ります。

一般的にデータベース内の件数が多い場合、件数カウントに時間がかかります。
対象件数が多く、タイムアウトした場合に画面からの絞込を促すなど、ＵＩ上でのコントロールを可能とするための強化となります。

### データレポートで、一覧結果に関連Item情報(i_id, rev_no)を含める対応
- include_links : true を指定すると、Itemに関連するアイテムの情報(i_id, rev_no)を取得できるようになりました。
