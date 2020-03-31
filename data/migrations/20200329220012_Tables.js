exports.up = function(knex) {
  return knex.schema
    .createTable("Users", tbl => {
      tbl.increments("User_Id");

      tbl.string("Full_Name").notNullable();
      tbl
        .string("Email")
        .unique()
        .notNullable();
      tbl.string("Password").notNullable();
      tbl.string("Role").notNullable();
      tbl.string("Track").notNullable();
      tbl.string("Cohort");
    })

    .createTable("Tickets", tbl => {
      tbl.increments("Ticket_Id");

      tbl.string("Full_Name").notNullable();
      tbl.string("Role").notNullable();
      tbl.string("Track").notNullable();
      tbl.string("Cohort").notNullable();
      tbl.string("Triggering_Record").notNullable();
      tbl.string("Reason").notNullable();
      tbl.string("Triage").notNullable();
      tbl.string("TL_Name");
      tbl.string("SL1_Name");
      tbl.string("SL2_Name");
      tbl.string("TL_Efforts_Made");
      tbl.string("SL_Efforts_Made");
      tbl.string("Comments");
      tbl
        .integer("Comment_Reply_Id")
        .references("Comment_Reply_Id")
        .inTable("Comment_Replies")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("Comment_Replies", tbl => {
      tbl.increments("Comment_Reply_Id");

      tbl.string("Comment_Reply_Body");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("Users")
    .dropTableIfExists("Tickets")
    .dropTableIfExists("Comment_Replies");
};
