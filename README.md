# NBA Career Longevity Predictor API Documentation


## AUTH ENDPOINTS

### Login 
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/login<br/>

Must include username and password in request body. Returns a json web token<br/><br/>
Example request body:<br/> 
```
{
"username": "testUser",
"password": "testPassword"
}
```

---
### Register 
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/register

Must include unique username, unique email address and a password in request body<br/><br/>
Example request body: <br/>
```
{
"username": "testUser",
"email": "test@email.com",
"password": "testPassword"
}
```

---
---
---
## USERS ENDPOINTS

### Get list of all users
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users
---
### Edit a user
> **PUT** https://career-longevity-predictor.herokuapp.com/api/users/:id

Must include desired changes in request body<br/><br/>
Example request body:<br/>
```
{
"username": "changedUsername",
"email": "changed@email.com",
"password": "changedPassword"
}
```
---
### Get a single user by ID
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users/:id
---

### Get a single user by username
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users/search/:username

Username should be an exact match<br/><br/>
Example search request:<br/>
```
GET https://career-longevity-predictor.herokuapp.com/api/users/search/Howdy2.1
```
---

### Delete a user
> **DELETE** https://career-longevity-predictor.herokuapp.com/api/users/:id
---
---
---
## PLAYERS ENDPOINTS

### Get list of all players
> **GET**  https://career-longevity-predictor.herokuapp.com/api/players
---
### Get a single player by ID
> **GET**  https://career-longevity-predictor.herokuapp.com/api/players/:id
---
### Get a single player by name
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users/search/:Player_Name

Use player's full name, separated with an underscore<br/><br/>
Example search request:<br/>
```
GET https://career-longevity-predictor.herokuapp.com/api/players/search/Robert_Parish
```
---
