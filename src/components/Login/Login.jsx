import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginForm from "./LoginForm";
import { Row, Col, Layout } from "antd";
import "./layout.css";

const { Content } = Layout;

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      {/*<button onClick={() => loginWithRedirect()}>Log in or with Auth0 </button> */}
      <Layout>
        <Layout>
          {/*<Header className="site-layout-sub-header-background" style={{ padding: 0 }} />*/}
          <Content >
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Row justify="center">
                <Col span={6}>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <LoginForm />
                </Col>
              </Row>
            </div>
          </Content>
          {/*<Footer style={{ textAlign: 'center' }}>Created by Samuel Atz</Footer>*/}
        </Layout>
      </Layout>
    </>
  );
};

export default Login;