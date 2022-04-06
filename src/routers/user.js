const express = require("express");
require("dotenv").config();
const User = require("../models/user");
const router = express.Router();
const { getUsers } = require("../helpers/helpers");

router.get("/users", async (req, res) => {
  try {
    const usersFromDB = await User.find();
    const users = getUsers(usersFromDB);

    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post("/users/new", async (req, res) => {
  const newUser = req.body;

  try {
    const user = new User(newUser);
    await user.save();

    const usersFromDB = await User.find();
    const users = getUsers(usersFromDB);

    res.send(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
