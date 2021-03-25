---
slug: API
title: API Update 2021-03-25
author: iwask
author_title: iwask
author_url: https://github.com/iwask
tags: [API, update, 2021]
---

Workspace関連APIを追加しました。
ワークスペース関連APIは、[こちら](/docs/v0/workspaces/README)のページを参照してください。

|  | API Name | Method | URI | Description |
| :---: | :--- | :--- | :--- | :--- | 
| NEW | [CreateNewWorkspace] | POST | /api/v0/workspaces | 新規ワークスペースを作成する |
| NEW | [GetPasswordPolicy] | GET | /api/v0/workspaces/:workspace-id/password-policy | ワークスペースに指定されたパスワードポリシーを取得する |
| NEW | [GetWorkspaceUsage] | GET | /api/v0/workspaces/:workspace-id/usages | ワークスペースの利用状況(ユーザ数、DB数など)を取得する |
| NEW | [GetWorkspaceFunctionality] | GET | /api/v0/workspaces/:workspace-id/functionalities | ワークスペースが利用できる機能設定を取得する |