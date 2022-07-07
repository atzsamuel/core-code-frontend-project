import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Layout, Menu } from "antd";
import {
  BankTwoTone,
  PieChartTwoTone,
  HomeTwoTone,
  FundTwoTone,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SidebarLayout = () => {

  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };

  return (
    <>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartTwoTone />}>
            <Link to="/">Dashboard</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<BankTwoTone />} title="Bank Accounts">
            <Menu.Item key="3"><Link to="/bankaccount">Accounts</Link></Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FundTwoTone />} title="Finance">
            <Menu.Item key="4"><Link to="/transaction">Transactions</Link></Menu.Item>
            <Menu.Item key="5"><Link to="/transfer">Tranfer</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="6" icon={<HomeTwoTone />} >
            Home page
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

export default SidebarLayout;