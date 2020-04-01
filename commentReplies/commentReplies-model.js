const db = require("../data/db.Config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove,
  findRepliesByTicketId
};

function add(reply) {
  return db("Comment_Replies").insert(reply);
}

function find() {
  return db("Comment_Replies");
}

function findBy(filter) {
  return db("Comment_Replies").where(filter);
}

function findById(id) {
  return db("Comment_Replies")
    .where("Comment_Reply_Id", id)
    .first();
}

function update(Comment_Reply_Id, changes) {
  return db("Comment_Replies")
    .where({ Comment_Reply_Id })
    .update(changes)
    .then(update => {
      return findById(Comment_Reply_Id);
    });
}

function remove(id) {
  return db("Comment_Replies")
    .where("Comment_Reply_Id", id)
    .del()
    .then(track => {
      return findById(id);
    });
}

function findRepliesByTicketId(id) {
  return db("Comment_Replies as cr")
    .select(
      "cr.Comment_Reply_Id",
      "cr.Comment_Reply_Body",
      "t.Comments as originalComment"
    )
    .join("Tickets as t", "t.Ticket_Id", "cr.Ticket_Id")
    .where("cr.Ticket_Id", id);
}
