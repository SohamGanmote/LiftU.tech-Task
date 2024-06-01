import { useEffect, useState } from "react";
import CardComponent from "../../components/Cards/CardComponent";
import { useTicket, useTicketUpdate } from "../../context/TicketsContext";
import { decodeJWT } from "../../utils/utils";
import { Button, Select, Switch } from "antd";
import { useQuery } from "@tanstack/react-query";
import { getTicketsDetailsHandler } from "../../http/tickets/get";
import DataTable from "./DataTable";

const Home = () => {
	// const tickets = useTicket();
	const refetch = useTicketUpdate();

	const [statusFilter, setStatusFilter] = useState("All");

	const [dataShowToggel, setDataShowToggel] = useState(false);

	const dataShowToggleHandler = () => setDataShowToggel((prev) => !prev);

	const {
		data: tickets,
		isLoading: ticketsIsLoading,
		isError: ticketsError,
	} = useQuery({
		queryKey: ["get-tickets"],
		queryFn: getTicketsDetailsHandler,
	});

	const handleStatusChange = (value) => {
		setStatusFilter(value);
	};

	useEffect(() => {
		const token = decodeJWT();
		if (token) refetch(statusFilter);
	}, [statusFilter]);

	return (
		<div>
			<Switch
				defaultChecked={dataShowToggel}
				onChange={dataShowToggleHandler}
			/>
			<Select
				defaultValue="All"
				style={{ width: 200, margin: 10 }}
				onChange={handleStatusChange}
			>
				<Option value="All">All</Option>
				<Option value="To Do">To Do</Option>
				<Option value="In Progress">In Progress</Option>
				<Option value="Done">Done</Option>
			</Select>

			{dataShowToggel ? (
				ticketsIsLoading ? (
					<>Loading..</>
				) : (
					<CardComponent data={tickets} statusFilter={statusFilter} />
				)
			) : (
				<DataTable data={tickets} />
			)}
		</div>
	);
};
export default Home;
