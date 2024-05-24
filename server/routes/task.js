const express = require("express");
const task = require("../controller/task");
const verifyJWT = require("../middleware/auth.middleware");

const router = express.Router();

router.get("", verifyJWT, task.getTask);
router.get("/:id", verifyJWT, task.getTaskByID);
router.post("", verifyJWT, task.createTask);
router.put("/:id", verifyJWT, task.updateTask);
router.delete("/:id", verifyJWT, task.deleteTask);

module.exports = router;
