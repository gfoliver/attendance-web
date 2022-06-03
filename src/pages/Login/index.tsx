import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

const Login: React.FC = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('dashboard');
    };

    return (
        <div className="Login">
            <div className="overlay"></div>
            <div className="card">
                <img src="https://www.uniritter.edu.br/assets/images/logo_uniritter.jpg" alt="" />
                <form onSubmit={handleSubmit}>
                    <div className="inputWrap">
                        <label htmlFor="user">Usuário</label>
                        <input type="text" id="user" placeholder="Nome de usuário" />
                    </div>
                    <div className="inputWrap">
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" placeholder="Digite sua senha" />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </div>
    );
}

export default Login;