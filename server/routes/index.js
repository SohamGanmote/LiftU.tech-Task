const express = require("express");
const taskRouter = require("./task");
const userRouter = require("./user");
const router = express.Router();

router.use("/task", taskRouter);
router.use("/auth", userRouter);

module.exports = router;
