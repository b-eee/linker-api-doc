---
id: README
title: Workspace API
sidebar_label: 使い方
---

ワークスペースに関連するAPI

## Overview

- 利用できるワークスペースの一覧取得、選択など、ワークスペースの操作をするAPIです
- ワークスペースは、ログインユーザーが必ず１つ選択する必要があります（2つ以上同時に選択することはできません）
- ワークスペースを新規作成するためには、あらかじめ管理者から許可されている必要があります。詳細はサービス提供者へ確認してください。

## API List

| No | API Name | Method | URI | Description |
| :---: | :--- | :--- | :--- | :--- | 
| 1 | [GetWorkspaces](GetWorkspaces.md) | GET | /api/v0/workspaces | ワークスペースの一覧を取得する |
| 2 | [SelectWorkspace](SelectWorkspace.md) | POST | /api/v0/workspaces/:workspace-id/select | 現在ワークスペースを選択する |
| 3 | [CreateNewWorkspace](CreateNewWorkspace.md) | POST | /api/v0/workspaces | 新規ワークスペースを作成する |
| 4 | [GetPasswordPolicy](GetPasswordPolicy.md) | GET | /api/v0/workspaces/:workspace-id/password-policy | ワークスペースに指定されたパスワードポリシーを取得する |
| 5 | [GetWorkspaceUsage](GetWorkspaceUsage.md) | GET | /api/v0/workspaces/:workspace-id/usages | ワークスペースの利用状況(ユーザ数、DB数など)を取得する |
| 6 | [GetWorkspaceFunctionality](GetWorkspaceFunctionality.md) | GET | /api/v0/workspaces/:workspace-id/functionalities | ワークスペースが利用できる機能設定を取得する |
