import React from 'react';
import Avatar from 'react-avatar';
import { BackgroundBanner, ContentBox, PageContainer } from './styles';

export default function ProfilePage(){
  const name = localStorage.getItem('name');
  // const token = localStorage.getItem('token');

  return (
    <PageContainer>
      <BackgroundBanner>
        <Avatar name={name} round={true} size="4em" maxInitials={2} />
        <h2> {name} </h2>
      </BackgroundBanner>
      <ContentBox>
      </ContentBox>
    </PageContainer>
  );
}
