import React, {Component} from "react";
import styles from "./Navbar.module.scss";
import NavItem from "../NavItem";

export default class Navbar extends Component {
    render(){
        return(
            <section className={styles.Navbar}>
                <p>Navbar</p>
                <br/>
                <NavItem route="/login" name="login" />
                <NavItem route="/movielist" name="movielist" />
            </section>     
        );
    }
}