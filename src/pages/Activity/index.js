import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ActivityContent from '../../components/ActivityContent';
import ActivityHeader from '../../components/ActivityHeader';
import ActivityProgress from '../../components/ActivityProgress';
import StyledActivity from './styles';

export default function Activity(){
    // eslint-disable-next-line no-unused-vars
    const [chapters, setChapters] = useState([
      {
          'id': 161,
          'name': 'Apresentação',
          'topics': [
              {
                  'id': 156,
                  'name': 'Como usar',
                  'activities': [
                    {
                      'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                      'topicId': 156,
                      'type': 'theorie'
                    },
                    {
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                      'topicId': 156,
                      'type': 'exercise'
                    },
                  ]
              },
              {
                  'id': 157,
                  'name': 'Entrando na plataforma',
                  'activities': [
                    {
                      'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                      'topicId': 156,
                      'type': 'theorie'
                    },
                    {
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                      'topicId': 156,
                      'type': 'exercise'
                    },
                  ]
              }
          ]
      },
      {
          'id': 162,
          'name': 'Preparando o Ambiente',
          'topics': [
            {
                'id': 160,
                'name': 'Como usar',
                'activities': [
                  {
                    'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                    'topicId': 160,
                    'type': 'theorie'
                  },
                  {
                    'topicId': 156,
                    'type': 'exercise'
                  },
                  {
                    'topicId': 156,
                    'type': 'exercise'
                  },
                  {
                    'topicId': 156,
                    'type': 'exercise'
                  },
                ]
            },
          ]
      }
  ]);
  const [chapter, setChapter] = useState(0);
  const [topic, setTopic] = useState(0);
  const [activity, setActivity] = useState(0);
  const history = useHistory();

  function handleActivity(){
    if (activity < chapters[chapter].topics[topic].activities.length - 1){
      setActivity(activity + 1);
    } else if (topic < chapters[chapter].topics.length - 1){
      setTopic(topic + 1);
      setActivity(0);
    } else if (chapter < chapters.length - 1){
      setChapter(chapter + 1);
      setTopic(0);
      setActivity(0);
    } else {
      history.push('/home');
    }
  }
  return (
    <StyledActivity>
      <ActivityHeader chapter={chapters[chapter].name} topic={chapters[chapter].topics[topic].name} />
      <ActivityProgress activities={chapters[chapter].topics[topic].activities} activity={activity} />
      <ActivityContent activity={chapters[chapter].topics[topic].activities[activity]} />
      <form className="next-container">
        <div className="checkbox-container">
          <div className="checkbox"></div> 
          <p>Marcar como concluído</p>
        </div>
        <button type='button' onClick={() => handleActivity()}>Avançar {'>>'}</button>
      </form>
    </StyledActivity>
    );
}
