
# UserRegistration API
新規ユーザと最初ワークスペースを作成する

## Overview

システムへはじめてのユーザを登録するためのフローと利用APIを説明します。
メールを送信するために、SendGridサービスの利用が必須です。

## Prerequisites

Hexabase社へEmail送信用のSendGridのAPI_KEY、テンプレートIDを連絡し、email_template_idの発行を受けます。
(Optional) Hexabaseデフォルトのメールテンプレートを利用すればemail_template_idの発行をしなくても開発を進めることができます。

## API

| No | API Name | API名 | Method | URI | 目的 | version | 画面ID\(display\_id\)への対応 |
| :---: | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 53 | [UserRegistration](UserRegistration.md) | 初回ユーザー登録 | POST | /api/v0/users/registration | ユーザーの初期登録用リクエスト | v0 | - |
| 55 | [RegisterUser](RegisterUser.md) | ユーザー初期登録 | POST | /api/v0/users/registration/confirm | ユーザーの初期登録、パスワード登録 | v0 | - |


## Sequence Diagram

このページを参照するためには、Webブラウザへ[Mermaid Extension](https://chrome.google.com/webstore/detail/github-%2B-mermaid/goiiopgdnkogdbjmncgedmgpoajilohe/related) をインストールしてください

```mermaid
sequenceDiagram
    participant br as Browser
    participant ml as Mailer
    participant ap as your WebSite(SPA)
    participant hx as Hexabase
    participant sg as SendGrid

    %% register email
    br->>+ap: access the URL
    ap->>ap: Enter email and press Register
    ap->>+hx: UserRegistration [POST /users/registration]
    Note right of ap: [email, email_template_id, registration_path(redirect url)]
    ap-->>-br: show "email sent" message
    hx->>-sg: Send email request
    Note right of hx: Hexabase will call sendgrid API using template settings
    
    %% send mail from sendgrid
    sg-->>+ml: Send email with url link and confirm id
    Note right of ml: confirm id
    ml->>ml: Click the URL link in the mail
    ml->>+hx: [GET /users/registration/confirm&id=xxxxxxx]
    
    %% redirect to "set password"
    hx-->>-br: Redirect
    br->>+ap: registration_path(redirect url)
    ap->>ap: Enter initial passwords
    ap->>+hx: RegisterUser [POST users/registration/confirm] 
    Note left of hx: confirmation_id, email, password, user_info
    hx->>hx: Create default workspace and group<br> and add the user in it
    hx-->>-ap: return result

```

