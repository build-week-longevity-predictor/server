const router = require("express").Router();

// Import data model
const Players = require("./players-model");

// Gets an array of all registered users
router.get("/", (req, res) => {
  Players.find()
    .then(players => {
      res.json(players);
    })
    .catch(err =>
      res.status(500).json({ message: "Could not get all players from the DB" })
    );
});



// Export router
module.exports = router;
