import React, { Component } from "react";

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <input type="text" id="search" name="search" placeholder="search movies here" />
                <button onClick={() => this.props.getURL("hello")}>Search</button>
            </div>
        );
    }
}