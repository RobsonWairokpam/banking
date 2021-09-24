#### API documentation

Header for AUTH

```json
{
  "Authorization": "Bearer [token]"
}
```

##### Authentication -

Author - Nenghoiba

1. Login

```
POST /api/auth/login
```

payload

```json
{
  "email": "email@gmail.com",
  "password": "password"
}
```

response

```json
{
  "token": "dojpwqjduj20ijerdasdnhjhiuqhuiy72y312903ue8901u90u10uyer9y19ey91y9ye981y",
  "type": "Bearer"
}
```

##### User -

Author - Robson

Add User

```
(AUTH) POST /api/user/add-user
```

payload

```json
{
  "name": "user name here",
  "address": "address",
  "gender": "male"
}
```

response

```json
{
  "id": "djghjahksdhjklsa",
  "name": "user name here",
  "address": "address",
  "gender": "male"
}
```

Get User by ID

```
(AUTH) GET /api/user/:id
```

Response

```json
{
  "id": "djghjahksdhjklsa",
  "name": "user name here",
  "address": "address",
  "gender": "male"
}
```
