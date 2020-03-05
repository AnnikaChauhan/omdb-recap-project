import React from 'react';
import Navbar from "../../component/Navbar";
import Routes from "../../routes/Routes";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Routes />
    </div>
  );
}

export default App;
