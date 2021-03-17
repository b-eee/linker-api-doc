#### GetUserInfo

ユーザーの関連情報取得

**Description**

- tokenで指定されたユーザーに関連した情報を取得する
- user_rolesには、ユーザーが保有するロールの一覧が返る
- user_groupsには、現在のワークスペース内でユーザーが所属するグループの一覧が返る

**Method**

GET

**Request URL Format**

```text
/api/v0/userinfo
```

**Params**

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/userinfo
```

**Response Sample**

```javascript
{
    "u_id": "現在のユーザ",
    "username": "ユーザー名",
    "email": "現在のユーザーのemailアドレス",
    "profile_pic": "ユーザーのプロファイル画像の保存先",
    "current_workspace_id": "現在使用しているワークスペースのID",
    "is_ws_admin": true,   //(bool このユーザーにワークスペースのアドミン権限が付与されているかどうか, trueはアドミン権限有り)
    "user_roles": [
      {
        "r_id": "システム内部のロールID",
        "role_name": "ロール名ID１",
        "role_id": "画面で入力されたロールID",
        "p_id": "プロジェクトID1",
        "application_id": "アプリケーションID",
        "application_name": "アプリケーション名",
        "application_display_order": 0
      },
      {
        "r_id": "5e3ac99c393da500077068b0",
        "role_name": "部長",
        "role_id": "Manager1",
        "p_id": "5e015f03285ab60007442e5e",
        "application_id": "xxSystem",
        "application_name": "バツバツシステム",
        "application_display_order": 0
      }
    ],
    "user_groups": [
      {
        "g_id": "5c5fd6c084f4be2574e2bcaf",
        "group_name": "営業１課",
        "group_id": "1101"
      },
      {
        "g_id": "5c5fd6c084f4be2574e2bcb0",
        "group_name": "A部",
        "group_id": "1001"
      },
      {
        "g_id": "5c5fa7da84f4be4250aaee28",
        "group_name": "全社",
        "group_id": "1000"
      }
    ]
}
```
