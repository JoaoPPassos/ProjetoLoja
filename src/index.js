import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import Produto from './pages/Produto';

import {BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path='/' exact={true} component={Home}/>
        <Route path='/produto/:id' exact={true} component={Produto}>
          <Produto/>
        </Route>
      </Switch>
    </BrowserRouter>,
  document.getElementById('root')
);