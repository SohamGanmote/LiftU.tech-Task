import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthRoot = () => {
	const navigate = useNavigate();
	
	useEffect(() => {
		const token = localStorage.getItem("token");

		if (token) {
			navigate("/");
		}
	}, []);

	return (
		<section>
			<Outlet />
		</section>
	);
};
export default AuthRoot;
