import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

import Form from './styles';
import Button from '../Button';

export default function LoginForm (props) {
    const { registered, setRegistered } = props;
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function sendDataToServer(event) {
        event.preventDefault();
        setLoading(true);
        registered ? signInRoute() : signUpRoute();
    }

    function signInRoute() {
        const bodyRequest = { email, password };
        axios.post(`${process.env.API_BASE_URL}/clients/signin`, bodyRequest).then(({ data }) => {
            setLoading(false);
            setUser(data);
            localStorage.setItem('token', data.token);
            localStorage.setItem('name', data.name);
            history.push('/home');
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        });
    }

    function signUpRoute() {
        const bodyRequest = { name, email, password, confirmPassword };
        axios.post(`${process.env.API_BASE_URL}/clients/signup`, bodyRequest).then(({ data }) => {
            setLoading(false);
            setRegistered(true);
            console.log(data);
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
      <Form onSubmit={sendDataToServer}>
        {!registered &&
        <input 
            placeholder="nome completo"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
        />
        }
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
        {!registered && 
        <input
            placeholder="repetir senha"
            type="password"
            value={confirmPassword}
            onChange={ (e) => setConfirmPassword(e.target.value)}
            required
        />}
        <Button disabled={loading}>
          {registered ? 'Entrar' : 'Cadastrar'}
        </Button>
      </Form>
    );
}
