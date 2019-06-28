import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


import Help from './components/Help';
import Home from './components/Home';
import Service from './components/Service';
import Privacy from './components/Privacy';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <Router>
      <div className="App">
        <header className="header">
          <Link to="/" className="logoLink">
            <div className="logo">
              <p className="imhere-logo">imhere</p>
            </div>
          </Link>
            <div className="headerlink marg"><Link className="headerlink" to="/service"><h2>terms of service</h2></Link></div>
            <div className="headerlink"><Link className="headerlink" to="/help"><h2>help</h2></Link></div>
            <div className="headerlink"><Link className="headerlink" to="/privacy"><h2>privacy policy</h2></Link></div>
        </header>

          <Route path="/" exact component={Home} />
          <Route path="/help/" component={Help} />
          <Route path="/service/" component={Service} />
          <Route path="/privacy/" component={Privacy} />


      </div>
    </Router>
    );
  }
}

export default App;
