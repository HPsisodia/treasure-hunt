const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');


global.appRoot = path.resolve(__dirname);

// Logs Cache controlling Https

require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// const static_path = path.join(__dirname, '/public/images');
// console.log(__dirname, '/views/images');
app.use(express.static('public'));
app.set("views", path.join(__dirname, "/public/views"));
app.set("view engine", "hbs");

const dashboardRoute = require('./routes/dashboard');


app.use("/", dashboardRoute);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
  });  
