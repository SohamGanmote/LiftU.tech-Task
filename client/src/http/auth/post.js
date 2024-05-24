import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// here usually we use .env but for ease of use i have hardcoded it

export const handelLogin = async ({ email, password }) => {
	const payload = {
		email,
		password,
	};

	try {
		const response = await axios.post(`${baseUrl}/auth/login`, payload);
		let token = response.data?.token;
		if (!token) return;
		localStorage.setItem("token", token);
		return token;
	} catch (error) {
		console.error("Error fetching data: ", error);
		alert("Incorrect Credentials");
	}
};

export const handelRegister = async ({ email, password }) => {
	const payload = {
		email,
		password,
	};

	try {
		const response = await axios.post(`${baseUrl}/auth/register`, payload);
		let token = response.data?.token;
		localStorage.setItem("token", token);
		return token;
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};
