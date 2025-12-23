const express = require('express');
const router = express.Router();

// it is an in memory data , and data is fetched from here without any database
const users = [
  { id: 1, name: "Praneeth", role: "Admin" },
  { id: 2, name: "Surya", role: "Member" },
  { id: 3, name: "Rahul", role: "Member" }
];

const communities = [
  { id: 1, name: "Developers Hub", members: [1, 2, 3] }
];


//returns the full list of the users from the in memory data
router.get('/users', (req, res) => {
  res.status(200).json(users);
});


//it is used to add a new user to the in memory data, and to add a user name and the role are required 
router.post('/users', (req, res) => {
  const { name, role } = req.body;
  if (!name || !role) {
    return res.status(400).json({ error: "Name and role are required." });
  }
  const newUser = { id: users.length + 1, name, role };
  users.push(newUser);
  communities[0].members.push(newUser.id); 
  res.status(201).json(newUser);
});


//returns the community details along with the data which is given, 
// i also handles an edge case like, it will also give the users
//  which are added from the post api
router.get('/communities/:id', (req, res) => {
  const community = communities.find(c => c.id === parseInt(req.params.id));
  if (!community) return res.status(404).json({ error: "Community not found." });
  
  const memberDetails = users.filter(u => community.members.includes(u.id));
  res.status(200).json({ ...community, members: memberDetails });
});

module.exports = router;