import React from "react";
import { Form, Input, Button, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { handelRegister } from "../../../http/auth/post";

const { Title } = Typography;

const Signup = () => {
	const navigate = useNavigate();

	const onFinish = async (values) => {
		const token = await handelRegister(values);
		if (token) navigate("/");
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<div style={{ width: "300px" }}>
				<Title level={3} style={{ textAlign: "center", marginBottom: "24px" }}>
					Sign Up
				</Title>
				<Form name="signup_form" onFinish={onFinish}>
					<Form.Item
						name="email"
						rules={[
							{
								required: true,
								type: "email",
								message: "Please enter a valid email!",
							},
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="Email" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								min: 6,
								message: "Password must be at least 6 characters!",
							},
						]}
					>
						<Input.Password prefix={<LockOutlined />} placeholder="Password" />
					</Form.Item>
					<Form.Item
						name="confirm"
						dependencies={["password"]}
						hasFeedback
						rules={[
							{ required: true, message: "Please confirm your password!" },
							({ getFieldValue }) => ({
								validator(_, value) {
									if (!value || getFieldValue("password") === value) {
										return Promise.resolve();
									}
									return Promise.reject(
										new Error(
											"The two passwords that you entered do not match!"
										)
									);
								},
							}),
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							placeholder="Confirm Password"
						/>
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ width: "100%" }}>
							Sign Up
						</Button>
					</Form.Item>
				</Form>
				<div style={{ textAlign: "center" }}>
					Already have an account? <Link to="/auth/login">Log in now!</Link>
				</div>
			</div>
		</div>
	);
};

export default Signup;
