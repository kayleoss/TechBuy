import React, { Component } from 'react';
import Featured from './Featured';
import Footer from './Footer';
import Nav from './Nav';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Main extends Component {
  state = {
    headerColor: 'linear-gradient(to bottom right, #5b14de, #17d6f7)',
    headerTextColor: '#ffffff',
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
    this.setState({headerColor: colorCombo[rand]});
  }

  render() {
    return (
      <main>
        <Router>
          <div>
            <Nav 
            headerColor={this.state.headerColor}
            headerTextColor={this.state.headerTextColor}
            updateHeaderColor={this.updateHeaderColor}
            />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
        <Featured />
        <Footer background={this.state.headerColor} />
      </main>
    )
  }
}
