import { useEffect, useState } from "react";
import CardComponent from "../../components/Cards/CardComponent";
import { useTicket, useTicketUpdate } from "../../context/TicketsContext";
import { decodeJWT } from "../../utils/utils";
import { Select } from "antd";

const Home = () => {
	const tickets = useTicket();
	const refetch = useTicketUpdate();

	const [statusFilter, setStatusFilter] = useState("All");

	const handleStatusChange = (value) => {
		setStatusFilter(value);
	};

	useEffect(() => {
		const token = decodeJWT();
		if (token) refetch(statusFilter);
	}, [statusFilter]);

	return (
		<div>
			<Select
				defaultValue="All"
				style={{ width: 200, marginBottom: 20 }}
				onChange={handleStatusChange}
			>
				<Option value="All">All</Option>
				<Option value="To Do">To Do</Option>
				<Option value="In Progress">In Progress</Option>
				<Option value="Done">Done</Option>
			</Select>
			{tickets && <CardComponent data={tickets} />}
		</div>
	);
};
export default Home;
