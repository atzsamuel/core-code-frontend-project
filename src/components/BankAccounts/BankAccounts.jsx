import { Col, Row, Button, Space, Table, Tag } from 'antd';
import { useState } from 'react';
import ModalForm from './ModalForm';
import { listAllAccountBank } from '../../apis/bankAccount';
import { messageAlert } from '../../apis/sweetAlert';
import BankTable from './BankTable'

const BankAccounts = () => {
  const [data, setData] = useState([]);

  const listBank = async () => {
    try {
      console.log('listBank');
      const response = await listAllAccountBank({ user_id: localStorage.getItem('userId') });
      setData(response.data);
      messageAlert('success', response.message);
      console.log(response);
    } catch (error) {
      console.log(error);
      messageAlert('error', 'Something went wrong');
    }
  }
  return (
    <>
      <Row>
        <Col span={2}>
          <ModalForm />
        </Col>
        <Col span={2}>
          <Button onClick={listBank}>Consult</Button>
        </Col>
      </Row>
      <br />
      <Row>
        <BankTable dataSource={data} />
      </Row>
    </>
  );
}

export default BankAccounts;