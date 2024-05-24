import React, { useContext, useState } from "react";
import { getTickets } from "../http/tickets/get";

const TicketContext = React.createContext();
const TicketUpdateContext = React.createContext();

export const useTicket = () => {
	return useContext(TicketContext);
};

export const useTicketUpdate = () => {
	return useContext(TicketUpdateContext);
};

export const TicketsContext = ({ children }) => {
	const [tickets, setTickets] = useState();

	const fetchTickets = async (filterBy) => {
		const data = await getTickets(filterBy);
		setTickets(data);
	};

	return (
		<TicketContext.Provider value={tickets}>
			<TicketUpdateContext.Provider value={fetchTickets}>
				{children}
			</TicketUpdateContext.Provider>
		</TicketContext.Provider>
	);
};
