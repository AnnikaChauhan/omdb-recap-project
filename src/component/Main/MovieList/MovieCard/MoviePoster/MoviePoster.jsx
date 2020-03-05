import React, {Component} from "react";
import Card from 'react-bootstrap/Card';

export default class MoviePoster extends Component {
    render() {
        console.log(this.props.poster);
        return(
            <Card.Img variant="top" src={this.props.Poster}/>
        );   
    }
}