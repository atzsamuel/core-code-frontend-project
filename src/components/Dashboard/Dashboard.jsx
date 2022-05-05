import React from "react";
import { Row, Col, Layout } from "antd";
import "../Login/layout.css";

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {

  return (
    <>
      <Layout>
        <Layout>
          <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Row justify="center">

              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by Samuel Atz</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Dashboard;