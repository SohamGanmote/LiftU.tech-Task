import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// here usually we use .env but for ease of use i have hardcoded it

export const updateStatus = async ({ id, status }) => {
	const payload = {
		status,
	};

	try {
		const response = await axios.put(`${baseUrl}/task/${id}`, payload, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			},
		});
		let data = response.data;
		return data;
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};
