import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Price from './Price';
import Rating from './Rating';

function Comic({ comic }) {
    const [img, setImg] = useState();

    const mountedRef = useRef(true);

    useEffect(() => {
        const image = new Image();
        image.src = comic.cover;
        image.onload = () => {
            setTimeout(() => {
                if (mountedRef.current) {
                    setImg(image);
                }
            }, 300);
        };
        return () => {
            mountedRef.current = false;
        };
    });
    return (
        <div className="book">
            {img ? (
                <>
                    <Link to={`/comics/${comic.id}`}>
                        <figure className="book__img--wrapper">
                            <img src={img.src} alt="book" />
                        </figure>
                    </Link>
                    <div className="book__title">
                        <Link
                            to={`/comics/${comic.id}`}
                            className="book__title--link"
                        >
                            {comic.title}
                        </Link>
                    </div>
                    <Rating rating={comic.rating} />
                    <Price
                        originalPrice={comic.originalPrice}
                        salePrice={comic.salePrice}
                    />
                </>
            ) : (
                <>
                    <div className="book__img--skeleton"></div>
                    <div className="skeleton book__title--skeleton"></div>
                    <div className="skeleton book__rating--skeleton"></div>
                    <div className="skeleton book__price--skeleton"></div>
                </>
            )}
        </div>
    );
}

export default Comic;
