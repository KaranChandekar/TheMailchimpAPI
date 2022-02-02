// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { options } = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us14.api.mailchimp.com/3.0/lists/e32d240385";

  const options = {
    method: "POST",
    auth: "karanchandekar:c92ab399cdd92743d60b93ab4d63eff6-us14",
  };
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

// API Key
// c92ab399cdd92743d60b93ab4d63eff6-us14

// List Id
// e32d240385
