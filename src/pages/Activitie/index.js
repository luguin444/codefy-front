import React from 'react';
import ActivitieContent from '../../components/ActivitieContent';
import ActivitieHeader from '../../components/ActivitieHeader';
import ActivitieProgress from '../../components/ActivitieProgress';
import StyledActivitie from './styles';

export default function Activitie(){
    return (
      <StyledActivitie>
        <ActivitieHeader />
        <ActivitieProgress />
        <ActivitieContent />
      </StyledActivitie>
    );
}
