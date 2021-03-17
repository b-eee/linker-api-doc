---
id: README
title: UserInfo API
sidebar_label: 使い方
---

ログインユーザの情報取得や更新に関連するAPI

## Overview

ログイン済ユーザ情報の検索、更新などのフローと利用APIを説明します。
メールを送信するため、SendGridサービスを利用します。

## Pre Requisites

ログイン可能なHexabaseアカウントがすでに存在すること

## API

### ログインユーザー情報

ログインしているユーザーに関する情報を取得します。

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 43 | [GetUserInfo](GetUserInfo.md) | ユーザー情報取得 | GET | /api/v0/userinfo | ユーザーの関連情報取得 | v0 | - |
| 61 | [UpdateUserInfo](UpdateUserInfo.md) | ユーザー情報更新 | PUT | /api/v0/userinfo | ユーザー名、情報の更新 | v0 | - |

### パスワード変更

パスワードを忘れたユーザ向けに、パスワードを再発行します

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 56 | [ResetPassword](ResetPassword.md) | パスワード初期化リクエスト | POST | /api/v0/users/password/forgot | ログイン前、パスワード初期化 開始 | v0 | - |
| 57 | [SetNewPassword](SetNewPassword.md) | パスワード再登録 | PUT | /api/v0/users/password/forgot | ログイン前、パスワード初期化 パスワードを変更 | v0 | - |
| 58 | [ValidatePassword](ValidatePassword.md) | パスワード変更確認 | GET | /api/v0/users/password/validate | ログイン前、パスワード初期化　パスワー変更状態の確認 | v0 | - |
| 59 | [SetPassword](SetPassword.md) | パスワード変更登録 | PUT | /api/v0/users/password | ログイン後、パスワード変更 | v0 | - |


#### Sequence Diagram

![password_update Sequence](/img/docs/v0/userinfo_password_update.png)

<!-- シーケンス図を参照するためには、Webブラウザへ[Mermaid Extension](https://chrome.google.com/webstore/detail/github-%2B-mermaid/goiiopgdnkogdbjmncgedmgpoajilohe/related) をインストールしてください -->

```mermaid
sequenceDiagram
    participant br as Browser
    participant ml as Mailer
    participant ap as your WebSite(SPA)
    participant hx as Hexabase
    participant sg as SendGrid

    %% register email
    br->>+ap: access the URL
    ap->>ap: Press "password forgot" button or link
    ap->>+hx: ResetPassword [POST /users/password/forgot]
    ap-->>-br: show "email sent" message
    hx->>-sg: Send email request
    Note right of hx: Hexabase will call sendgrid API 
    
    %% send mail from sendgrid
    sg-->>+ml: Send email with url link and confirm id
    Note right of ml: confirm id
    ml->>ml: Click the URL link in the mail
    ml->>+hx: [GET /users/password/validate]
    
    %% redirect to "set password"
    hx-->>-br: Redirect
    br->>+ap: registration_path(redirect url)
    ap->>ap: Enter new passwords
    ap->>+hx: RegisterUser [POST /users/password] 
    hx->>hx: Reset to new password
    hx-->>-ap: return result

```


### メールアドレス変更

登録したユーザーのメールアドレスを変更します

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 72 | [UpdateUserEmailRequest](UpdateUserEmailRequest.md) | メールアドレス変更リクエスト | POST | /api/v0/users/email | メールアドレス変更リクエスト | v0 | - |
| 73 | [ConfirmUserEmail](ConfirmUserEmail.md) | メールアドレス変更確認 | GET | /api/v0/users/confirmations/:confirmation_id | メールアドレス変更確認 | v0 | - |
| 74 | [UpdateUserEmail](UpdateUserEmail.md) | メールアドレス変更 | POST | /api/v0/users/confirmations | メールアドレスの変更を確定 | v0 | - |



#### Sequence Diagram

![email_update Sequence](/img/docs/v0/userinfo_email_update.png)

```mermaid
sequenceDiagram
    participant br as Browser
    participant ml as Mailer
    participant ap as your WebSite(SPA)
    participant hx as Hexabase
    participant sg as SendGrid

    %% register new email
    br->>+ap: access the URL
    ap->>ap: Enter new email and press Update
    ap->>+hx: UpdateUserEmailRequest [POST /users/email]
    Note right of ap: [email, registration_path(redirect url)]
    ap-->>-br: show "email sent" message
    hx->>-sg: Send email request
    Note right of hx: Hexabase will call sendgrid API
    
    %% send mail from sendgrid
    sg-->>+ml: Send email with url link and confirm id
    Note right of ml: confirm id
    ml->>ml: Click the URL link in the mail
    ml->>+hx: [GET /users/confirmations/xxxxxxx]
    
    %% redirect to "confirm change email"
    hx-->>-br: Redirect
    br->>+ap: registration_path(redirect url)
    ap->>ap: press Confirm button
    ap->>+hx: RegisterUser [POST users/confirmations] 
    Note left of hx: confirmation_id
    hx->>hx: Change email
    hx-->>-ap: return status 200

```
