import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import './styles.css';
import api from '../../services/api';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');

    const history = useHistory();

    if (!ongId) {
        history.push('/');
    }

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value,
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            alert('Caso cadastrado com sucesso');
            history.push('/dashboard');
        } catch (err) {
            alert('Não foi possível criar o caso, tente novamente.');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o seu caso detalhadamente para encontrar um herói
                        para resolvê-lo.
                    </p>

                    <Link to="/dashboard" className="back-link">
                        <FiArrowLeft size={16} color={"#E02041"} />
                        Voltar para Dashboard
                    </Link>
                </section>
                
                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                     />
                    <textarea 
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                     />
                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required
                     />
                    
                    <div class="button-group">
                        {/* <button className="button" type="reset">Cancelar  </button> */}
                        <button className="button" type="submit">Cadastrar  </button>
                    </div>
                </form>
            </div>
        </div>
    );
}