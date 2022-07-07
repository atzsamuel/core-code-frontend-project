import { Col, Row, Button, Space, Table, Tag } from 'antd';
const BankTable = ({ dataSource }) => {
  /* const columns = [
     {
       title: 'Name',
       dataIndex: 'NAME',
       key: 'NAME',
     },
     {
       title: 'Balance',
       dataIndex: 'BALANCE',
       key: 'BALANCE',
     },
     {
       title: 'Action',
       key: 'action',
       render: (text, record) => (
         <span>
           <Button type="primary" shape="round" icon="edit" />
           <Button type="danger" shape="round" icon="delete" />
         </span>
       ),
     },
   ];*/
  const columns = [
    {
      title: 'Name',
      dataIndex: 'NAME',
      key: 'NAME',
      //render: (text) => <a>{text}</a>,
    },
    {
      title: 'Description',
      dataIndex: 'DESCRIPTION',
      key: 'DESCRIPTION',
      // render: (text) => <a>{text}</a>,ACCOUNT_BALANCE
    },
    {
      title: 'Currency',
      dataIndex: 'CURRENCY',
      key: 'CURRENCY',
    },
    {
      title: 'Balance',
      dataIndex: 'ACCOUNT_BALANCE',
      key: 'ACCOUNT_BALANCE',
    },
    {
      title: 'Status',
      dataIndex: 'STATUS',
      key: 'STATUS',
    },
  ]
  return (
    <Table columns={columns} dataSource={dataSource} expandable />
  );
}

export default BankTable;