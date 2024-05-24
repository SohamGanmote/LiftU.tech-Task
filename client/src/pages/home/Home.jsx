import { useEffect } from "react";
import CardComponent from "../../components/Cards/CardComponent";
import { useTicket, useTicketUpdate } from "../../context/TicketsContext";
import { decodeJWT } from "../../utils/utils";

const Home = () => {
	const tickets = useTicket();
	const refetch = useTicketUpdate();

	useEffect(() => {
		const token = decodeJWT();
		if (token) refetch();
	}, []);

	return <>{tickets && <CardComponent data={tickets} />}</>;
};
export default Home;
