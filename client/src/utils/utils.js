export const handelLogout = () => {
	localStorage.removeItem("token");
	window.location.reload();
};

export const decodeJWT = () => {
	try {
		const token = localStorage.getItem("token");
		if (!token) return;
		const payload = token.split(".")[1];
		const decodedPayload = atob(payload);
		const userObj = JSON.parse(decodedPayload);
		return userObj;
	} catch (error) {
		console.error("Error decoding JWT token:", error);
		return null;
	}
};
