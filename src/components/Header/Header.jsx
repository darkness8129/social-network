import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ login, isAuth, logout }) => {
    const onLogout = () => {
        logout();
    };

    return (
        <header className={styles.header}>
            <img
                src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-website-logo-png-transparent-background-background-15.png'
                alt='logo'
            />
            {isAuth ? (
                <span>
                    <span>{login}</span>
                    <button onClick={onLogout}>Logout</button>
                </span>
            ) : (
                <div>
                    <NavLink to='/login'>Login</NavLink>
                </div>
            )}
        </header>
    );
};

export default Header;
