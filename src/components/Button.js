import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button() {
    return(
        <Link to='/donate'>
            <button className="btn">Donate</button>
        </Link>
    )
}

export default Button;