# NBA Career Longevity Predictor

## API Documentation:

### AUTH ENDPOINTS

#### Login 
expects username and password:
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/login

---
#### Register 
expects username(unique, required), email(unique, required) and password(required):
> **POST**  https://career-longevity-predictor.herokuapp.com/api/auth/register

---
### USERS ENDPOINTS

#### Get list of all users
> **GET**  https://career-longevity-predictor.herokuapp.com/api/users

---
#### Edit a user
> **PUT** https://career-longevity-predictor.herokuapp.com/api/users/:id

---
#### Delete a user
> **DELETE** https://career-longevity-predictor.herokuapp.com/api/users/:id

---
### PLAYERS ENDPOINTS

#### Get list of all players
> **GET**  https://career-longevity-predictor.herokuapp.com/api/players
