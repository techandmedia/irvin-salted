import React, { Component } from "react";
import { Card, Col, Row } from "antd";

import { getProducts, getDummy } from "./fetch/GetData";
import Config from "./fetch/Config";
import "./App.css";

const URL =
  process.env.NODE_ENV === "development" ? Config.prodURL : Config.devURL;

class App extends Component {
  state = {
    products: [],
    dummyProducts: []
  };

  componentDidMount() {
    // this.getDataProducts();
    this.getDummyData();
  }

  componentDidUpdate() {
    // this.getDummyData();
  }

  getDummyData = () => {
    getDummy().then(result => {
      console.log(result.data);
      this.setState({
        dummyProducts: result.data.map(data => ({
          dummy_ID: Math.random(new Date()),
          image: data.image,
          price: data.price,
          currency: data.currency,
          name: data.name
        }))
      });
    });
    return null;
  };

  getDataProducts = () => {
    getProducts(URL).then(result => {
      console.log(result.data);
      this.setState({
        products: result.data.map(data => ({
          dummy_ID: Math.random(new Date()),
          image: data.image,
          price: data.price,
          currency: data.currency,
          name: data.name
        }))
      });
    });
    return null;
  };

  render() {
    return (
      <div style={{ padding: "30px" }}>
        <p className="best-mall">The Best Shopping Mall in The World</p>
        <Row gutter={16} type="flex">
          {this.state.dummyProducts.map(data => {
            return (
              <Col span={4} key={data.dummy_ID}>
                <Card
                  hoverable
                  // style={{ height: 240 }}
                  cover={
                    <img
                      alt="example"
                      src={data.image}
                      height="240px"
                      width="auto"
                    />
                  }
                >
                  <div className="name-price">
                    <p style={{ color: "orange" }}>{data.name}</p>
                    <p>
                      from {data.currency}{" "}
                      <span style={{ fontSize: 30 }}>{data.price}</span>
                    </p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default App;
