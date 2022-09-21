import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => setToggle(!toggle);

    return (
        <>
            <style jsx="true">
                {`
                    .active {
                        font-weight: bold !important;
                        color: #f2f2f2 !important;
                        border-bottom: 3px solid #f2f2f2 !important;
                    }
                `}
            </style>
            <nav className={`${styles.navbar} navbar navbar-expand-lg sticky-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">Detect Network Status</Link>
                    <button onClick={handleClick} className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        {
                            toggle ? <FaTimes /> : <FaBars />
                        }
                    </button>
                    <div className={`${toggle ? "" : "collapse"} navbar-collapse`} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink activeclassname='active' onClick={handleClick} className={`${styles.navLink} nav-link`} aria-current="page" to="/">Status</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/about">About</NavLink>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <a onClick={handleClick} className={`${styles.navLink} nav-link`} href="https://fast.com/" rel="noreferrer" target="_blank">Speed Test</a>
                            </li>
                            <li className={`${styles.navItem} nav-item`}>
                                <NavLink onClick={handleClick} className={`${styles.navLink} nav-link`} to="/contact">Contact Me</NavLink>
                            </li>
                        </ul>
                        <a className={styles.support} href="https://www.buymeacoffee.com/bhavyakhurana" target='_blank' rel="noreferrer">
                            <img className='img-fluid ms-2' src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg" height="50" width="150" alt="Bhavya Khurana" ></img>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;