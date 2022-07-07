import {
  Button, Modal, Form,
  Input,
  Select,
  Row,
  Col,
  InputNumber,
} from 'antd';
import React, { useState, } from 'react';
import { typesAccount, bankCurrencies, createBankAccount } from '../../apis/bankAccount';
import { messageAlert } from '../../apis/sweetAlert';
const { Option } = Select;

const ModalForm = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [typeAccount, setTypeAccount] = useState([]);
  const [currency, setCurrency] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  const [form] = Form.useForm();

  const modalVisible = async () => {
    form.resetFields();
    const response = await typesAccount();
    const reponseCurrency = await bankCurrencies();
    setTypeAccount(response.data);
    setCurrency(reponseCurrency.data);
    setIsModalVisible(true);
  }

  const onFinish = async (values) => {
    try {
      const data = {
        ...values,
        user_id: localStorage.getItem('userId'),
        account_status: 1
      }
      console.log('values from Form', data);
      const response = await createBankAccount(data);
      console.log(response);
      messageAlert('success', response.message);
      //const response2 = await reportTransaction({ user_id: localStorage.getItem('userId') });
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
          name="bankAccount"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                type: 'text',
                message: 'The input is not valid!',
              },
              {
                required: true,
                message: 'Please input name account!',
              },
            ]}
          >
            <Input />
          </Form.Item>
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
          <Form.Item name="type_id" label="Type" rules={[{ required: true, message: 'Please select type acccount', }]}>
            <Select
              placeholder="Select type account"
            >
              {
                typeAccount.map((item, index) => {
                  return <Option key={index} value={item.ID}>{item.NAME}</Option>
                }
                )
              }
            </Select>
          </Form.Item>
          <Form.Item name="currency_id" label="Type currency" rules={[{ required: true, message: 'Please select type currency', }]}>
            <Select
              placeholder="Select type currency"
            >
              {
                currency.map((item, index) => {
                  return <Option key={index} value={item.ID}>{item.NAME}</Option>
                }
                )
              }
            </Select>
          </Form.Item>
          <Form.Item
            name="account_number"
            label="Account Number"
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
          <Form.Item
            name="account_balance"
            label="Account Balance"
            rules={[
              {
                type: 'text',
                message: 'The input is not valid!',
              },
              {
                required: true,
                message: 'Please input account balance!',
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