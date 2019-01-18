import React, { Component } from "react";
import CardList from "./components/CardList";
import TableCart from "./components/TableCart";

import { getProducts } from "./fetch/GetData";
import { rupiahConverter } from "./utils/currency-convertes";
// import Config from "./fetch/Config";
import "./App.css";

const URL =
  "http://s3.irvinsaltedegg.com.s3-ap-southeast-1.amazonaws.com/engineering-test/products.json";

class App extends Component {
  state = {
    products: [],
    dummyProducts: [],
    leftColumnData: [],
    middleColumnData: [],
    rightColumnData: [],
    dataCart: [],
    status: false
  };

  componentDidMount() {
    // this.getDummyData();
    this.getDataProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevProps.status, this.props.status)
    // console.log(prevState.status, this.state.status);
    if (prevState.status !== this.state.status) {
      this.getColumnData();
      this.getDataNow();
    }
  }

  // getDataCart = () => {

  // }

  getDataNow = () => {
    const { leftColumnData, middleColumnData, rightColumnData } = this.state;
    this.setState({
      dataMiddle: middleColumnData,
      dataLeft: leftColumnData,
      dataRight: rightColumnData
    });
  };

  getColumnData = () => {
    const {
      leftColumnData,
      middleColumnData,
      rightColumnData,
      products
    } = this.state;
    const dataLength = products.length;
    // console.log(products[k]);
    for (let k = 0; k < dataLength; k++) {
      if (k === 0) {
        middleColumnData.push(products[k]);
      } else if (k > 0 && k < 3) {
        leftColumnData.push(products[k]);
      } else {
        rightColumnData.push(products[k]);
      }
    }
  };

  // getDummyData = () => {
  //   getDummy().then(result => {
  //     let i = 1;
  //     this.setState({
  //       dummyProducts: result.data.map(data => ({
  //         dummy_ID: i++,
  //         // dummy_ID: Math.random(new Date()),
  //         image: data.image,
  //         price: rupiahConverter(data.currency, data.price),
  //         currency: "Rp ",
  //         name: data.name
  //       })),
  //       status: true
  //     });
  //   });
  //   return null;
  // };

  getDataProducts = () => {
    getProducts(URL).then(result => {
      const data = result.data.data;
      // console.log(data);
      let i = 1;
      this.setState({
        products: data.map(data => ({
          dummy_ID: i++,
          image: data.image,
          price: rupiahConverter(data.currency, data.price),
          currency: "Rp ",
          name: data.name
        })),
        status: true
      });
    });
    return null;
  };

  // ========= Add to Cart ================

  handleAddToCart = e => {
    const { products, dataCart } = this.state;
    const id = e.target.value;
    console.log(id);
    const dataLength = products.length;
    // console.log(products[k]);
    for (let k = 0; k < dataLength; k++) {
      console.log("k",k);
      if (k == id) {
        console.log("id",id);
        dataCart.push(products[k]);
        this.setState({ status: !this.state.status });
      }
    }
    // return null;
  };

  render() {
    const { middleColumnData, leftColumnData, rightColumnData } = this.state;

    console.log(this.state.dataCart);

    return (
      <div style={{ padding: "20px" }}>
        <p className="best-mall">The Best Shopping Mall in The World</p>
        <CardList
          rightColumnData={rightColumnData}
          middleColumnData={middleColumnData}
          leftColumnData={leftColumnData}
          handleAddToCart={this.handleAddToCart}
        />
        <button value="Andri" onClick={this.handleAddToCart.bind(this)}>
          Tes
        </button>
        <hr
          style={{
            height: 3,
            border: "1px solid silver",
            background: "silver"
          }}
        />
        <TableCart data={this.state.products} />
      </div>
    );
  }
}

export default App;
