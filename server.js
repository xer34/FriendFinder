// dependencies
const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
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
  res.sendFile(path.join(__dirname + "/app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});


app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
  var friends = req.body;

  waitlist.push(friends);

  res.json(friends);
});
// again, going to fix pathing and put this into its own file when I get to it
var friends = [
  {
      "name":"TestGuy",
      "photo":"https://images.fineartamerica.com/images-medium-large-5/jack-skellington-movie-prints.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    }, {
      "name":"TestGuy2",
      "photo":"https://images.fineartamerica.com/images-medium-large-5/jack-skellington-movie-prints.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    },{
      "name":"TestGuy3",
      "photo":"https://images.fineartamerica.com/images-medium-large-5/jack-skellington-movie-prints.jpg",
      "scores":[
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
        ]
    },
  ]