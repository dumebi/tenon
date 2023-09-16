import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import Button from "../UI/Button";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const closeMenuHandler = () => {
    setOpenMenu(false);
  };
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <div className={styles.navbar_logo}>
          <div className={styles.navbar_logo_wrapper}>
            <img src={logo} alt="logo" />
          </div>
        </div>
      </NavLink>
      {/* hamburger icon */}
      <div
        className={styles.hamburger_wrapper}
        onClick={() => {
          setOpenMenu(true);
        }}
      >
        <Button className={styles.hamburger}>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_337_598)">
              <path
                d="M2 2.91504H14V4.24837H2V2.91504ZM2 7.58171H10V8.91504H2V7.58171ZM2 12.2484H14V13.5817H2V12.2484Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_337_598">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0 0.248047)"
                />
              </clipPath>
            </defs>
          </svg>

          <p>Menu</p>
        </Button>
      </div>
      {/* Mobile menu */}
      {/* {openMenu && ( */}
      <div
        className={`${styles.mobile_menu} ${openMenu ? `${styles.open}` : ""}`}
      >
        <div className={styles.mobile_menu_header}>
          <NavLink to="/">
            <div className={styles.navbar_logo}>
              <div className={styles.navbar_logo_wrapper}>
                <img src={logo} alt="logo" />
              </div>
            </div>
          </NavLink>

          <svg
            onClick={closeMenuHandler}
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_203_12480)">
              <path
                d="M12.0002 11.3289L16.9502 6.37891L18.3642 7.79291L13.4142 12.7429L18.3642 17.6929L16.9502 19.1069L12.0002 14.1569L7.05023 19.1069L5.63623 17.6929L10.5862 12.7429L5.63623 7.79291L7.05023 6.37891L12.0002 11.3289Z"
                fill="#3E414C"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_12480">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0 0.743164)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <NavLink to="/services">Services</NavLink>
        <NavLink to="/about-us">About us</NavLink>
        <NavLink to="/contact-us">Contact us</NavLink>

        <div className={styles.mobile_auth}>
          <Link to="/login">
            <Button className={styles.mobile_auth_login}>Log in</Button>
          </Link>
          <Link to="/sign-up">
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
      {/* // )} */}
      <ul>
        <li>
          <NavLink
            to="/services"
            className={(navData) =>
              navData.isActive ? `${styles.active}` : ""
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={(navData) =>
              navData.isActive ? `${styles.active}` : ""
            }
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-us"
            className={(navData) =>
              navData.isActive ? `${styles.active}` : ""
            }
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className={styles.navbar_auth}>
        <div>
          <NavLink to="/login">Log in</NavLink>
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

        <Link to="/sign-up">
          <div>
            <Button>Sign up</Button>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
