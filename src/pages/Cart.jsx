import React from 'react';
import { Link } from 'react-router-dom';
import emptyCart from '../assets/undraw_empty_cart_co35.svg';

function Cart({ cart, changeQuantity, removeItem }) {
    const total = () => {
        let price = 0;
        cart.forEach((item) => {
            price += +((item.salePrice || item.originalPrice) * item.quantity);
        });
        return price;
    };

    return (
        <div id="books__body">
            <main className="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title">Cart</h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">
                                {cart.map((comic) => {
                                    return (
                                        <div className="cart__item">
                                            <div className="cart__book">
                                                <img
                                                    src={comic.cover}
                                                    alt="book"
                                                    className="cart__book--img"
                                                />
                                                <div className="cart__book--info">
                                                    <span className="cart__book--title">
                                                        {comic.title}
                                                    </span>
                                                    <span className="cart__book--price">
                                                        $
                                                        {(
                                                            comic.salePrice ||
                                                            comic.originalPrice
                                                        ).toFixed(2)}
                                                    </span>
                                                    <button
                                                        className="cart__book--remove"
                                                        onClick={() =>
                                                            removeItem(comic)
                                                        }
                                                    >
                                                        Remove
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cart__quantity">
                                                <input
                                                    type="number"
                                                    min={1}
                                                    max={99}
                                                    className="cart__input"
                                                    value={comic.quantity}
                                                    onChange={(event) =>
                                                        changeQuantity(
                                                            comic,
                                                            event.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                            <div className="cart__total">
                                                $
                                                {(
                                                    comic.quantity *
                                                    (comic.salePrice ||
                                                        comic.originalPrice)
                                                ).toFixed(2)}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {cart.length === 0 && (
                                <div className="cart__empty">
                                    <img
                                        src={emptyCart}
                                        alt="empty cart"
                                        className="cart__empty--img"
                                    />
                                    <h2>
                                        You don't have any comics in your cart!
                                    </h2>
                                    <Link to="/comics">
                                        <button className="btn">
                                            Browse Comics
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </div>
                        {cart.length > 0 && (
                            <div className="total">
                                <div className="total__item total__sub-total">
                                    <span>Subtotal</span>
                                    <span>${(total() * 0.9).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__tax">
                                    <span>Tax</span>
                                    <span>${(total() * 0.1).toFixed(2)}</span>
                                </div>
                                <div className="total__item total__price">
                                    <span>Total</span>
                                    <span>${total().toFixed(2)}</span>
                                </div>
                                <button
                                    className="btn btn__checkout no-cursor"
                                    onClick={() =>
                                        alert(
                                            `haven't gotten around to this yet`
                                        )
                                    }
                                >
                                    Proceed to checkout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Cart;
