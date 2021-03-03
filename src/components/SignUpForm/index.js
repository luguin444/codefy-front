import axios from 'axios';
import React, { useState } from 'react';

import Form from '../Form';
import Button from '../Button';

export default function SignUpForm (props) {
    const { 
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        confirmPassword,
        setConfirmPassword,
        setRegistered,
     } = props;
    const [loading, setLoading] = useState(false);

    function signUpRoute(event) {
        event.preventDefault();
        setLoading(true);
        const bodyRequest = { name, email, password, confirmPassword };
        axios.post(`${process.env.API_BASE_URL}/clients/signup`, bodyRequest).then(() => {
            setLoading(false);
            setRegistered(true);
            setEmail('');
            setPassword('');
            setName('');
            setConfirmPassword('');
        }).catch((err) => {
            if (err.response.data.error === 'Senhas diferentes.') {
                alert('As senhas não são iguais. Tente novamente');
            } else if (err.response.status === 422) {
                alert('Dados não estão no padrão. Nome e senha devem conter mais de 6 caracteres');
            } else {
                alert('Problema com o cadastro. Erro desconhecido');
            }
            setLoading(false);
        });
    }

    return (
      <Form onSubmit={signUpRoute}>
        <input 
            placeholder="nome completo"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <input
            placeholder="e-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
        <input
            placeholder="senha"
            type="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            required
        />
        <input
            placeholder="repetir senha"
            type="password"
            value={confirmPassword}
            onChange={ (e) => setConfirmPassword(e.target.value)}
            required
        />
        <Button disabled={loading}>
          Cadastrar
        </Button>
      </Form>
    );
}
