import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { decodeJWT } from "../utils/utils";
import Navbar from "../components/Navbar/Navbar";

const Root = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem("token");

		if (!token) {
			navigate("/auth/login");
		}

		const tokenData = decodeJWT();

		console.log(tokenData);

		if (!tokenData.email) {
			localStorage.removeItem("token");
			navigate("/auth/login");
		}
	}, []);

	return (
		<section>
			<Navbar />
			<section style={{ padding: "1rem" }}>
				<Outlet />
			</section>
		</section>
	);
};
export default Root;
