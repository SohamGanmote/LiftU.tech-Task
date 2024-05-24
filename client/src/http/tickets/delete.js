import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// here usually we use .env but for ease of use i have hardcoded it

export const deleteTicket = async ({ id }) => {
	try {
		const response = await axios.delete(`${baseUrl}/task/${id}`, {
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
