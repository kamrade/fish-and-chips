import React from 'react';
import './order.css';
import h from './helpers/helpers';

var Order = React.createClass({
    // показывает список и количество товаров в заказе
    renderOrder: function(key){
        var fish = this.props.fishes[key];
        var count = this.props.order[key];
        if(!fish){
            return <li key={key}>Sorry, fish no longer available</li>
        }
        return (<li>
            <span>{count} </span> lbs
            {fish.name}
            <strong className="price"> {h.formatPrice(fish.price * count)}</strong>
        </li>)
    },
    render: function(){
        var orderIds = Object.keys(this.props.order);
        var total = orderIds.reduce((prevTotal, key) => {
            var fish = this.props.fishes[key];
            var count = this.props.order[key];
            var isAvailable = fish && fish.status === 'available';

            if(fish && isAvailable){
                return prevTotal + (count*parseInt(fish.price) || 0);
            }
            return prevTotal;
        }, 0);
        return(
            <div className="board order">
                <div className="order-wrap">
                    <h2 className="order-title">Your Order</h2>
                    <ul className="order">
                        {orderIds.map(this.renderOrder)}
                        <li className="total">
                            <strong>Total:
                            {h.formatPrice(total)}</strong>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
});

export default Order;
