import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Price from '../components/ui/Price';
import Rating from '../components/ui/Rating';

const BookInfo = ({ books }) => {
    const { id } = useParams();
    const book = books.find(book => +book.id === +id);
    
    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <Link to="/books" className="book__link">
                                <FontAwesomeIcon icon="arrow-left" />
                            </Link>
                            <Link to="/books" className="book__link">
                                <h2 className='book__selected--title--top'>Books</h2>
                            </Link>
                        </div>
                        <div className="book__selected">
                            <figure className="book__selected--figure">
                                <img src={book.url} alt="" />
                            </figure>
                            <div className="book__selected-description">
                                <h2 className='book__selected--title'>{book.title}</h2>
                                <Rating rating={book.rating} />
                                <div className="book__selected--price">
                                    <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
                                </div>
                                <div className="book__summary">
                                    <h3 className="book__summary--title">
                                        Summary
                                    </h3>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus quidem praesentium ut ipsa, soluta nam voluptatem dolore, voluptates expedita consectetur? Tempore, molestiae! Itaque, ex! Alias id unde amet vel!
                                    </p>
                                    <p className="book__summary--para">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus quidem praesentium ut ipsa, soluta nam voluptatem dolore, voluptates expedita consectetur? Tempore, molestiae! Itaque, ex! Alias id unde amet vel!
                                    </p>
                                </div>
                                <button className="btn">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="books__container">
                    <div className="row">
                        <div className="books__selected--top">
                            <h2 className='book__selected--title--top'>
                                Recommended Books
                            </h2>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default BookInfo;