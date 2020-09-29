import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from 'components/header/Header';

import Story from 'views/Story/Story';
import MainPage from 'views/MainPage/MainPage';

import 'assets/sass/style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="main-container-wrapper">
          <Header />
          <Route path="/" component={MainPage} />
          <Route path="/story/:storyId" component={Story} />
        </div>
      </Router>
    );
  }
}

export default App;
