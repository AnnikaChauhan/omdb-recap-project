import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import MoviePoster from "./MoviePoster";

export default class MovieCard extends Component {
    render() {
        const cardData = this.props.cardData;
        return (
            <Card style={{ width: '18rem' }}>
                <MoviePoster Poster={this.props.cardData.Poster}/>
                <Card.Body>
                    <Card.Title>{cardData.Title}</Card.Title>
                    <Card.Text>
                        {cardData.Year}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

// Card.Img or Card.Body are classes inside classes