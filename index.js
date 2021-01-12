const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
const bodyParser = require("body-parser");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongodbURL);

const app = express();

/**
 * bodyParser helps get the data from the request payload
 */

//Start middleware
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());
//End middleware

/**
 * require('./routes/authRoutes') returns a function
 * That function is called with the argument (app)
 */

require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);

/**
 * For production React Routes
 */

if (process.env.NODE_ENV === "production") {
  /**
   * Express will serve production assets
   * Files like main.ja file or main.css file!!
   */
  app.use(express.static("client/build"));
    
  /**
   * Express if doesnot recognise the route
   * serve up the index.html file
   */
  const path = require('path')
  app.get('*', (req,res)=>{
      res.sendFile(path.resolve(--__dirname,'client','build','index.html'))
  })
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
