import React from 'react';
import { NavLink } from 'react-router-dom';
import App from '../pages/App';

const header = () => {
    return (
        <><div className='header'>
        <nav><ul>
            <NavLink to="/index" ><li>Home</li></NavLink>
            <NavLink to="/coupsdecoeur" ><li>Coups de Coeurs</li></NavLink>
            </ul>
        </nav>

        <div className="logo">
            <div className="logo-img"></div>
            <h1>Ciné Fan</h1>
        </div>
        </div>

        </>
    );
};

export default header;