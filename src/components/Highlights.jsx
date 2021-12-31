import React from 'react';
import Highlight from './ui/Highlight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Highlights() {
    return (
        <section id="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                        Why choose <span className="purple">C-Shelf</span>
                    </h2>
                    <div className="highlight__wrapper">
                        <Highlight
                            icon={<FontAwesomeIcon icon="bolt" />}
                            title={'Easy and Quick'}
                            para={
                                'Get access to the comic you purchased online instantly.'
                            }
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="book-open" />}
                            title={'10,000+ Books'}
                            para={
                                'C-Shelf has all your favorite vintage comics'
                            }
                        />
                        <Highlight
                            icon={<FontAwesomeIcon icon="tags" />}
                            title={'Affordable'}
                            para={
                                'Get your hands on popular books for as little as $5'
                            }
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Highlights;
