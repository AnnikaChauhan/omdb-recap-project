import React, { Component } from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
    render() {
        return (
            <section className={styles.MovieList}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </section>
            );
    }
}