import { Col, Row, Button,Card } from 'antd';
import { useState } from 'react';
import ModalForm from './ModalForm';
import { reportTransfer } from '../../apis/transfer';
import { messageAlert } from '../../apis/sweetAlert';
import TransferTable from './TransferTable';


const Tranfer = () => {
  const [data, setData] = useState([]);
  const report = async () => {
    const response = await reportTransfer({ user_id: localStorage.getItem('userId') });
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
          <Button shape="round" onClick={report}>Consult Transfers</Button>
        </Col>
      </Row>
      <br />
      <Card title="User's Transfer between bank accounts" style={{ marginTop: '20px' }} bordered={false}>
        <Row>
          <Col span={24}>
            <TransferTable dataSource={data} />
          </Col>
        </Row>
      </Card>
    </>
  );
}

export default Tranfer;