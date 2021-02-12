import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';

import Form from '../Form';
import Button from '../Button';

export default function LoginForm () {
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function signInRoute(event) {
        event.preventDefault();
        setLoading(true);
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

    return (
      <Form onSubmit={signInRoute}>
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
        <Button disabled={loading}>
          Entrar
        </Button>
      </Form>
    );
}
