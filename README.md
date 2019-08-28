# NBA Career Longevity Predictor

## API Documentation:

### AUTH ENDPOINTS

#### Login 
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
#### Register 
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
### USERS ENDPOINTS

#### Get list of all users
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users

---
#### Edit a user
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
#### Delete a user
> **DELETE** https://career-longevity-predictor.herokuapp.com/api/users/:id

---
### PLAYERS ENDPOINTS

#### Get list of all players
> **GET**  https://career-longevity-predictor.herokuapp.com/api/players
