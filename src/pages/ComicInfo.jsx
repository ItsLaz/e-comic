import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Comic from '../components/ui/Comic';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

function ComicInfo({ comics, addToCart, useAlert }) {
    const { id } = useParams();
    const comic = comics.find((comic) => +comic.id === +id);
    const alert = useAlert();

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/comics" className="book__link">
                                <h2 className="book__selected--title--top">
                                    Comics
                                </h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img
                                    src={comic.cover}
                                    alt="book"
                                    className="book__selected--img"
                                />
                            </figure>
                            <div className="book__selected--description">
                                <h2 className="book__selected--title">
                                    {comic.title}
                                </h2>
                                <Rating rating={comic.rating} />
                                <div className="book__selected--price">
                                    <Price
                                        originalPrice={comic.originalPrice}
                                        salePrice={comic.salePrice}
                                    />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        {comic.description}
                                    </p>
                                    <p className="book__summary--para">
                                        {comic.quote}
                                    </p>
                                </div>
                                <button
                                    className="btn"
                                    onClick={() => {
                                        addToCart(comic);
                                        alert.show(
                                            <div
                                                style={{
                                                    color: 'rgb(107, 129, 255)',
                                                }}
                                            >
                                                'Added to cart!'
                                            </div>
                                        );
                                    }}
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="book__selected--title--top">
                                Recommended Books
                            </h2>
                        </div>
                        <div className="books">
                            {comics
                                .filter(
                                    (comic) =>
                                        comic.rating === 5 && +comic.id !== +id
                                )
                                .slice(0, 4)
                                .map((comic) => (
                                    <Comic comic={comic} key={comic.id} />
                                ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ComicInfo;
