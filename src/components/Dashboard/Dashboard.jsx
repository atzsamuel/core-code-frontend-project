import { useState, useEffect } from "react";
import { Row, Col, Card, Button } from "antd";
import { Link } from 'react-router-dom';
import { dashboard, reportTransaction } from "../../apis/transactionOperation";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    const dashboardRep = async () => {
      const response = await dashboard({ user_id: localStorage.getItem("userId") });
      const response2 = await reportTransaction({
        user_id: localStorage.getItem("userId"),
      });
      setData(response.data);
      setData2(response2.data);
      console.log(response);
    }
    dashboardRep();
  }
    , []);

  return (
    <>
      <div className="site-card-wrapper">
        <Card title="Bank Accounts">
          <Button type="primary" shape="round" >
            <Link to="/bankaccount">Add new account</Link>
          </Button>
          <Row gutter={16}>
            {
              data.map((item, index) => {
                return (
                  <Col span={8} key={index}>
                    <Card title={item.NAME} bordered={false}>
                      <p>Balance: {item.BALANCE}</p>
                      {item.ACCOUNT_BALANCE}
                    </Card>
                  </Col>
                )
              }
              )
            }
          </Row>
        </Card>
        <br />
        <Card title="Transactions Income/expense">
          <Button type="primary" shape="round" >
            <Link to="/transaction">Add new transaction</Link>
          </Button>
          <Row gutter={16}>
            {
              data2.map((item, index) => {
                return (
                  <Col span={8} key={index}>
                    <Card title={item.TYPE_TRANSACTION} bordered={false}>
                      <p>Date: {item.DATEADDED}</p>
                      <h4 style={{ color: item.TYPE_TRANSACTION == 'Income' ? 'green' : 'red' }}>{item.AMOUNT}</h4>
                    </Card>
                  </Col>
                )
              }
              )
            }
          </Row>
        </Card>
      </div>
    </>
  );
}
export default Dashboard;