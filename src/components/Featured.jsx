import React from 'react';
import Comic from './ui/Comic';
import { comics } from '../data';

function Featured({ featuresRef }) {
    return (
        <section id="features" ref={featuresRef}>
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Featured <span className="purple">Comics</span>
                    </h2>
                    <div className="books">
                        {comics
                            .filter((comic) => comic.rating === 5)
                            .slice(0, 4)
                            .map((comic) => (
                                <Comic comic={comic} key={comic.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
