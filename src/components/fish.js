import React from 'react';
import './fish.css';
import h from './helpers/helpers';

var Fish = React.createClass({
    render: function(){
        var details = this.props.details
        return(
            <li className="menu-fish col-sm-4">
                <img src={details.image} alt={details.name}/>
                <h3>{details.name}</h3>
                <p className="price">{h.formatPrice(details.price)}</p>
                <p>{details.desc}</p>
            </li>
        )
    }
});

export default Fish;
