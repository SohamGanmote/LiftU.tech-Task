const express = require("express");
const user = require("../controller/user");

const router = express.Router();

router.post("/login", user.loginUser);
router.post("/register", user.registerUser);

module.exports = router;
