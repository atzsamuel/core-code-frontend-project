import { Layout } from "antd";
const { Header } = Layout;

const HeaderLayout = () => {
  return (
    <>
       <Header className="site-layout-background" style={{ padding: 0 }} >
        <h3 style={{textAlign:'right'}}>UserInfo</h3>
       </Header>
    </>
  );
}
export default HeaderLayout;