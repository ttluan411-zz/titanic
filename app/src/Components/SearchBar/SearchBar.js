import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    
    onValueChange = (event) => {
        this.props.update(event.target.value)
    }
    render() {
        return (
            <div className="search-bar">
            <input
              ref="input"
              onChange={this.onValueChange}
              value={this.props.value}
              type="text"
              placeholder="Type Name..." />
            </div>
        );
    }
}

export default SearchBar;