import React from 'react';
import Navbar from "../../component/Navbar";
import Main from "../../component/Main";

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Main/>
    </div>
  );
}

export default App;
