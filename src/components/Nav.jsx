import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LibraryLogo from '../assets/Library.png';
import { Link } from 'react-router-dom';

function Nav({ numberOfItems }) {
    function openMenu() {
        document.body.classList += ' menu--open';
    }
    function closeMenu() {
        document.body.classList.remove('menu--open');
    }

    return (
        <div className="nav__wrapper">
            <div className="nav__container">
                <a href="/">
                    <img src={LibraryLogo} alt="Library" className="logo" />
                </a>
                <ul className="nav__links">
                    <li className="nav__list">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                    </li>
                    <li className="nav__list">
                        <Link to="/comics" className="nav__link">
                            Comics
                        </Link>
                    </li>
                    <button className="btn__menu" onClick={openMenu}>
                        <FontAwesomeIcon icon="bars" />
                    </button>
                    <li className="nav__icon">
                        <Link to="/cart" className="nav__link">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </Link>
                        {numberOfItems > 0 && (
                            <span className="cart__length">
                                {numberOfItems}
                            </span>
                        )}
                    </li>
                </ul>
                <div className="menu__backdrop">
                    <button
                        className="btn__menu btn__menu--close"
                        onClick={closeMenu}
                    >
                        <FontAwesomeIcon icon="times" />
                    </button>
                    <ul className="menu__links">
                        <li className="menu__list">
                            <Link
                                to="/"
                                className="menu__link"
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link
                                to="/comics"
                                className="menu__link"
                                onClick={closeMenu}
                            >
                                Comics
                            </Link>
                        </li>
                        <li className="menu__list">
                            <Link
                                to="/cart"
                                className="menu__link"
                                onClick={closeMenu}
                            >
                                Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;
