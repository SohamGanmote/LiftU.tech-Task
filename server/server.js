const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes");
const morgan = require("morgan");

const app = express();

const dbURL =
	"mongodb+srv://soham:soham@mango.ql1ijob.mongodb.net/Task_Manager?retryWrites=true&w=majority&appName=mango";

mongoose
	.connect(dbURL)
	.then((data) => {
		console.log("MongoDB connected");
		app.listen(8080, () => {
			console.log("Server Started on port : 8080");
		});
	})
	.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use("/api", router);
