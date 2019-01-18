import React from "react";
import { Row, Col, Card } from "antd";

export default function DataCard({ data, handleAddToCart }) {
  // export default class DataCard extends React.Component() {
  //   constructor(props) {
  //     super();
  //   }
  // console.log(handleAddToCart);
  // render() {
  // const { data, handleAddToCart } = this.props;
  return (
    <React.Fragment>
      {data.map(data => {
        return (
          <Card bordered={false} key={data.dummy_ID}>
            <Row>
              <Card
                hoverable
                style={{ border: "5px solid silver" }}
                cover={
                  <img
                    alt="example"
                    src={data.image}
                    // height="240px"
                    width="auto"
                  />
                }
              />
            </Row>
            <Row type="flex" justify="space-between" align="middle">
              <Col>
                <Row>
                  <p style={{ fontWeight: "bold" }}>{data.name}</p>
                </Row>
                <Row>
                  <span>Rp {data.price}</span>
                </Row>
              </Col>
              <Col>
                <Row>
                  {/* must use button to get the value, can not use span */}
                  <button
                    className="cart"
                    value={data.dummy_ID}
                    onClick={e => handleAddToCart(e)}
                  >
                    Add to Cart
                  </button>
                </Row>
              </Col>
            </Row>
          </Card>
        );
      })}
    </React.Fragment>
  );
  // }
}
