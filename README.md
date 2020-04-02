# Back-End


END POINTS

Root: / https://lambda-issue-tracker.herokuapp.com/ 

USERS: /api/auth

Create/Register: /api/auth/register
https://lambda-issue-tracker.herokuapp.com/api/auth/register
	"Full_Name": "Sam Torres",
	"Email": "rillatube@gmail.com",
	"Password": "123",
	"Role": "Section Lead",
	"Track": "Web",
	"Cohort": "Web29"

Login/Post: /api/auth/login
https://lambda-issue-tracker.herokuapp.com/api/auth/login
"Email": "rillatube@gmail.com",
"Password": "123"

Update: /api/users/:id/update
https://lambda-issue-tracker.herokuapp.com/api/users/:id/update
Updated fields only required for updates

Delete: /api/users/delete/:id
https://lambda-issue-tracker.herokuapp.com/api/users/delete/:id

Get all users: /api/users/
https://lambda-issue-tracker.herokuapp.com/api/users/

Get Users by Id: /api/users/:id
https://lambda-issue-tracker.herokuapp.com/api/users/:id


TICKETS

CREATE: /api/tickets/
https://lambda-issue-tracker.herokuapp.com/api/tickets/
{
	"Full_Name": "dfssdfvdsz",
	"Role": "TL",
	"Track": "Web",
	"Cohort": "Web30",
	"Triggering_Record": "fdzvdfsfvvdf",
	"Reason": "Disruptive Behavior",
	"Triage": "Urgent",
	"TL_Name": "N/A",
	"SL1_Name": "Sam Torres",
	"SL2_Name": "Juan Aleman",
	"TL_Efforts_Made": "No TL",
	"SL_Efforts_Made": "Reached out had a meeting",
	"Comments": "Test ljkksdbhcdklsayjuhgbdsfkucaygfudey",
	"Creators_User_Id": 1
}

READ: /api/tickets/
https://lambda-issue-tracker.herokuapp.com/api/tickets/

READ: /api/tickets/user/:id
https://lambda-issue-tracker.herokuapp.com/api/tickets/user/:id

Update: /api/tickets/:id
https://lambda-issue-tracker.herokuapp.com/api/tickets/:id
Only specified fields being updated are required for update

Delete: /api/tickets/:id
https://lambda-issue-tracker.herokuapp.com/api/tickets/:id

READ: /api/tickets/track
https://lambda-issue-tracker.herokuapp.com/api/tickets/track
{
 "Track": "UX"
}

READ: /api/tickets/cohort
https://lambda-issue-tracker.herokuapp.com/api/tickets/cohort
{
 "Cohort": "Web29"
}


COMMENT REPLIES
       
CREATE: /
https://lambda-issue-tracker.herokuapp.com/api/comment/
{
"Comment_Reply_Body": "another one",
"Ticket_Id": 1
}

READ: /api/comment/ticket/:id
https://lambda-issue-tracker.herokuapp.com/api/comment/ticket/:id

UPDATE:
https://lambda-issue-tracker.herokuapp.com/api/comment/:id
Only updated fields required to update comment

Delete: /api/comment/:id
https://lambda-issue-tracker.herokuapp.com/api/comment/:id

STUDENTS


CREATE: /api/students/
https://lambda-issue-tracker.herokuapp.com/api/students/
{
	"Full_Name": "Jay j",
	"Track": "Web",
	"Cohort": "Web29",
	"TL_Name": "Natalie Davis",
	"SL1_Name": "Samuel Torres",
	"SL2_Name": "Juan Aleman"
}
    
READ: /api/students/
https://lambda-issue-tracker.herokuapp.com/api/students/

Update:
https://lambda-issue-tracker.herokuapp.com/api/students/:id

DELETE: /api/students/:id
https://lambda-issue-tracker.herokuapp.com/api/students/:id

Read:
  
