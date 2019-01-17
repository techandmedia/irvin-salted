import React, { Component } from "react";
import { Card, Col, Row } from "antd";

import { getProducts, getDummy } from "./fetch/GetData";
import Config from "./fetch/Config";
import "./App.css";


const { Meta } = Card;

const URL =
  process.env.NODE_ENV === "development" ? Config.prodURL : Config.devURL;

class App extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    console.log(URL);
    // this.getDataProducts();
    this.getDummyData();
  }

  componentDidUpdate(){
    this.getDummyData();
  }

  getDummyData = () => {
    getDummy().then(result => {
      console.log(result);
    });
  };

  getDataProducts = () => {
    getProducts(URL).then(result => {
      // const data = result.data[0];
      console.log(result.data);
      this.setState({
        products: result.data.map(data => ({
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
      <div style={{ background: "#ECECEC", padding: "30px" }}>
        <Row gutter={16}>
          {this.state.products.map(data => {
            return (
              <Col span={8}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={
                    <img
                      alt="example"
                      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                  > Card content
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
