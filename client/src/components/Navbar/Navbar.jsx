import React, { useState } from "react";
import { Menu, Dropdown, Avatar, Button } from "antd";
import { HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "antd/dist/reset.css";
import { decodeJWT, handelLogout } from "../../utils/utils";
import AddTicket from "../../pages/addTicket/AddTicket";
import { handelAddTicket } from "../../http/tickets/post";
import { useTicketUpdate } from "../../context/TicketsContext";

const Navbar = () => {
	const token = decodeJWT();
	const email = token?.email;

	const refetch = useTicketUpdate();

	const [visible, setVisible] = useState(false);

	const addNewTicket = async (values) => {
		const data = await handelAddTicket(values);
		if (data.result) refetch();
		setVisible(false);
	};

	const menuItems = [
		{
			key: "email",
			label: <span>{email}</span>,
		},
		{
			key: "logout",
			label: "Logout",
			onClick: handelLogout,
		},
	];

	const menu = {
		items: menuItems,
	};

	const navItems = [
		{
			key: "home",
			icon: <HomeOutlined />,
			label: <Link to="/">Tickets</Link>,
		},
		{
			key: "create",
			icon: <PlusOutlined />,
			label: (
				<Link to="/" onClick={() => setVisible(true)}>
					Create Ticket
				</Link>
			),
		},
		{
			key: "profile",
			label: (
				<Dropdown menu={menu} trigger={["click"]}>
					<Button
						type="link"
						onClick={(e) => e.preventDefault()}
						style={{ padding: 0 }}
					>
						<Avatar
							icon={
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3tB3MPS8O_sa6NWv6pm2zCOtCZXqaez7qxFsxFpd-A&s" />
							}
							size={"large"}
						/>
					</Button>
				</Dropdown>
			),
			style: { marginLeft: "auto" },
		},
	];

	return (
		<>
			<Menu
				mode="horizontal"
				style={{ background: "#EEF7FF", padding: "0.5rem 1rem" }}
				items={navItems}
			/>

			<AddTicket
				visible={visible}
				onCreate={addNewTicket}
				onCancel={() => setVisible(false)}
			/>
		</>
	);
};

export default Navbar;
