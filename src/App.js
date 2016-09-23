import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Order from './components/order';
import Inventory from './components/inventory';
import Fish from './components/fish';

// FIREBASE
import Rebase from 're-base';
var base = Rebase.createClass({
    apiKey: "AIzaSyAQl29WXbRa26nIU5KLaAl7zZPm4T_ar58",
    authDomain: "fish-n-chips.firebaseapp.com",
    databaseURL: "https://fish-n-chips.firebaseio.com",
    storageBucket: "fish-n-chips.appspot.com",
    messagingSenderId: "87263486017"
});
// END OF FIREBASE

var App = React.createClass({
    getInitialState: function(){
        return {
            fishes: {},
            order: {}
        }
    },
    // Firebase
    componentDidMount: function(){
        base.syncState(this.props.params.storeId + '/fishes', {
            context: this,
            state: 'fishes'
        });

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
        return <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>
    },
    addToOrder: function(key){
        this.state.order[key] = this.state.order[key] + 1 || 1;
        this.setState({ order: this.state.order });
    },
    render: function() {
        return (
            <div className="App container">
                <div className="row">
                    <div className="menu col-xs-12">
                        <Header tagline="Fresh Seafood Market" num="5000" />
                        <ul className="list">
                            {Object.keys(this.state.fishes).map(this.renderFish)}
                        </ul>
                    </div>

                    <div className="col-sm-6">
                        <Order fishes={this.state.fishes} order={this.state.order}/>
                    </div>
                    <div className="col-sm-6">
                        <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
                    </div>
                </div>
            </div>
        );
    }
});



export default App;
