import React, { Component } from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {

    render() {
        return (
            <section className={styles.MovieList}>
                {this.props.movieCollection.map((movie, index) => (
                    <MovieCard cardData={movie} key={index} />
                ))}
            </section>
        );
    }
}