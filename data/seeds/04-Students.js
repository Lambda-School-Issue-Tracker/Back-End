exports.seed = function(knex) {
  return knex("Students").insert([
    {
      Full_Name: "Sammy T",
      Track: "Web",
      Cohort: "Web29",
      TL_Name: "Natalie Davis",
      SL1_Name: "Samuel Torres",
      SL2_Name: "Juan Aleman"
    },
    {
      Full_Name: "Jay j",
      Track: "Web",
      Cohort: "Web30",
      TL_Name: "Some Guy",
      SL1_Name: "Katrina D",
      SL2_Name: "Some person"
    },
    {
      Full_Name: "Person 1",
      Track: "Web",
      Cohort: "Web30",
      TL_Name: "Some TL",
      SL1_Name: "Some SL",
      SL2_Name: "Another SL"
    },
    {
      Full_Name: "Jay j",
      Track: "Web",
      Cohort: "Web29",
      TL_Name: "Natalie Davis",
      SL1_Name: "Samuel Torres",
      SL2_Name: "Juan Aleman"
    }
  ]);
};
