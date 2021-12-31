import React, { useState } from 'react';
import Comic from '../components/ui/Comic';
import ReactPaginate from 'react-paginate';

function Comics({ comics: initialComics }) {
    const [comics, setComics] = useState(initialComics);

    function filterBooks(filter) {
        if (filter === 'LOW_TO_HIGH') {
            setComics(
                comics
                    .slice()
                    .sort(
                        (a, b) =>
                            (a.salePrice || a.originalPrice) -
                            (b.salePrice || b.originalPrice)
                    )
            );
        }
        if (filter === 'HIGH_TO_LOW') {
            setComics(
                comics
                    .slice()
                    .sort(
                        (a, b) =>
                            (b.salePrice || b.originalPrice) -
                            (a.salePrice || a.originalPrice)
                    )
            );
        }
        if (filter === 'RATING') {
            setComics(comics.slice().sort((a, b) => b.rating - a.rating));
        }
    }

    const [pageNumber, setPageNumber] = useState(0);

    const comicsPerPage = 8;
    const pagesVisited = pageNumber * comicsPerPage;

    const displayComics = comics
        .slice(pagesVisited, pagesVisited + comicsPerPage)
        .map((comic) => <Comic comic={comic} key={comic.id} />);

    const pageCount = Math.ceil(comics.length / comicsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div id="books__body">
            <main id="books__main">
                <section>
                    <div className="books__container">
                        <div className="row">
                            <div className="books__header">
                                <h2 className="section__title books__header--title">
                                    All Books
                                </h2>
                                <select
                                    id="filter"
                                    defaultValue="DEFAULT"
                                    onChange={(event) =>
                                        filterBooks(event.target.value)
                                    }
                                >
                                    <option value="DEFAULT" disabled>
                                        Sort
                                    </option>
                                    <option value="LOW_TO_HIGH">
                                        Price, Low to High
                                    </option>
                                    <option value="HIGH_TO_LOW">
                                        Price, High to Low
                                    </option>
                                    <option value="RATING">Rating</option>
                                </select>
                            </div>
                            <div className="books">
                                {displayComics}
                                <ReactPaginate
                                    previousLabel={'< prev'}
                                    nextLabel={'next >'}
                                    pageCount={pageCount}
                                    onPageChange={changePage}
                                    containerClassName={'paginationBtns'}
                                    previousLinkClassName={'previousBtn'}
                                    nextLinkClassName={'nextBtn'}
                                    disabledClassName={'paginationDisabled'}
                                    activeClassName={'paginationActive'}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Comics;
