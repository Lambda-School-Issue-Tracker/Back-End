const db = require("../data/db.Config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(user) {
  //   console.log("In User Model:", user);
  return db("Users").insert(user);
}

function find() {
  return db("Users");
}

function findBy(filter) {
  return db("Users").where(filter);
}

function findById(id) {
  return db("Users")
    .where("User_Id", id)
    .first();
}

function update(User_Id, changes) {
  console.log("IN MODEL:", User_Id, changes);
  return db("Users")
    .where({ User_Id })
    .update(changes)
    .then(update => {
      return findById(User_Id);
    });
}

function remove(id) {
  return db("Users")
    .where("User_Id", id)
    .del()
    .then(track => {
      return findById(id);
    });
}
