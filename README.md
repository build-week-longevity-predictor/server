# NBA Career Longevity Predictor

## API Documentation:

### AUTH ENDPOINTS

#### Login 
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/login<br/>

Must include username and password in request body. Returns a json web token<br/><br/>
Example body:<br/> 
{<br/>
"username": "testUser",<br/> 
"password": "testPassword"<br/> 
}<br/>

---
#### Register 
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/register

Must include unique username, unique email address and a password in request body<br/><br/>
Example: <br/>
{<br/> 
"username": "testUser",<br/> 
"email": "test@email.com",<br/> 
"password": "testPassword"<br/> 
}<br/>


---
### USERS ENDPOINTS

#### Get list of all users
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users

---
#### Edit a user
> **PUT** https://career-longevity-predictor.herokuapp.com/api/users/:id

Must include desired changes in request body<br/><br/>
Example:<br/>
{<br/> 
"username": "changedUsername",<br/> 
"email": "changed@email.com",<br/> 
"password": "changedPassword"<br/> 
}<br/>


---
#### Delete a user
> **DELETE** https://career-longevity-predictor.herokuapp.com/api/users/:id

---
### PLAYERS ENDPOINTS

#### Get list of all players
> **GET**  https://career-longevity-predictor.herokuapp.com/api/players
