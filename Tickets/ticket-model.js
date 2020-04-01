const db = require("../data/db.Config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  findTicketsByUserId
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

function findTicketsByUserId(id) {
  return db("Tickets as t")
    .select(
      "u.User_Id",
      "u.Full_Name as createdBy",
      "t.Full_Name",
      "t.Track",
      "t.Cohort",
      "t.Triggering_Record",
      "t.Reason",
      "t.Reason",
      "t.Triage",
      "t.TL_Name",
      "SL1_Name",
      "SL2_Name",
      "TL_Efforts_Made",
      "SL_Efforts_Made",
      "t.Comments"
    )
    .join("Users as u", "u.User_Id", "t.Creators_User_Id")
    .where("u.User_Id", id);
}
