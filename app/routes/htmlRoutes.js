const express = require("express");
const app = express();

//routes -- I tried to get these into their own files and reference those files, but could not get the __dirname correct? 
// ../app/public/home.html ... ??????
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./app/public/home.html"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/survey.html"));
  });