import {
  Button, Modal, Form,
  Input,
  Select,
  Row,
  Col,
  InputNumber,
} from 'antd';
import React, { useState, } from 'react';
import { getListBank } from '../../apis/transactionOperation';
import { createTransfer } from '../../apis/transfer'
import { messageAlert } from '../../apis/sweetAlert';
const { Option } = Select;

const ModalForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bankAccounts, setBankAccounts] = useState([]);

  const [form] = Form.useForm();

  const modalVisible = async () => {
    form.resetFields();
    const response3 = await getListBank({ user_id: localStorage.getItem('userId') });
    setBankAccounts(response3.data);
    setIsModalVisible(true);
  }

  const onFinish = async (values) => {
    try {
      const data = {
        ...values,
        user_id: localStorage.getItem('userId'),
      }
      console.log('values from Form', data);
       const response = await createTransfer(data);
       console.log(response);
       messageAlert('success', response.message);
       form.resetFields();
       setIsModalVisible(false);
    } catch (error) {
      messageAlert('error', 'Something went wrong');
      console.log(error);
    }
  }

  return (
    <>
      <Button type="primary" onClick={modalVisible}>Add new</Button>
      <Modal title="Account Details" visible={isModalVisible} closable={false} footer={null} >
        <Form
          form={form}
          name="transfer"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                type: 'text',
                message: 'The input is not valid!',
              },
              {
                required: true,
                message: 'Please input description!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="account_id" label="Origin Bank account" rules={[{ required: true, message: 'Please select one bank acccount', }]}>
            <Select
              placeholder="Select one bank account origin"
            >
              {
                bankAccounts.map((item, index) => {
                  return <Option key={index} value={item.ID}>{item.NAME}</Option>
                }
                )
              }
            </Select>
          </Form.Item>
          <Form.Item name="account_id_destination" label="Destination Bank account destination" rules={[{ required: true, message: 'Please select one bank acccount', }]}>
            <Select
              placeholder="Select one bank account"
            >
              {
                bankAccounts.map((item, index) => {
                  return <Option key={index} value={item.ID}>{item.NAME}</Option>
                }
                )
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount transfer"
            rules={[
              {
                type: 'text',
                message: 'The input is not valid!',
              },
              {
                required: true,
                message: 'Please input transfer amount!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item style={{ textAlign: 'right' }}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <Button type="danger" onClick={() => setIsModalVisible(false)}>
              Cancel
            </Button>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
}

export default ModalForm;