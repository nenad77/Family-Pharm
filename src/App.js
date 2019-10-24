import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IndexPage from './Pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {IndexPage}/>  
        </Switch>
      </Router>
    )
  }
}

export default App;