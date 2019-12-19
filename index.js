const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username:",
    name: "username"
  })
  .then(function ({ username }) {
    axios
    .get("https://api.github.com/users/"+username)
    .then(function(res) {
      console.log(res.data);
      console.log("Login:",res.data.login);
      console.log("Name:",res.data.name);
      console.log("Location:",res.data.location);
      console.log("Public Repos:",res.data.public_repos);
      console.log("Followers:",res.data.followers);
      console.log("Following: ",res.data.following);
      console.log("GitHub Url:",res.data.html_url) 
    });
  });

