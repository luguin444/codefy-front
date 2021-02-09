import React from 'react';
import ActivitieHeader from '../../components/ActivitieHeader';
import ActivitieProgress from '../../components/ActivitieProgress';
import StyledActivitie from './styles';

export default function Activitie(){
    return (
      <StyledActivitie>
        <ActivitieHeader />
        <ActivitieProgress />
      </StyledActivitie>
    );
}
