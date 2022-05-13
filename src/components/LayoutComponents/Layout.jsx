import { Layout, Breadcrumb } from "antd";
import "./layout.css";

import FooterLayout from './footer/FooterLayout';
import HeaderLayout from "./header/HeaderLayout";
import SidebarLayout from "./sidebar/SidebarLayout";
import BankAccounts from "../BankAccounts/BankAccounts";

const { Content } = Layout;

const LayoutComponents = () => {

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <SidebarLayout />

        <Layout className="site-layout">
          <HeaderLayout />

          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Accounts</Breadcrumb.Item>
              <Breadcrumb.Item>Samuel Atz</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <BankAccounts />
            </div>
          </Content>

          <FooterLayout />
        </Layout>


      </Layout>
    </>
  );
};

export default LayoutComponents;