# NBA Career Longevity Predictor

## API Documentation:

### AUTH ENDPOINTS

#### Login 
Must include username and password in request body<br/><br/>
Example body:<br/> 
{<br/>
"username": "testUser",<br/> 
"password": "testPassword"<br/> 
}<br/>
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/login

---
#### Register 
Must include unique username, unique email address and a password in request body<br/><br/>
Example: <br/>
{<br/> 
"username": "testUser",<br/> 
"email": "test@email.com",<br/> 
"password": "testPassword"<br/> 
}<br/>
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/register

---
### USERS ENDPOINTS

#### Get list of all users
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users

---
#### Edit a user
Must include desired changes in request body<br/><br/>
Example:<br/>
{<br/> 
"username": "changedUsername",<br/> 
"email": "changed@email.com",<br/> 
"password": "changedPassword"<br/> 
}<br/>
> **PUT** https://career-longevity-predictor.herokuapp.com/api/users/:id

---
#### Delete a user
> **DELETE** https://career-longevity-predictor.herokuapp.com/api/users/:id

---
### PLAYERS ENDPOINTS

#### Get list of all players
> **GET**  https://career-longevity-predictor.herokuapp.com/api/players
