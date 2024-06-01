import "./App.css";
import Router from "./Router";
import { TicketsContext } from "./context/TicketsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const querryProvider = new QueryClient();

const App = () => {
	return (
		<>
			<QueryClientProvider client={querryProvider}>
				<TicketsContext>
					<Router />
				</TicketsContext>
			</QueryClientProvider>
		</>
	);
};

export default App;
