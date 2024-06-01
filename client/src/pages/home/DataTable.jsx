import { Table, Tag, Dropdown, Menu, Button } from "antd";
import { updateStatus } from "../../http/tickets/put";
import { MoreOutlined } from "@ant-design/icons";
import { useQueryClient } from "@tanstack/react-query";

const DataTable = ({ data }) => {
	const queryClient = useQueryClient();

	const handleChangeStatus = async (id, newStatus) => {
		const data = await updateStatus({ id, status: newStatus });
		if (data.data) queryClient.invalidateQueries(["get-tickets"]);
	};

	const menu = (id) => (
		<Menu onClick={({ key }) => handleChangeStatus(id, key)}>
			<Menu.Item key="In Progress">In Progress</Menu.Item>
			<Menu.Item key="To Do">To Do</Menu.Item>
			<Menu.Item key="Done">Done</Menu.Item>
		</Menu>
	);

	const columns = [
		{
			title: "Title",
			render: (data) => {
				return <>{data.title}</>;
			},
		},
		{
			title: "Description",
			render: (data) => {
				return <>{data.description}</>;
			},
		},
		{
			title: "Status",
			render: (data) => {
				let color;
				if (data.status === "To Do") color = "red";
				if (data.status === "In Progress") color = "orange";
				if (data.status === "Done") color = "green";
				return <Tag color={color}>{data.status}</Tag>;
			},
		},
		{
			title: "Action",
			render: (data) => {
				return (
					<Dropdown overlay={menu(data._id)}>
						<Button type="text" icon={<MoreOutlined />} />
					</Dropdown>
				);
			},
		},
	];

	return (
		<>
			<Table dataSource={data} columns={columns} />
		</>
	);
};
export default DataTable;
