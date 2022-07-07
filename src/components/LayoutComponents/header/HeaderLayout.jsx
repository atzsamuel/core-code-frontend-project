import {
  UserOutlined,
} from "@ant-design/icons";
import { Layout } from "antd";

const { Header } = Layout;
const HeaderLayout = () => {
  return (
    <>
      <Header className="site-layout-background" style={{ padding: 0 }} >
        <h4 style={{ textAlign: 'left' }}>{<UserOutlined />}{localStorage.getItem('userName')}</h4>
      </Header>
    </>
  );
}
export default HeaderLayout;