const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/mongoose");
const userRouter = require("./routers/user");
const User = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);

app.listen(process.env.PORT || 5000);
