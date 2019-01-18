import React from "react";
import { Table, Row, Col, Card } from "antd";

const columns = [
  {
    title: "Product",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <span>
        <span style={{fontWeight: 'bold', marginRight: 10 }}>X</span>
        <img alt="img" src={record.image} style={{ height: 100, width: 80}} />
        <span style={{fontWeight: 'bold', marginLeft: 20}}>{record.name}</span>
      </span>
    )
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price"
  },
  {
    title: "Quantity",
    dataIndex: "qty",
    key: "qty"
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total"
  }
];

export default function TableCart({ data }) {
  return (
    <Row gutter={16} type="flex" justify="center">
      <Col xs={{ span: 16, offset: 0 }} lg={{ span: 16, offset: 0 }}>
        <Card>
          <Table columns={columns} dataSource={data}/>
        </Card>
      </Col>
    </Row>
  );
}
