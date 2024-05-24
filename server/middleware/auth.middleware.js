const { SECRET_KEY } = require("../utils/token.utils");
const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
	try {
		const authHeader = req.get("Authorization");

		if (!authHeader) {
			return res.status(401).json({ message: "Not authenticated" });
		}

		const token = authHeader?.split(" ")[1];

		if (!SECRET_KEY) {
			return res
				.status(500)
				.json({ message: "Internal server error: Secret key not provided" });
		}

		let decodedToken;

		decodedToken = jwt.verify(token, SECRET_KEY);

		if (!decodedToken) {
			return res.status(401).json({ message: "Not authenticated" });
		}

		if (!decodedToken.email)
			return res.status(401).json({ message: "Not authenticated" });

		next();
	} catch (error) {
		return res.status(500).json({ message: "Internal server error", error });
	}
};

module.exports = verifyJWT;
