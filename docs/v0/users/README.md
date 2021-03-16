---
id: README
title: Users API
sidebar_label: 使い方
---

既存のワークスペース（グループ）へユーザを招待する

## Overview

- 既存のワークスペース内の指定グループへユーザを追加し、招待するフローと利用APIを説明します。
- メールを送信するため、あらかじめSendGridサービスの利用が必須です。

## Pre Requisites

Hexabase社へEmail送信用のSendGridのAPI_KEY、テンプレートIDを連絡し、email_template_idの発行を受けます。
(Optional) Hexabaseデフォルトのメールテンプレートを利用すればemail_template_idの発行をしなくても開発を進めることができます。

## API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 47 | [AddUser](AddUser) | ユーザー追加 | POST | /api/v0/users | グループに新規ユーザーを作成 | v0 | - |
| 51 | [RemoveUser](RemoveUser) | ユーザー削除 | DELETE | /api/v0/users | グループからユーザーを削除 | v0 | - |
| 52 | [UserInvite](UserInvite) | ユーザー招待 | POST | /api/v0/userinvite | ユーザーへ招待メールを送信する | v0 | - |


## Sequence Diagram

WIP
