import React, {Component} from "react";
import styles from "./Navbar.module.scss";

export default class Navbar extends Component {
    render(){
        return(
            <section className={styles.Navbar}>
                <p>Navbar</p>
            </section>     
        );
    }
}