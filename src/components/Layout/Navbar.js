import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import Button from "../UI/Button";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <div className={styles.navbar_logo_wrapper}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <ul>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
      <div className={styles.navbar_auth}>
        <div>
          <Link to="/">Log in</Link>
        </div>

        <svg
          width="1"
          height="32"
          viewBox="0 0 1 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499999"
            y2="32"
            stroke="#02292D"
          />
        </svg>

        <Link to="/">
          <div>
            <Button>Sign up</Button>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
