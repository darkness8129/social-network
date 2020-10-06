import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to='/profile' activeClassName={styles.active}>
                        Profile
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/dialogs' activeClassName={styles.active}>
                        Dialogs
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/news' activeClassName={styles.active}>
                        News
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/music' activeClassName={styles.active}>
                        Music
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/settings' activeClassName={styles.active}>
                        Settings
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to='/users' activeClassName={styles.active}>
                        Users
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
