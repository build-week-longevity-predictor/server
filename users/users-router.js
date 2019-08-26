const router = require("express").Router();

// Import data model
const Users = require("./users-model");

// Gets an array of all registered users
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err =>
      res.status(500).json({ message: "Could not get all users from the DB" })
    );
});

//Updates a user by passing user's ID as a request parameter and changes in request body
router.put("/:id", (req, res) => {
  const changes = req.body;
  const { id } = req.params;
  Users.update(changes, id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({ message: "Could not update user in the DB" });
    });
});

// Delete a user by passing user's ID as a req param
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id)
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// Export router
module.exports = router;
