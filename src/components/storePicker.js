import React from 'react';
import { browserHistory } from 'react-router'
import './storePicker.css';
import h from './helpers/helpers';

var StorePicker = React.createClass({
    goToStore: function(e){
        e.preventDefault();
        var storeId = this.refs.storeId.value;

        browserHistory.push('/store/' + storeId);
    },
    render: function(){
        var name = "Store";
        return(
            <form className="store-selector" onSubmit={this.goToStore}>
                <h2>Please Enter A {name}</h2>
                <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
                <input type="submit" value="Submit" />
            </form>
        )
    }

});

export default StorePicker;
