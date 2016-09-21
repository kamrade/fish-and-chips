import React from 'react';
import './header.css';

var Header = React.createClass({
    render: function(){
        console.log(this.props);
        return(
            <header className="header">
                <h1>Catch of the Day</h1>
                <h3 className="tagline">{this.props.tagline}</h3>
            </header>
        )
    }
});

export default Header;
