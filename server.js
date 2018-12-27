// dependencies
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000
// require("./app/routes/htmlRoutes.js");
//app use
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
//routes -- I tried to get these into their own files and reference those files, but could not get the __dirname correct?
// ../app/public/home.html ... ??????
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});
//api routes
app.get("/api/friends", function(req, res) {
  return res.json(friendsArray);
});
app.post("/api/friends", function(req, res) {
  var friends = req.body;
  friendsArray.push(friends);
  res.json(friendsArray);
});
// again, going to fix pathing and put this into its own file when I get to it
var friendsArray = [
  {
    name: "Guy Bro",
    photo: "https://reason.org/wp-content/uploads/2018/01/guybentley.jpg",
    scores: [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
    // total_score: ""
  },
  {
    name: "Dude Fella",
    photo: "https://www.victoria.ac.nz/images/staffpics/guy-sinclair.jpg",
    scores: [3, 5, 3, 4, 3, 1, 3, 5, 1, 1],
    // total_score: ""
  },
  {
    name: "Your Old Roomate",
    photo:
      "https://bloximages.chicago2.vip.townnews.com/nwitimes.com/content/tncms/assets/v3/editorial/0/d9/0d98cbc7-0408-518e-a67d-50ba01ca1bfa/5a7e4016d73b4.image.jpg",
    scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1],
    // total_score: ""
  },
  {
    name: "This Fella",
    photo: "https://www.victoria.ac.nz/images/staffpics/guy-sinclair.jpg",
    scores: [5, 1, 3, 2, 5, 4, 3, 2, 1, 1],
    // total_score: ""
  }
];

