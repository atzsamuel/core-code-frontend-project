import RegisterForm from "./RegisterForm";
import { Row, Col, Layout, Card } from "antd";
import "../Login/layout.css";

const RegisterUser = () => {
  return (
    <>
      <Layout>
        <Card >
          <Row >
            <Col span={12}>
              <h2>Register for Budget App</h2>
              <RegisterForm />
            </Col>
          </Row>
        </Card>
      </Layout>
    </>
  )
}

export default RegisterUser;