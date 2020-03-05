import React, {Component} from "react";
import { Router, Redirect } from "@reach/router";
import Login from "../component/Main/Login";
import MovieList from "../component/Main/MovieList";

const NotFound = () => (<h2>Not Found</h2>);

export default class Routes extends Component {
    render(){
        return(
            <Router>
                <Redirect noThrow from="/" to="movielist" />
                <Login path="login" />
                <MovieList path="movielist" />
                <NotFound default />
            </Router>
        );
    }
}