import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Order from './components/order';
import Inventory from './components/inventory';

var App = React.createClass({
    render() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="menu col-xs-12">
                        <Header tagline="Fresh Seafood Market" num="5000" />
                    </div>
                    <div className="col-sm-6">
                        <Order />
                    </div>
                    <div className="col-sm-6">
                        <Inventory />
                    </div>
                </div>
            </div>
        );
    }
});



export default App;
