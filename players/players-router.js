const router = require("express").Router();

// Import data model
const Players = require("./players-model");

// Gets an array of all players
router.get("/", (req, res) => {
  Players.find()
    .then(players => {
      res.json(players);
    })
    .catch(err =>
      res.status(500).json({ message: "Could not get all players from the DB" })
    );
});

// Get single player by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  Players.findById(id)
    .then(player => {
      if (player) {
        res.json(player);
      } else {
        res
          .status(404)
          .json({ message: "Could not find a player with that ID in the db" });
      }
    })
    .catch(err =>
      res.status(500).json({ message: "Could not get player from the DB" })
    );
});

//Get a single player by username
router.get("/search/:name", (req, res) => {
  const { name } = req.params;
  const searchTerm = name.replace("_", " ");

  Players.findBy({ player: searchTerm })
    .then(player => {
      res.status(200).json(player);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "There was an error finding that player" });
    });
});

// Export router
module.exports = router;
