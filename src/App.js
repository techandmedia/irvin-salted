import React, { Component } from "react";
import { Card, Col, Row } from "antd";

import { getProducts, getDummy } from "./fetch/GetData";
import { rupiahConverter } from "./utils/currency-convertes";
import Config from "./fetch/Config";
import "./App.css";

const URL =
  process.env.NODE_ENV === "development" ? Config.prodURL : Config.devURL;

class App extends Component {
  state = {
    products: [],
    dummyProducts: [],
    leftColumnData:[],
    middleColumnData:[],
    rightColumnData:[]
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
      let i = 1;
      this.setState({
        dummyProducts: result.data.map(data => ({
          dummy_ID: i++,
          // dummy_ID: Math.random(new Date()),
          image: data.image,
          price: rupiahConverter(data.currency, data.price),
          currency: "Rp ",
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
      <div style={{ padding: "20px" }}>
        <p className="best-mall">The Best Shopping Mall in The World</p>
        <Row gutter={2} type="flex" justify="space-between" align="top">
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            {this.state.dummyProducts.map(data => {
              return (
                <Row key={data.dummy_ID}>
                  <Row>
                    <Card
                      hoverable
                      // style={{ height: 240 }}
                      cover={
                        <img
                          alt="example"
                          src={data.image}
                          // height="240px"
                          width="auto"
                        />
                      }
                    >
                      <div className="name-price">
                        <p style={{ color: "orange" }}>{data.name}</p>
                        <p>from </p>
                        <p style={{ fontSize: 30 }}>Rp {data.price}</p>
                      </div>
                    </Card>
                  </Row>
                  <Row type="flex" justify="space-between" align="middle">
                    <Col>
                      <Row>Baris 1</Row>
                      <Row>Baris 2</Row>
                    </Col>
                    <Col>
                      <Row>Baris 1 Kolom 2</Row>
                    </Col>
                  </Row>
                  {/* </Col> */}
                </Row>
              );
            })}
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
            Col
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
