import React from 'react';
import './fish.css';
import h from './helpers/helpers';

var Fish = React.createClass({
    addFishOrder: function(){
        // console.log("add fish to order", this.props.index);
        this.props.addToOrder(this.props.index);
    },
    render: function(){
        var details = this.props.details
        var isAvailable = (details.status === 'available') ? true : false;
        var buttonText = isAvailable ? 'Add to Order' : 'Sold Out';
        return(
            <li className="menu-fish col-sm-4">
                <img src={details.image} alt={details.name}/>
                <h3>{details.name}</h3>
                <p className="price">{h.formatPrice(details.price)}</p>
                <p>{details.desc}</p>
                <button className="btn btn-default" disabled={!isAvailable} onClick={this.addFishOrder} >{buttonText}</button>
            </li>
        )
    }
});

export default Fish;
