const router = require("express").Router();

// Import data model
const Users = require("./users-model");

// Get all users
router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      console.log(users);
      res.json(users);
    })
    .catch(err => res.send(err));
});

//Update a user
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

// Delete a user
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
