import React from 'react';
import Highlights from './Highlights';

const Highlight = () => {
    return (
        <div className="highlight">
        <div className="highlight__img">
            <FontAwesomeIcon icon="bolt" />
        </div>
        <h3 className="highlight__subtitle">Easy and Quick</h3>
        <p className="highlight__para">
            Get access to the book you purchased online instantly.
        </p>
    </div>
    );
}

export default Highlights;