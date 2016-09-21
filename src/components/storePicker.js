import React from 'react';
import './storePicker.css';
import h from './helpers/helpers';

var StorePicker = React.createClass({
    render: function(){
        var name = "Store";
        return(
            <form className="store-selector">
                <h2>Please Enter A {name}</h2>
                <input type="text" ref="storeId" required />
                <input type="submit" value="Submit" />
            </form>
        )
    }

});

export default StorePicker;
