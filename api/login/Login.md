
#### Login

Login to the Hexabase backend

**Description**

Log in to Hexabase and get a token


**Method**

POST

**Request URL Format**

```text
/api/v0/login
```

**Payload**

`Content-Type : application/json`

```javascript
{
  "email": "sample@email.com",  // User's email address registered in Hexabase
  "password": "password"
}
```

**Request URL Sample**

```text
POST https://api.xxx.com/api/v0/login
```

**Response Sample**

```javascript
{
    "token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```