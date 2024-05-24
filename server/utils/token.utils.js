const jwt = require("jsonwebtoken");

const SECRET_KEY =
	"AzzwjNo4Mod1fzjkuOdITh/eZ4GhzyW6rwLyiBQBo15SZJHDse65IaG20qJFf/bpzeg6rRZm/rUQx2C7maOYLlNW791/bKppOKLzIrOMChps4mBUTdrP3gtrVHGRiX3nNfIu7I7SdDEsRVvZO/a0IaA8cxONXFFR+azEwBdmPZcNFm60ZEcEBCkSAdUZq84L0JEqxmC/HLQp7fzKF6rH2F6sG3WNkl9tUVcucx7PQFbnAIiCadHA407Z6C/ExB0/uVVqD3p0+Q5l2EZu/r8f/eFYp9P4FkaNxcZdMODVNi7o2oVd6EXzS9UO5essy9bCSsODbZbdKcMVd5ktIIK8uQ==";

const generateAccessToken = (email) => {
	return jwt.sign({ email }, SECRET_KEY);
};

// here usually we use .env but for ease of use i have hardcoded it

module.exports = { generateAccessToken, SECRET_KEY };
