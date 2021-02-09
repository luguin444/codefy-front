import React from 'react';
import ActivityContent from '../../components/ActivityContent';
import ActivityHeader from '../../components/ActivityHeader';
import ActivityProgress from '../../components/ActivityProgress';
import StyledActivity from './styles';

export default function Activity(){
    return (
      <StyledActivity>
        <ActivityHeader />
        <ActivityProgress />
        <ActivityContent />
        <form className="next-container">
          <div className="checkbox-container">
            <div className="checkbox"></div> 
            <p>Marcar como concluído</p>
          </div>
          <button type='button'>Avançar {'>>'}</button>
        </form>
      </StyledActivity>
    );
}
