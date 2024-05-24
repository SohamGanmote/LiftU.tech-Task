import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// here usually we use .env but for ease of use i have hardcoded it

export const getTickets = async (filterBy) => {
	try {
		const response = await axios.get(
			`${baseUrl}/task?filterBy=${filterBy || ""}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
		);
		let data = response.data.data;
		return data;
	} catch (error) {
		console.error("Error fetching data: ", error);
	}
};
