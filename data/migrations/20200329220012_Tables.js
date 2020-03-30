exports.up = function(knex) {
  return knex.schema
    .createTable("Users", tbl => {
      tbl.increments("User_Id");

      tbl.string("First_Name").notNullable();
      tbl.string("Last_Name").notNullable();
      tbl
        .string("Email")
        .unique()
        .notNullable();
      tbl.string("Password").notNullable();
      tbl.string("Role").notNullable();
    })

    .createTable("Students", tbl => {
      tbl.increments("Student_Id");

      tbl.string("First_Name").notNullable();
      tbl.string("Last_Name").notNullable();
      tbl.string("TL_Name").notNullable();
      tbl.string("SL1_Name").notNullable();
      tbl.string("SL2_Name").notNullable();
      tbl.string("Track").notNullable();
      tbl.string("Cohort").notNullable();
    })

    .createTable("Tickets", tbl => {
      tbl.increments("Ticket_Id");

      tbl.string("Track").notNullable();
      tbl.string("Cohort").notNullable();
      tbl.string("Triggering_Record").notNullable();
      tbl.string("Reason").notNullable();
      tbl.string("Triage").notNullable();
      tbl.string("TL_Name").notNullable();
      tbl.string("SL1_Name").notNullable();
      tbl.string("SL2_Name").notNullable();
      tbl.string("TL_Efforts_Made").notNullable();
      tbl.string("SL_Efforts_Made").notNullable();
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
    .dropTableIfExists("Students")
    .dropTableIfExists("Users")
    .dropTableIfExists("Tickets")
    .dropTableIfExists("Comment_Replies");
};
