exports.seed = function(knex) {
  return knex("Comment_Replies").insert([
    { Comment_Reply_Body: "another one", Ticket_Id: 1 },
    { Comment_Reply_Body: "kuysDGCAKUS", Ticket_Id: 2 },
    { Comment_Reply_Body: "aAKSDYUGCK", Ticket_Id: 3 },
    { Comment_Reply_Body: "Sdygcakufgyds", Ticket_Id: 4 },
    { Comment_Reply_Body: "kwadWDSFGAJYe", Ticket_Id: 1 },
    { Comment_Reply_Body: "KUADGYUDES", Ticket_Id: 2 },
    { Comment_Reply_Body: "KLUAIYDHICKH XDZ", Ticket_Id: 3 },
    { Comment_Reply_Body: "KLUSDYGCAKU", Ticket_Id: 4 },
    { Comment_Reply_Body: "LSDKU G", Ticket_Id: 1 },
    { Comment_Reply_Body: "sdliuç˙ adh iauyhdf", Ticket_Id: 2 }
  ]);
};
