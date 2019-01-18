import React from "react";
import { Row, Col } from "antd";
import DataCard from "./Card";

export default function CardList(props) {
  // console.log(props);
  return (
    <Row gutter={16} type="flex" justify="space-around">
      <Col xs={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
        <DataCard
          data={props.leftColumnData}
          handleAddToCart={props.handleAddToCart}
        />
      </Col>

      <Col xs={{ span: 11, offset: 0 }} lg={{ span: 11, offset: 0 }}>
        <DataCard
          data={props.middleColumnData}
          height={200}
          handleAddToCart={props.handleAddToCart}
        />
      </Col>

      <Col xs={{ span: 6, offset: 0 }} lg={{ span: 6, offset: 0 }}>
        <DataCard
          data={props.rightColumnData}
          handleAddToCart={props.handleAddToCart}
        />
      </Col>
    </Row>
  );
}
