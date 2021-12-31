import React from 'react';
import { Link } from 'react-router-dom';

function Explore() {
    return (
        <section id="explore">
            <div className="container">
                <div className="row row__column">
                    <h2 className="section__title">
                        Explore more <span className="purple">Comics</span>
                    </h2>
                    <Link to="/comics">
                        <button className="btn">Explore comics</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Explore;
