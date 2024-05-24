import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Root from "./pages/Root";
import AuthRoot from "./pages/auth/AuthRoot";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
import NotFound from "./pages/notFound/NotFound";

const Router = () => {
	const router = createBrowserRouter([
		{
			path: "/auth",
			element: <AuthRoot />,
			errorElement: <NotFound />,
			children: [
				{ path: "login", element: <Login /> },
				{ path: "signup", element: <Signup /> },
			],
		},
		{
			path: "/",
			element: <Root />,
			errorElement: <NotFound />,
			children: [{ index: true, element: <Home /> }],
		},
	]);

	return <RouterProvider router={router} />;
};

export default Router;
