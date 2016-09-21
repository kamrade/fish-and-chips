import React from 'react';
import './add-fish-form.css';

var AddFishForm = React.createClass({
    createFish: function(e){
        e.preventDefault();
        var fish = {
            name: this.refs.name.value,
            price: this.refs.price.value,
            status: this.refs.status.value,
            desc: this.refs.desc.value,
            image: this.refs.image.value
        };
        this.props.addFish(fish);
    },
    render: function(){
        return (
            <form className="add-fish-form" onSubmit={this.createFish}>
                <div className="form-group">
                    <input className="form-control" type="text" ref="name" placeholder="Fish Name" />
                    <input className="form-control" type="text" ref="price" placeholder="Fish Price"/>
                    <select className="form-control" ref="status">
                        <option value="available">Fresh!</option>
                        <option value="unavailable">Sold Out</option>
                    </select>
                    <textarea className="form-control" type="text" ref="desc" placeholder="Description"></textarea>
                    <input className="form-control" type="text" ref="image" placeholder="URL to image"/>
                    <button type="submit" className="btn btn-primary">Add Item</button>
                </div>
            </form>
        )
    }
});

export default AddFishForm;
