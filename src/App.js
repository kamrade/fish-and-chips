import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Order from './components/order';
import Inventory from './components/inventory';
import Fish from './components/fish';


var App = React.createClass({
    getInitialState: function(){
        return {
            fishes: {},
            order: {}
        }
    },
    addFish: function(newFish){
        var timeStamp = (new Date()).getTime();
        this.state.fishes['fish-' + timeStamp] = newFish;
        this.setState({fishes: this.state.fishes});
    },
    loadSamples: function(sampleFishes){
        this.setState({
            fishes: require("./data/sample-fishes")
        })
    },
    renderFish: function(key){
        return <Fish key={key} index={key} details={this.state.fishes[key]} />
    },
    render: function() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="menu col-xs-12">
                        <Header tagline="Fresh Seafood Market" num="5000" />
                        <ul className="list row">
                            {Object.keys(this.state.fishes).map(this.renderFish)}
                        </ul>
                    </div>

                    <div className="col-sm-6">
                        <Order />
                    </div>
                    <div className="col-sm-6">
                        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
                    </div>
                </div>
            </div>
        );
    }
});



export default App;
