import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { handelLogin } from "../../../http/auth/post";

const Login = () => {
	const navigate = useNavigate();

	const onFinish = async (values) => {
		const token = await handelLogin(values);
		if (token) navigate("/");
	};

	return (
		<>
			<Button id="notificationBtn">Click</Button>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "100vh",
				}}
			>
				<div style={{ width: "300px" }}>
					<h2 style={{ textAlign: "center", marginBottom: "24px" }}>Log in</h2>
					<Form
						name="login_form"
						initialValues={{ remember: true }}
						onFinish={onFinish}
					>
						<Form.Item
							name="email"
							rules={[
								{ required: true, message: "Please input your email!" },
								{ type: "email", message: "Please enter a valid email!" },
							]}
						>
							<Input prefix={<UserOutlined />} placeholder="Email" />
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{ required: true, message: "Please input your password!" },
							]}
						>
							<Input.Password
								prefix={<LockOutlined />}
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item>
							<Button
								type="primary"
								htmlType="submit"
								style={{ width: "100%" }}
							>
								Log in
							</Button>
						</Form.Item>
					</Form>
					<div style={{ textAlign: "center" }}>
						Or <Link to="/auth/signup">register now!</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
