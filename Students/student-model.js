const db = require("../data/db.Config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(Student) {
  //   console.log("In Student Model:", Student);
  return db("Students").insert(Student);
}

function find() {
  return db("Students");
}

function findBy(filter) {
  return db("Students").where(filter);
}

function findById(id) {
  return db("Students")
    .where("Student_Id", id)
    .first();
}

function update(Student_Id, changes) {
  console.log("IN MODEL:", Student_Id, changes);
  return db("Students")
    .where({ Student_Id })
    .update(changes)
    .then(update => {
      return findById(Student_Id);
    });
}

function remove(id) {
  return db("Students")
    .where("Student_Id", id)
    .del()
    .then(track => {
      return findById(id);
    });
}
