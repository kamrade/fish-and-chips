import React from 'react';
import './header.css';

var Header = React.createClass({
    render: function(){
        return(
            <header className="board header">
                <h1>Catch of the Day</h1>
                <h3 className="tagline">{this.props.tagline}</h3>
            </header>
        )
    }
});

export default Header;
