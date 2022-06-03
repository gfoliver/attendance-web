import React from 'react';
import { Link } from 'react-router-dom';

import logoutImg from '../../assets/logout.svg';
import './styles.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Link to="/dashboard">
                <img src="https://www.uniritter.edu.br/assets/images/logo_uniritter.jpg" className="logo" />
            </Link>
            <Link className="logout" to="/">
                <img src={logoutImg} />
            </Link>
        </div>
    )
}

export default Header;