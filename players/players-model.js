const db = require("../data/db-config.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update
};

function find() {
  return db("players_nba");
}

function findBy(filter) {
  return db("players_nba").where(filter);
}

function add(user) {
  return db("players_nba")
    .returning("id")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db("players_nba")
    .where({ unnamed_0: id })
    .first();
}

function remove(id) {
  return db("players_nba")
    .del()
    .where({ id });
}

function update(changes, id) {
  return db("players_nba")
    .update(changes)
    .where({ id });
}
