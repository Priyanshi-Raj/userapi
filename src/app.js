const express = require("express");
require("./db/connection");
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");


const User = require("./models/users");
const userRouter = require("./routers/users");

const app = express();
 const port = process.env.PORT || 4600;
app.use(express.json());

app.use(userRouter);

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
