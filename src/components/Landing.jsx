import React from 'react';
import { Link } from 'react-router-dom';
import UndrawBooks from '../assets/undraw_reading_time_gvg0.svg';

function Landing({ executeScroll }) {
    return (
        <section className="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>Most awarded online vintage comic platform</h1>
                        <h2>
                            Find your vintage comics with{' '}
                            <span className="purple">C-Shelf</span>
                        </h2>
                        <Link to="#features">
                            <button className="btn" onClick={executeScroll}>
                                Browse Comics
                            </button>
                        </Link>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src={UndrawBooks} alt="Books" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
