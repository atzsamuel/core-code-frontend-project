import { Col, Row, Button, Space, Table, Tag } from 'antd';
const TransferTable = ({ dataSource }) => {
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
      title: 'Transfer Amount',
      dataIndex: 'TRANSFER_AMOUNT',
      key: 'TRANSFER_AMOUNT',
      // render: (text) => <a>{text}</a>,ACCOUNT_BALANCE
    },
    {
      title: 'Bank Account origin',
      dataIndex: 'BANKACCOUNT_ORGIN',
      key: 'BANKACCOUNT_ORGIN',
    },
    {
      title: 'Date Operation',
      dataIndex: 'DATEADDED',
      key: 'DATEADDED',
    },
    {
      title: 'Bank account destination',
      dataIndex: 'BANKACCOUNT_DESTINATION',
      key: 'BANKACCOUNT_DESTINATION',
    },
  ]
  return (
    <Table columns={columns} dataSource={dataSource} />
  );
}

export default TransferTable;