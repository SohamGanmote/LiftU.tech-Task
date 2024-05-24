import React from "react";
import { Card, Tag, Dropdown, Menu, Button, Popconfirm } from "antd";
import {
	MoreOutlined,
	DeleteOutlined,
	PlusCircleFilled,
} from "@ant-design/icons";
import { updateStatus } from "../../http/tickets/put";
import { deleteTicket } from "../../http/tickets/delete";

const getStatusColor = (status) => {
	switch (status) {
		case "In Progress":
			return "orange";
		case "To Do":
			return "red";
		case "Done":
			return "green";
		default:
			return "default";
	}
};

const CardComponent = ({ data, refetch }) => {
	const handleChangeStatus = async (id, newStatus) => {
		const data = await updateStatus({ id, status: newStatus });
		if (data.data) refetch();
	};

	const handleDelete = async (id) => {
		const data = await deleteTicket({ id });
		if (data.data) refetch();
	};

	const menu = (id) => (
		<Menu onClick={({ key }) => handleChangeStatus(id, key)}>
			<Menu.Item
				key="In Progress"
				icon={<PlusCircleFilled style={{ color: "orange" }} />}
			>
				In Progress
			</Menu.Item>
			<Menu.Item
				key="To Do"
				icon={<PlusCircleFilled style={{ color: "red" }} />}
			>
				To Do
			</Menu.Item>
			<Menu.Item
				key="Done"
				icon={<PlusCircleFilled style={{ color: "green" }} />}
			>
				Done
			</Menu.Item>
		</Menu>
	);

	return (
		<div style={{ display: "flex", flexWrap: "wrap" }}>
			{data.map((item) => (
				<Card
					key={item._id}
					title={item.title}
					style={{ width: 300, margin: "0.5rem" }}
					extra={
						<>
							<Popconfirm
								title="Are you sure to delete this task?"
								onConfirm={() => handleDelete(item._id)}
								okText="Yes"
								cancelText="No"
							>
								<Button
									type="text"
									icon={<DeleteOutlined />}
									style={{ marginLeft: "0.5rem" }}
								/>
							</Popconfirm>

							<Dropdown overlay={menu(item._id)}>
								<Button type="text" icon={<MoreOutlined />} />
							</Dropdown>
						</>
					}
				>
					<p>{item.description}</p>
					<Tag color={getStatusColor(item.status)}>{item.status}</Tag>
				</Card>
			))}
		</div>
	);
};

export default CardComponent;
