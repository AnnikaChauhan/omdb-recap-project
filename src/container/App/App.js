import React, {Component} from 'react';
import Navbar from "../../component/Navbar";
import Routes from "../../routes/Routes";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';
import SearchBar from '../../component/Main/SearchBar/SearchBar';

let searchWord = "world";

class App extends Component {
  state = {
    moviesFromURL: [],
    searchableURL: `http://www.omdbapi.com/?s=${searchWord}&apikey=24bd3b30`
  }

  //to get search to work, comment out this code and call fetch data on render
  componentDidMount(){
    fetch(this.state.searchableURL)
      .then(res => res.json())
      .then(
        data => {
          this.setState({moviesFromURL: data.Search})
        }
      )
  }

  getURL = (word) => {
    console.log(word);
    const newURL = `http://www.omdbapi.com/?s=${word}&apikey=24bd3b30`;
    console.log(newURL);
    this.setState({ searchableURL: newURL });
    this.fetchData();
  }

  fetchData = () => {
    fetch(this.state.searchableURL)
      .then(res => res.json())
      .then(
        data => {
          this.setState({moviesFromURL: data.Search})
        }
      )
  }

  filterMovies = (title) => {
    console.log(title);
    console.log(this.state.moviesFromURL);
    console.log(this.state.moviesFromURL[0].Title);
    const newList = this.state.moviesFromURL.filter((dog) => dog.Title === title);
    this.setState({moviesFromURL: newList});
  }

  render(){
    //this.fetchData();
    return (
      <div className={styles.App}>
        <Navbar movieCollection={this.state.moviesFromURL} filterMovies={this.filterMovies} />
        <SearchBar getURL={this.getURL} />
        <Routes movieCollection={this.state.moviesFromURL} />
      </div>
    ); 
  }
  
}

export default App;
