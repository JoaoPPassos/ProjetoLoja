import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Produto from './pages/Produto';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/produto ' exact={true} component={Produto}/>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);