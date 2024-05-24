import "./App.css";
import Router from "./Router";
import { TicketsContext } from "./context/TicketsContext";

const App = () => {
	return (
		<>
			<TicketsContext>
				<Router />
			</TicketsContext>
		</>
	);
};

export default App;
