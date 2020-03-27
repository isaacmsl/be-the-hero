import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';


import api from '../../services/api';


import logoImg from '../../assets/logo.svg';

import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
           name,
           email,
           whatsapp,
           city,
           uf 
        };

        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);

            history.push('/');
        }
        catch(err) {
            alert('Erro no cadastro, tente novamente.');
        }
    }


    return (
        <div className="not-found-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Página não encontrada</h1>
                    <p>
                        Você está perdido?
                    </p>

                    <Link to="/dashboard" className="back-link">
                        <FiArrowLeft size={16} color={"#E02041"} />
                        Voltar
                    </Link>
                </section>
            </div>
        </div>
    );
}