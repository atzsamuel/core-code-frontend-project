import React, { useState } from "react";
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
            Dashboard
          </Menu.Item>
          <SubMenu key="sub1" icon={<BankTwoTone />} title="Accounts">
            <Menu.Item key="3">Create Account</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<FundTwoTone />} title="Reports">
            <Menu.Item key="4">View report</Menu.Item>
            <Menu.Item key="5">Transactions report</Menu.Item>
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