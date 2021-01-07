#### GetGroupTree

グループツリー情報取得

**Description**

ワークスペース内のグループをツリー形式のJSONにて取得します

**Method**

GET

**Request URL Format**

```text
/api/v0/grouptree
```

**Params**

```text
特になし
```

**Request URL Sample**

```text
GET https://api.xxx.com/api/v0/grouptree
```

**Response Sample**

```javascript
{
    "error": null,
    "result": [
        {
            "childGroups": [
                {
                    "childGroups": [
                        {
                            "childGroups": [],
                            "display_id": "addfaa",
                            "id": "5972e630cce5fe6c280cd242",
                            "name": "test",
                            "show_child": true
                        }
                    ],
                    "display_id": "ssss",
                    "id": "5972ebebcce5fe6c280cd246",
                    "name": "sss",
                    "show_child": true
                },
                {
                    "childGroups": [
                        {
                            "childGroups": [
                                {
                                    "childGroups": [],
                                    "display_id": "etsetse",
                                    "id": "5972d10dcce5fe6c280cd240",
                                    "name": "test",
                                    "show_child": true
                                }
                            ],
                            "display_id": "aaa",
                            "id": "593b9674fbfcba27707e2345",
                            "name": "aaaa",
                            "show_child": true
                        }
                    ],
                    "display_id": "TEST_G",
                    "id": "593b9660fbfcba27707e2343",
                    "name": "テスト用グループ2",
                    "show_child": true
                },
                {
                    "childGroups": [
                        {
                            "childGroups": [
                                {
                                    "childGroups": [],
                                    "display_id": "TEST333",
                                    "id": "593b9688fbfcba27707e2347",
                                    "name": "test3",
                                    "show_child": true
                                }
                            ],
                            "display_id": "123",
                            "id": "593a7ee5cce5fe9fc0192326",
                            "name": "下の階層",
                            "show_child": true
                        }
                    ],
                    "display_id": "583278f6fb90a122e2646527",
                    "id": "583278f6fb90a122e2646527",
                    "name": "NEW",
                    "show_child": true
                }
            ],
            "display_id": "582b26d8fb90a15e0c24ad81",
            "id": "582b26d8fb90a15e0c24ad81",
            "name": "WORKSPACE.DEFAULT_GROUP_NAME",
            "show_child": true
        }
    ]
}
```
