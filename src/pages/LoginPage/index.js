import React, { useState } from 'react';
import LoginForm from '../../components/LoginForm.js';
import SignUpForm from '../../components/SignUpForm/index.js';
import Container from './styles';

export default function LoginPage () {
    const [registered, setRegistered] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
      <Container>
        <img src='/assets/images/logo.png' alt="" />
        <h2> learn. practice. code.</h2>
        <div className='loginBox'>
          {registered ?
            <LoginForm />
            :
            <SignUpForm 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            name={name}
            setName={setName}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            setRegistered={setRegistered}
            />
          }
          
          <button onClick={() => setRegistered(!registered)} className="footer"> 
            { registered ?
                        'Primeira vez ? Crie uma conta!' :
                        'Já tem uma conta ? Faça login' 
                    }
          </button>
          <button className="footer">Esqueceu sua senha ?</button>
        </div>
      </Container>
    );
}
