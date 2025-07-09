import React, { useState } from 'react';
import Information from './Information';
import axios from 'axios';

function Forms() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [arquivo, setArquivo] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/users', {
                userName,
                email,
                phone,
                password,
            });
            alert('Registro feito com sucesso! Seu ID é: ' + response.data.id);
            setUserName('');
            setEmail('');
            setPhone('');
            setPassword('');
            setArquivo(null);
        } catch (error) {
            alert('Erro ao cadastrar usuário');
        }
    };

    return (
        <div className="container mt-3">
            <hr />
            <div className="row">
                <div className="col-12 col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="userName" className="form-label">Nome completo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="userName"
                                placeholder="Yugi Moto"
                                value={userName}
                                onChange={e => setUserName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="yugi@example.com"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">WhatsApp</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                placeholder="(11) 91234-5678"
                                value={phone}
                                onChange={e => setPhone(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="**********"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        {/* <div className="mb-3">
                            <label htmlFor="arquivo" className="form-label">Envio de arquivo (.ydk)</label>
                            <input
                                type="file"
                                className="form-control"
                                id="arquivo"
                                accept=".ydk"
                                onChange={e => setArquivo(e.target.files[0])}
                                disabled
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Enviar</button> */}
                    </form>
                </div>

                <div className="col-12 col-md-8 mt-3">
                    <Information />
                </div>
            </div>
            <hr className='' />
        </div>
    );
}

export default Forms;
