import React from 'react';
import './inventory.css';
import AddFishForm from './add-fish-form';

var Inventory = React.createClass({
    render: function(){
        return(
            <div className="board inventory col-xs-12">

                <p>Inventory</p>
                <AddFishForm {...this.props} />
                <button className="btn btn-default" onClick={this.props.loadSamples}>Load Sample Fishes</button>

            </div>
        )
    }
});

export default Inventory;
