import { useEffect, useState } from "react";
import { getTickets } from "../../http/tickets/get";
import CardComponent from "../../components/Cards/CardComponent";

const Home = () => {
	const [tickets, setTickets] = useState();

	const fetchTickets = async () => {
		const data = await getTickets();
		setTickets(data);
	};

	useEffect(() => {
		fetchTickets();
	}, []);

	return (
		<>{tickets && <CardComponent data={tickets} refetch={fetchTickets} />}</>
	);
};
export default Home;
