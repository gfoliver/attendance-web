import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import './styles.scss';

const Home: React.FC = () => {
    

    return (
        <div className="Home">
            <Header />
            <div className="classes">
                <h2>Minhas turmas</h2>
                <div className="wrapper">
                    <Link to="/class">
                        <div className="class">
                            <img src="https://picsum.photos/300" alt="" />
                            <span>Gestão de Projetos - FAPAN1</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;