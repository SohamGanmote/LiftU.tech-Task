const Task = require("../models/task");

const createTask = async (req, res) => {
	try {
		const { title, description, status } = req.body;

		if (!title || !description) {
			return res.status(400).json({ message: "missing fields" });
		}

		const task = new Task({
			title,
			description,
			status,
		});

		const result = await task.save();

		res.send({ message: "Task added", result });
	} catch (error) {
		res.send({ message: "Failed", error });
	}
};

const getTask = async (req, res) => {
	try {
		const { filterBy } = req.query;
		if (filterBy !== "All") {
			const data = await Task.find({ status: filterBy });
			return res.send({ message: "Done!", data });
		}
		const data = await Task.find();
		res.send({ message: "Done!", data });
	} catch (error) {
		res.send({ message: "Failed", error });
	}
};

const getTaskByID = async (req, res) => {
	try {
		const { id } = req.params;

		const data = await Task.findById({ _id: id });
		res.send({ message: "Done! by Id", data });
	} catch (error) {
		res.send({ message: "Failed", error });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id } = req.params;

		const { title, description, status } = req.body;

		const data = await Task.updateOne(
			{ _id: id },
			{ title, description, status }
		);

		res.send({ message: "Updated! by Id", data });
	} catch (error) {
		res.send({ message: "Failed", error });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;

		const data = await Task.deleteOne({ _id: id });

		res.send({ message: "Deleted! by Id", data });
	} catch (error) {
		res.send({ message: "Failed", error });
	}
};

module.exports = { createTask, getTask, getTaskByID, updateTask, deleteTask };
