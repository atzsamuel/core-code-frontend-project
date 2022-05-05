import RegisterForm from "./RegisterForm";
import { Row, Col, Layout } from "antd";
import "../Login/layout.css";

const { Content } = Layout;

const RegisterUser = () => {
  return (
    <>
      <Layout>
        <Layout>
          <Content >
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Row justify="center">
                <Col span={12}>
                  <RegisterForm />
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  )
}

export default RegisterUser;