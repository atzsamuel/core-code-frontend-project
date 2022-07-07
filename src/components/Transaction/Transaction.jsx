import { useState } from 'react';
import { Col, Row, Button, Card } from 'antd';
import ModalForm from './ModalForm';
import { reportTransaction } from '../../apis/transactionOperation';
import TransactionTable from './TransactionTable';
import { messageAlert } from '../../apis/sweetAlert';
const Transactions = () => {
  const [data, setData] = useState([]);

  const report = async () => {
    const response = await reportTransaction({ user_id: localStorage.getItem('userId') });
    setData(response.data);
    messageAlert('success', response.message);
    console.log(response);
  }
  return (
    <>
      <Row>
        <Col span={2}>
          <ModalForm />
        </Col>
        <Col span={2}>
          <Button shape="round" onClick={report}>Consult Transactions</Button>
        </Col>
      </Row>
      <br />
      <Card title="User's Transaction" style={{ marginTop: '20px' }} bordered={false}>
        <Row>
          <Col span={24}>
            <TransactionTable dataSource={data} />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Transactions;