const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const Controller = require("./modules/controller")
app.use(Controller);
app.listen(port, () =>
  console.log(`db_systel web service listening on port ${port}!`)
);
