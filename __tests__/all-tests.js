const request = require("supertest");

const db = require("../data/db-config");
const server = require("../server.js");

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo3LCJ1c2VybmFtZSI6ImNoYW5nZWQiLCJpYXQiOjE1NjcwMTE3MzQsImV4cCI6MTU2NzQ0MzczNH0.6MakRCXd48-ToNWHRBDErLIQC5uxJK68a3QuYbWq2B0";

describe("Server Endpoint Tests", () => {
  beforeAll(async () => {
    // guarantees that the table is cleaned out before any of the tests run
    await db("users").truncate();
  });

  it("tests are running with DB_ENV set to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("AUTH ROUTES", () => {
    describe("Register, POST /api/auth/register", () => {
      it("succeeds, resturns status 201 with correct credentials", () => {
        return request(server)
          .post("/api/auth/register")
          .send({
            username: "admin",
            password: "password",
            email: "testemail@test.com"
          })
          .then(res => {
            expect(res.status).toBe(201);
          });
      });

      it("fails. returns status 500 with incorrect credentials", () => {
        return request(server)
          .post("/api/auth/register")
          .send({
            //missing password, password is required to register
            username: "admin1",
            email: "testemail1@test.com"
          })
          .then(res => {
            expect(res.status).toBe(500);
          });
      });

      it("fails, returns status 500 with missing credentials", () => {
        return request(server)
          .post("/api/auth/register")
          .then(res => {
            expect(res.status).toBe(500);
          });
      });
    });
    describe("Login, POST /api/auth/login", () => {
      it("succeeds, returns status 200 with correct credentials", () => {
        return request(server)
          .post("/api/auth/login")
          .send({
            username: "admin",
            password: "password"
          })
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("fails, returns status 401 with incorrect credentials", () => {
        return request(server)
          .post("/api/auth/login")
          .send({
            username: "notarealuser",
            password: "notreal"
          })
          .then(res => {
            expect(res.status).toBe(401);
          });
      });

      it("fails, returns status 500 with missing credentials", () => {
        return request(server)
          .post("/api/auth/login")
          .then(res => {
            expect(res.status).toBe(500);
          });
      });
    });
  });

  describe("USERS ROUTES", () => {
    describe("Get all users, GET /api/users", () => {
      it("succeeds, returns status 200 when token is present in header", () => {
        return request(server)
          .get("/api/users")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("succeeds, returns array of users when token is present in header", () => {
        return request(server)
          .get("/api/users")
          .set("Authorization", token)
          .then(res => {
            expect(Array.isArray(res.body)).toBe(true);
          });
      });

      it("fails, returns status 400 without token in header", () => {
        return request(server)
          .get("/api/users")
          .then(res => {
            expect(res.status).toBe(400);
          });
      });
    });

    describe("Get a single user using ID, GET /api/users/:id", () => {
      it("succeeds, returns status 200 when given an ID and token is present in header", () => {
        return request(server)
          .get("/api/users/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("succeeds, returns the found user object as JSON when given an ID and token is present in header", () => {
        return request(server)
          .get("/api/users/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.type).toMatch(/json/);
          });
      });

      it("fails, returns status 404 when gived an invalid user ID and token is present in header", () => {
        return request(server)
          .get("/api/users/999")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(404);
          });
      });

      it("fails, returns status 400 without token in header", () => {
        return request(server)
          .get("/api/users/1")
          .then(res => {
            expect(res.status).toBe(400);
          });
      });
    });

    describe("Get a single user by using username, GET /api/users/search/:username", () => {
      it("succeeds, returns status 200 when given a username and token is present in header", () => {
        return request(server)
          .get("/api/users/search/admin")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("fails, returns status 400 when given a username without token in header", () => {
        return request(server)
          .get("/api/users/search/admin")
          .then(res => {
            expect(res.status).toBe(400);
          });
      });
    });

    describe("Update a user, PUT /api/users/:id", () => {
      it("succeeds, returns status 200 when given an ID and changes and token is present in header", () => {
        return request(server)
          .put("/api/users/1")
          .set("Authorization", token)
          .send({
            username: "changedAdmin",
            password: "therealest"
          })
          .then(res => {
            expect(res.status).toBe(200);
          });
      });

      it("fails, returns status 400 when given an ID and changes without token in header", () => {
        return request(server)
          .put("/api/users/1")
          .send({
            username: "changedAdmin",
            password: "therealest"
          })
          .then(res => {
            expect(res.status).toBe(400);
          });
      });

      it("fails, returns status 500 when given an ID and and token is included in header but no changes supplied", () => {
        return request(server)
          .put("/api/users/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(500);
          });
      });

      it("fails, returns status 404 when given an invalid ID but supplied changes and token is included in header", () => {
        return request(server)
          .put("/api/users/999")
          .set("Authorization", token)
          .send({
            username: "changedAdmin",
            password: "therealest"
          })
          .then(res => {
            expect(res.status).toBe(404);
          });
      });
    });

    describe("Delete a user, DELETE /api/users/:id", () => {
      it("fails, returns status 404 when given an invalid ID and token is present in header", () => {
        return request(server)
          .delete("/api/users/999")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(404);
          });
      });

      it("fails, returns status 400 when given a valid ID without token in header", () => {
        return request(server)
          .delete("/api/users/1")
          .then(res => {
            expect(res.status).toBe(400);
          });
      });

      it("succeeds, returns status 200 when given a valid ID and token is present in header", () => {
        return request(server)
          .delete("/api/users/1")
          .set("Authorization", token)
          .then(res => {
            expect(res.status).toBe(200);
          });
      });
    });
  });
});
