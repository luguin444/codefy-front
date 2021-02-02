import React, {useState} from 'react';
import LoginForm from '../../components/LoginForm.js';
import Container from './styles';

export default function LoginPage () {

   const [registered, setRegistered] = useState(false);

  return (
      <Container>
         <img src = 'assets/images/logo.png' />
         <h2> learn. practice. code.</h2>
         <div className = 'loginBox'>
            <LoginForm registered = {registered}/>
            <p onClick = { () => setRegistered(!registered)}> 
               { registered ?
                  "Primeira vez ? Crie uma conta!" :
                  "Já tem uma conta ? Faça login" 
               }
            </p>
            <p>Esqueceu sua senha ?</p>
         </div>
      </Container>
  );
}
