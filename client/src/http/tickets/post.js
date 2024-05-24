import axios from "axios";

const baseUrl = "http://localhost:8080/api";

// here usually we use .env but for ease of use i have hardcoded it

export const handelAddTicket = async ({ title, description }) => {
	const payload = {
		title,
		description,
	};

	if (title.trim() === "" || description.trim() === "")
		return { error: "empty" };

	try {
		const response = await axios.post(`${baseUrl}/task`, payload, {
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
