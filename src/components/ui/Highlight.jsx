import React from 'react';

function Highlight({ icon, title, para }) {
    return (
        <div className="highlight">
            <div className="highlight__img">{icon}</div>
            <div className="highlight__subtitle">{title}</div>
            <p className="highlight__para">{para}</p>
        </div>
    );
}

export default Highlight;
