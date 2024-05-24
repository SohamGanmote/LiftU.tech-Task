import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 16 },
};

const AddTicket = ({ visible, onCreate, onCancel }) => {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		form.resetFields();
		onCreate(values);
	};

	return (
		<Modal
			visible={visible}
			title="Add New Ticket"
			okText="Add"
			cancelText="Cancel"
			onOk={() => form.submit()}
			onCancel={onCancel}
			destroyOnClose={true}
		>
			<Form form={form} {...layout} name="add-ticket-form" onFinish={onFinish}>
				<Form.Item
					name="title"
					label="Title"
					rules={[{ required: true, message: "Please input the title!" }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					name="description"
					label="Description"
					rules={[{ required: true, message: "Please input the description!" }]}
				>
					<Input.TextArea />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default AddTicket;
