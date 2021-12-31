import Footer from './components/Footer';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comics from './pages/Comics';
import { comics } from './data';
import ComicInfo from './pages/ComicInfo';
import Cart from './pages/Cart';
import { useEffect, useState } from 'react';

function App() {
    const [cart, setCart] = useState([]);

    function addToCart(comic) {
        const dupeItem = cart.find((item) => +item.id === +comic.id);
        if (dupeItem) {
            setCart(
                cart.map((item) => {
                    if (item.id === dupeItem.id) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    } else {
                        return item;
                    }
                })
            );
        } else {
            setCart([...cart, { ...comic, quantity: 1 }]);
        }
    }

    function changeQuantity(comic, quantity) {
        setCart(
            cart.map((item) =>
                item.id === comic.id
                    ? {
                          ...item,
                          quantity: +quantity,
                      }
                    : item
            )
        );
    }

    function removeItem(item) {
        setCart(cart.filter((comic) => comic.id !== item.id));
    }

    function numberOfItems() {
        let counter = 0;
        cart.forEach((item) => {
            counter += item.quantity;
        });
        return counter;
    }

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return (
        <BrowserRouter>
            <div className="App">
                <Nav numberOfItems={numberOfItems()} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/comics"
                        element={<Comics comics={comics} />}
                    />
                    <Route
                        path="/comics/:id"
                        element={
                            <ComicInfo comics={comics} addToCart={addToCart} />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                comics={comics}
                                cart={cart}
                                changeQuantity={changeQuantity}
                                removeItem={removeItem}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
