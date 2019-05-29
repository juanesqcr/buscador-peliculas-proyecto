import React, { Component } from 'react';
import Home from './Pages/Home'
import Details from './Pages/Details'
import { Switch, Route } from 'react-router-dom'
import NotFound from './Pages/NotFound'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Details/:movieID' component={Details}/>
          <Route component={NotFound}/>
        </Switch>
    
      </div>
    );
  }
}
export default App;
