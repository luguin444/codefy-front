import React, { useState } from 'react';
import ActivityContent from '../../components/ActivityContent';
import ActivityHeader from '../../components/ActivityHeader';
import ActivityProgress from '../../components/ActivityProgress';
import StyledActivity from './styles';

export default function Activity(){
    const [chapters, setChapters] = useState([
      {
          'id': 161,
          'name': 'Apresentação AAAAA',
          'topics': [
              {
                  'id': 156,
                  'name': 'Introdução a prorgramação',
                  'activities': [
                    {
                      'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                      'topicId': 156,
                      'type': 'theorie'
                    },
                    {
                      'youtubeLink': 'https://www.youtube.com/embed/783qJgyQnno',
                      'topicId': 156,
                      'type': 'theorie'
                    }
                  ]
              },
              {
                  'id': 157,
                  'name': 'Motivação JavaScript',
                  'activities': [
                    {
                      'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                      'topicId': 156,
                      'type': 'theorie'
                    },
                    {
                      'youtubeLink': 'https://www.youtube.com/embed/783qJgyQnno',
                      'topicId': 156,
                      'type': 'theorie'
                    }
                  ]
              }
          ]
      },
      {
          'id': 162,
          'name': 'Apresentação BBBBBB',
          'topics': [
            {
                'id': 160,
                'name': 'Introdução a prorgramação',
                'activities': [
                  {
                    'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                    'topicId': 160,
                    'type': 'theorie'
                  },
                  {
                    'youtubeLink': 'https://www.youtube.com/embed/783qJgyQnno',
                    'topicId': 160,
                    'type': 'theorie'
                  }
                ]
            },
          ]
      }
  ]);
  const [chapter, setChapter] = useState(0);
  const [topic, setTopic] = useState(0);
  const [activity, setActivity] = useState(0);

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
    }
  }
  console.log(activity);
    return (
      <StyledActivity>
        <ActivityHeader chapter={chapters[chapter].name} topic={chapters[chapter].topics[topic].name} />
        <ActivityProgress activities={chapters[chapter].topics[topic].activities} />
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
