const fs = require("fs");
// const pdf = require('html-pdf');
// const html = fs.readFileSync('./index.html', 'utf8');
// const options = { format: 'Letter' };
const axios = require("axios");
const inquirer = require("inquirer");

const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};


init();


function init() {
  inquirer
    .prompt([
      {
        message: "Enter your GitHub username:",
        name: "username"
      },
      {
        type: "list",
        message: "What is your preferred color?",
        name: "colors",
        choices: [
          "green",
          "blue",
          "pink"
        ]
      }
    ])
    .then(function ({ username, colors }) {
      axios
        .get("https://api.github.com/users/" + username)
        .then(function (res) {
          console.log(colors);
          console.log("Login:", res.data.login);
          //User Avatar
          console.log("Name:", res.data.name);
          console.log("Location:", res.data.location);
          console.log("Public Repos:", res.data.public_repos);
          console.log("Followers:", res.data.followers);
          console.log("Following: ", res.data.following);
          console.log("GitHub Url:", res.data.html_url);
          const userHTML = `<!DOCTYPE html>
            <html lang="en">
               <head>
                  <meta charset="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                  <script src="https://code.jquery.com/jquery-3.4.1.js"
                  integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
                  crossorigin="anonymous"></script>
                  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
                  <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
                  <title>GitHub User Profile</title>
                  <style>
                      @page {
                        margin: 0;
                      }
                     *,
                     *::after,
                     *::before {
                     box-sizing: border-box;
                     }
                     html, body {
                     padding: 0;
                     margin: 0;
                     }
                     html, body, .wrapper {
                     height: 100%;
                     }
                     .wrapper {
                     background-color: white;
                     padding-top: 100px;
                     }
                     body {
                     background-color: green;
                     -webkit-print-color-adjust: exact !important;
                     font-family: 'Cabin', sans-serif;
                     }
                     main {
                     background-color: #E9EDEE;
                     height: auto;
                     padding-top: 30px;
                     }
                     h1, h2, h3, h4, h5, h6 {
                     font-family: 'BioRhyme', serif;
                     margin: 0;
                     }
                     h1 {
                     font-size: 4em;
                     }
                     span{
                      font-size: 3em;
                      color: #A9A9A9;
                     }
                     h2 {
                     font-size: 2.5em;
                     }
                     h3 {
                     font-size: 2em;
                     }
                     h4 {
                     font-size: 1.5em;
                     }
                     h5 {
                     font-size: 1.3em;
                     }
                     h6 {
                     font-size: 1.2em;
                     }
                     .photo-header {
                     position: relative;
                     margin: 0 auto;
                     margin-bottom: -50px;
                     display: flex;
                     justify-content: center;
                     flex-wrap: wrap;
                     background-color: green;
                     color: green;
                     padding: 10px;
                     width: 95%;
                     border-radius: 6px;
                     }
                     .photo-header img {
                     width: 250px;
                     height: 250px;
                     border-radius: 50%;
                     object-fit: cover;
                     margin-top: -75px;
                     border: 6px solid green;
                     box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
                     }
                     .photo-header h1, .photo-header h2 {
                     width: 100%;
                     text-align: center;
                     }
                     .photo-header h1 {
                     margin-top: 10px;
                     }
                     .links-nav {
                     width: 100%;
                     text-align: center;
                     padding: 20px 0;
                     font-size: 1.1em;
                     }
                     .nav-link {
                     display: inline-block;
                     margin: 5px 10px;
                     }
                     .workExp-date {
                     font-style: italic;
                     font-size: .7em;
                     text-align: right;
                     margin-top: 10px;
                     }
                     .container {
                     padding: 50px;
                     padding-left: 100px;
                     padding-right: 100px;
                     }
          
                     .row {
                       display: flex;
                       flex-wrap: wrap;
                       justify-content: space-between;
                       margin-top: 20px;
                       margin-bottom: 20px;
                     }
          
                     .card {
                       padding: 20px;
                       border-radius: 6px;
                       background-color: green;
                       color: white;
                       margin: 20px;
                     }
          
                     .col {
                     flex: 1;
                     text-align: center;
                     }
          
                     a, a:hover {
                     text-decoration: none;
                     color: inherit;
                     font-weight: bold;
                     }
          
                     @media print { 
                      body { 
                        zoom: .75; 
                      } 
                     }
                  </style>
               </head>
               <body>
               <h1>Hi!<br>My name is <span>${res.data.name}</span></h1>
               <nav>
                <a href="/html/">${res.data.location}</a> |
                <a href="${res.data.html_url}">GitHub</a> 
               </nav>
               <h2>${res.data.login}</h2>
               <div>${res.data.name}</div>
               console.log("Location:", res.data.location);
               console.log("Public Repos:", res.data.public_repos);
               console.log("Followers:", res.data.followers);
               console.log("Following: ", res.data.following);
               console.log("GitHub Url:", res.data.html_url);

               </body>
                  
            </html>`
          fs.writeFile('user.html', userHTML, function (err) {
            if (err) console.log(err)
          })
        })
        .catch(function (error) {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
    });
}


// pdf.create(html, options).toFile('./user-profile.pdf', function(err, res) {
//   if (err) return console.log(err);
//   console.log(res); // { filename: '/user-profile.pdf' }
// });



// const number = function returnNumber() {
//   return 5
// }
// getNumber(number)

// function getNumber(num) {
//   console.log(num + 10)
// }