exports.seed = function(knex) {
  return knex("Tickets").insert([
    {
      Full_Name: "dfssdfvdsz",
      Role: "TL",
      Track: "Web",
      Cohort: "Web30",
      Triggering_Record: "fdzvdfsfvvdf",
      Reason: "Disruptive Behavior",
      Triage: "Urgent",
      TL_Name: "N/A",
      SL1_Name: "Sam Torres",
      SL2_Name: "Juan Aleman",
      TL_Efforts_Made: "No TL",
      SL_Efforts_Made: "Reached out had a meeting",
      Comments: "Test ljkksdbhcdklsayjuhgbdsfkucaygfudey",
      Creators_User_Id: 1
    },
    {
      Full_Name: "Sam",
      Role: "Student",
      Track: "Web",
      Cohort: "Web30",
      Triggering_Record: "fdzvdfsfvvdf",
      Reason: "Disruptive Behavior",
      Triage: "Urgent",
      TL_Name: "Natalie Davis",
      SL1_Name: "Sam Torres",
      SL2_Name: "Juan Aleman",
      TL_Efforts_Made: "Reached Out to Student",
      SL_Efforts_Made: "Reached out had a meeting",
      Comments: "Test ljkksdbhcdklsayjuhgbdsfkucaygfudey",
      Creators_User_Id: 2
    },
    {
      Full_Name: "Sam",
      Role: "Student",
      Track: "UX",
      Cohort: "UX3",
      Triggering_Record: "fdzvdfsfvvdf",
      Reason: "Disruptive Behavior",
      Triage: "Urgent",
      TL_Name: "Chris",
      SL1_Name: "Sam Torres",
      SL2_Name: "Juan Aleman",
      TL_Efforts_Made: "Reached Out to Student",
      SL_Efforts_Made: "Reached out had a meeting",
      Comments: "Test ljkksdbhcdklsayjuhgbdsfkucaygfudey",
      Creators_User_Id: 3
    },
    {
      Full_Name: "Samuel Torres",
      Role: "SL",
      Track: "Web",
      Cohort: "Web29",
      Triggering_Record: "fdzvdfsfvvdf",
      Reason: "Disruptive Behavior",
      Triage: "Urgent",
      TL_Name: "Staff",
      SL1_Name: "Sam Torres",
      SL2_Name: "Juan Aleman",
      TL_Efforts_Made: "Staff",
      SL_Efforts_Made: "Staff",
      Comments: "Test ljkksdbhcdklsayjuhgbdsfkucaygfudey",
      Creators_User_Id: 4
    }
  ]);
};
