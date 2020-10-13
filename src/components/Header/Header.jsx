import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ login, isAuth }) => {
    return (
        <header className={styles.header}>
            <img
                src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png'
                alt='logo'
            />
            {isAuth ? login : <NavLink to='/login'>Login</NavLink>}
        </header>
    );
};

export default Header;
