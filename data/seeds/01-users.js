const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  const seedUser = [
    {
      Full_Name: "Sam Torres",
      Email: "rillatube@gmail.com",
      Password: "123",
      Role: "Section Lead",
      Track: "Web",
      Cohort: "Web29"
    },
    {
      Full_Name: "Winnie Song",
      Email: "Winnie@gmail.com",
      Password: "123",
      Role: "Student Leadership Coordinator",
      Track: "Web"
    },
    {
      Full_Name: "Juan Aleman",
      Email: "Juan@gmail.com",
      Password: "123",
      Role: "Section Lead",
      Track: "Web",
      Cohort: "Web29"
    },
    {
      Full_Name: "Jazmyne Muhhamed",
      Email: "Jazzy@gmail.com",
      Password: "123",
      Role: "Student Success Coordinator",
      Track: "Web"
    },
    {
      Full_Name: "Natalie Davis",
      Email: "Natty@gmail.com",
      Password: "123",
      Role: "Team Lead",
      Track: "Web",
      Cohort: "Web29"
    },
    {
      Full_Name: "Chris Adams",
      Email: "Chris@gmail.com",
      Password: "123",
      Role: "Team Lead",
      Track: "Web",
      Cohort: "Web29"
    }
  ];

  seedUser.map(user => {
    const hash = bcrypt.hashSync(user.Password, 10);
    user.password = hash;
  });
  // console.log(newseedUsers);
  return knex("Users").insert(seedUser);
};
