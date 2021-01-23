import React, { Component } from 'react';
import Featured from './Featured';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from './Products';
import Search from './Search';

export default class Main extends Component {
  state = {
    headerColor: 'linear-gradient(to bottom right, #5b14de, #17d6f7)',
    text: ""
  }

  updateHeaderColor = () => {
    const colorCombo = [
      'linear-gradient(to bottom right, #5b14de, #17d6f7)',
      'linear-gradient(to bottom right, #cc2b5e, #753a88)',
      'linear-gradient(to bottom right, #42275a, #734b6d)',
      'linear-gradient(to bottom right, #de6262, #ffb88c)',
      'linear-gradient(to bottom right, #614385, #516395)',
      'linear-gradient(to bottom right, #02aab0, #00cdac)',
      'linear-gradient(to bottom right, #000428, #004e92)',
      'linear-gradient(to bottom right, #ddd6f3, #faaca8)',
      'linear-gradient(to bottom right, #ec6f66, #f3a183)',
      'linear-gradient(to bottom right, #52E5E7, #130CB7)'
    ]
    let rand = Math.floor(Math.random() * Math.floor(10));
    this.setState({ headerColor: colorCombo[rand] });
  }

  render() {
    return (
      <main>
        <Router>
          <div>
            <Nav
              headerColor={this.state.headerColor}
              updateHeaderColor={this.updateHeaderColor}
            />
            <Route
              exact path="/"
              render={() => <Home headerColor={this.state.headerColor} />}
            />
            <Route
              path="/computers"
              render={() => <Products category="computers" endpoint={"https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0501000))?apiKey=" + process.env.REACT_APP_API_KEY + "&format=json"} />}
            />
            <Route
              path="/laptops"
              render={() => <Products category="laptops" endpoint={"https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0502000))?apiKey=" + process.env.REACT_APP_API_KEY + "&format=json"} />}
            />
            <Route
              path="/tablets"
              render={() => <Products category="tablets" endpoint={"https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=pcmcat209000050006))?apiKey=" + process.env.REACT_APP_API_KEY + "&format=json"} />}
            />
            <Route
              path="/phones"
              render={() => <Products category="phones" endpoint={"https://api.bestbuy.com/v1/products(search=cell%20phone&(categoryPath.id=pcmcat209400050001))?apiKey=" + process.env.REACT_APP_API_KEY + "&format=json"} />}
            />
            <Route
              path="/tvs"
              render={() => <Products category="TVs" endpoint={"https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0101000))?apiKey=" + process.env.REACT_APP_API_KEY + "&format=json"} />}
            />
            <Route
              path="/audio"
              render={() => <Products category="audio" endpoint={"https://api.bestbuy.com/v1/products(onSale=true&categoryPath.name=sound*)?apiKey=" + process.env.REACT_APP_API_KEY + "&format=json"} />}
            />
            <Route
              path="/featured"
              render={() => <Products category="Featured Products" endpoint={"https://api.bestbuy.com/v1/products(onSale=true)?apiKey=" + process.env.REACT_APP_API_KEY + "&pageSize=12&format=json"} />}
            />
            <Route exact path="/search" render={() => <Search headerColor={this.state.headerColor} />} />
          </div>
        </Router>
        <Featured />
        <Footer background={this.state.headerColor} />
      </main>
    )
  }
}
