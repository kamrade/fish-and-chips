import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, Link, Navigation, browserHistory } from 'react-router'

import App from './App';
import StorePicker from './components/storePicker';
import NotFound from './components/notFound';

import './index.css';


// Routes
var routes = (
    <Router history={browserHistory} >
        <Route path="/" component={StorePicker} />
        <Route path="/store/:storeId" component={App} />
        <Route path="*" component={NotFound} />
    </Router>
);

render(
  routes,
  document.getElementById('root')
);
