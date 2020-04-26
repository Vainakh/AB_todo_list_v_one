

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){

  switch( new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;case 0:
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    default:
    console.log("Error: current day is equal to: " + currentDay);

  }

  if (day === 6 || day === 0){
    today = "Weekend";
  } else {
    today = "Weekday";
  }

  res.render("list", { weekday: day });

});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
