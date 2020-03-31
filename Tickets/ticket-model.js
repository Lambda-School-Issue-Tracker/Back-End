const db = require("../data/db.Config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function add(ticket) {
  console.log("In ticket Model:", ticket);
  return db("Tickets").insert(ticket);
}

function find() {
  return db("Tickets");
}

function findBy(filter) {
  return db("Tickets").where(filter);
}

function findById(id) {
  return db("Tickets")
    .where("Ticket_Id", id)
    .first();
}

function update(Ticket_Id, changes) {
  return db("Tickets")
    .where({ Ticket_Id })
    .update(changes)
    .then(update => {
      return findById(Ticket_Id);
    });
}

function remove(id) {
  return db("Tickets")
    .where("Ticket_Id", id)
    .del()
    .then(track => {
      return findById(id);
    });
}
