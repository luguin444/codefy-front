import axios from 'axios';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { useHistory } from 'react-router-dom';
import { BackgroundBanner, ContentBox, PageContainer, ContainerData, ContainerButton } from './styles';

export default function ProfilePage(){
  const nameStorage = localStorage.getItem('name');
  const emailStorage = localStorage.getItem('email');
  const token = localStorage.getItem('token');
  const history = useHistory();

  const [name, setName] = useState(nameStorage);
  const [email, setEmail] = useState(emailStorage);
  const [changingPassword, setChangingPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function sendDataToServer() {
    setLoading(true);
    const body = changingPassword ? { name, email, password, confirmPassword } : { name, email };
    axios.post(`${process.env.API_BASE_URL}/clients/change-profile`, body, { headers: { 'X-Access-Token': token } })
    .then(() => {
      setLoading(false);
      history.push('/home');
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
    });
  }

  return (
    <PageContainer>
      <BackgroundBanner>
        <Avatar name={nameStorage} round={true} size="4em" maxInitials={2} />
        <h2> {nameStorage} </h2>
      </BackgroundBanner>
      <ContentBox>
        <ContainerData>
          <div className='inputBox'>
            <p>Nome completo</p>
            <input 
              type='text'
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
            <p>Email</p>
            <input 
              type='email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          <div className='image'>
            <Avatar name={nameStorage} round={true} size="9em" maxInitials={2} />
          </div>   
        </ContainerData>
        <ContainerButton>
          <button className='password' disabled={loading}> Trocar senha</button>
          <button className='save' onClick={sendDataToServer} disabled={loading}>Salvar</button>            
        </ContainerButton>
      </ContentBox>
    </PageContainer>
  );
}
