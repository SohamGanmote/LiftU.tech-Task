const bcrypt = require("bcrypt");
const User = require("../models/user");
const generateAccessToken = require("../utils/token.utils");

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "missing fields" });
		}

		const findCredentials = await User.find({ email });

		if (findCredentials.length <= 0)
			return res.status(400).json({ message: "wrong credentials" });

		bcrypt.compare(password, findCredentials[0].password, (err, result) => {
			if (err) res.status(500).json({ err: "an error occurred" });

			if (!result) res.status(400).json({ err: "Incorrect password" });
			else {
				const token = generateAccessToken(findCredentials[0]?.email);
				res.status(200).json({ message: "success", token });
			}
		});
	} catch (error) {
		res.send({ message: "Failed", error });
	}
};

const registerUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ err: "missing fields" });
		}
		const account = await User.find({
			email,
		});
		if (account.length !== 0) {
			return res.status(200).json({ err: "Email already exists" });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		const token = generateAccessToken(email);

		const user = new User({
			email,
			password: hashedPassword,
		});
		const result = await user.save();

		res.status(200).json({ message: "success", token, result });
	} catch (error) {
		res.send({ message: "Failed", error });
	}
};

module.exports = { loginUser, registerUser };
