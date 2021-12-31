import React from 'react';
import { comics } from '../data';
import Comic from './ui/Comic';

function Discounted() {
    return (
        <section id="recent">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Discount <span className="purple">Comics</span>
                    </h2>
                    <div className="books">
                        {comics
                            .filter((comic) => comic.salePrice > 0)
                            .slice(0, 8)
                            .map((comic) => (
                                <Comic comic={comic} key={comic.id} />
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Discounted;
