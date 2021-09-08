# Project Authentication Test with JWT

<hr/>

## Available Scripts

In the project directory, you can run:

### `yarn install` and `yarn start`

**AVAILABLE METHODS**:

Path: `/login`
Request: `POST`
Protected: `false`
Description: used to sign in

Body:
```Bash
{
    "user": "cristian",
    "password": "123"
}
```
<br/>

Path: `/customers`
Request: `GET`
Protected: `true`
Description: used to get customers of api

```Bash
{
  "auth": true,
  "customers": [
    {
        id: 1,
        name: "Customer 1",
    },
    {
        id: 2,
        name: "Customer 2",
    },
    {
        id: 3,
        name: "Customer 3",
    },
    ...
  ]
}
```
<br/>

Path: `/logout`
Request: `POST`
Protected: `false`
Description: used to log out


