import {
  Button, Modal, Form,
  Input,
  Select,
  Row,
  Col,
  InputNumber,
} from 'antd';
import React, { useState, } from 'react';
import { transactionType, transactionCategories, getListBank, createTransaction } from '../../apis/transactionOperation';
import { messageAlert } from '../../apis/sweetAlert';
const { Option } = Select;

const ModalForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [typeTransaction, setTypeTransaction] = useState([]);
  const [categories, setCategories] = useState([]);
  const [bankAccounts, setBankAccounts] = useState([]);

  const [form] = Form.useForm();

  const modalVisible = async () => {
    form.resetFields();
    const response = await transactionType();
    const reponse2 = await transactionCategories();
    const response3 = await getListBank({ user_id: localStorage.getItem('userId') });
    setTypeTransaction(response.data);
    setCategories(reponse2.data);
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
      const response = await createTransaction(data);
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
          <Form.Item name="account_id" label="Bank accounts" rules={[{ required: true, message: 'Please select one bank acccount', }]}>
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
          <Form.Item name="category_id" label="Type categories" rules={[{ required: true, message: 'Please select type category', }]}>
            <Select
              placeholder="Select type category"
            >
              {
                categories.map((item, index) => {
                  return <Option key={index} value={item.ID}>{item.NAME}</Option>
                }
                )
              }
            </Select>
          </Form.Item>
          <Form.Item name="typeTransaction_id" label="Type transaction" rules={[{ required: true, message: 'Please select type currency', }]}>
            <Select
              placeholder="Select type transaction"
            >
              {
                typeTransaction.map((item, index) => {
                  return <Option key={index} value={item.ID}>{item.NAME}</Option>
                }
                )
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="amount"
            label="Amount transaction"
            rules={[
              {
                type: 'text',
                message: 'The input is not valid!',
              },
              {
                required: true,
                message: 'Please input number account!',
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