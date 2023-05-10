import React from 'react';
import { Link } from 'react-router-dom';

function EnterSiteButton() {
    return (
        <Link to="./Homepage.js">
            <button>Enter Site</button>
        </Link>
    );
}

export default EnterSiteButton;
