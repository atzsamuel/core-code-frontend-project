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
              <h1>Register for Budget App</h1>
              <RegisterForm />
            </Col>
          </Row>
        </Card>
      </Layout>
    </>
  )
}

export default RegisterUser;