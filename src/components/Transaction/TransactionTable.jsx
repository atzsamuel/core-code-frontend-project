import { Col, Row, Button, Space, Table, Tag } from 'antd';
const TransactionTable = ({ dataSource }) => {
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
      title: 'Description',
      dataIndex: 'DESCRIPTION',
      key: 'DESCRIPTION',
      //render: (text) => <a>{text}</a>,
    },
    {
      title: 'Fecha de operacion',
      dataIndex: 'DATEADDED',
      key: 'DATEADDED',
      // render: (text) => <a>{text}</a>,ACCOUNT_BALANCE
    },
    {
      title: 'Amount',
      dataIndex: 'AMOUNT',
      key: 'AMOUNT',
    },
    {
      title: 'Type transaction',
      dataIndex: 'TYPE_TRANSACTION',
      key: 'TYPE_TRANSACTION',
    },
    {
      title: 'Category',
      dataIndex: 'CATEGORY',
      key: 'CATEGORY',
    },
    {
      title: 'Bank account',
      dataIndex: 'BANKACCOUNT',
      key: 'BANKACCOUNT',
    },
  ]
  return (
    <Table columns={columns} dataSource={dataSource} />
  );
}

export default TransactionTable;