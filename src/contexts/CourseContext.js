import React, { createContext, useState } from 'react';

const CourseContext = createContext();
export default CourseContext;

export function CourseProvider({ children }) {
  const [courseContext, setCourseContext] = useState({
    'id': 117,
    'name': 'Jsaswweas22as',
    'deleted': false,
    'image': 'https://static.imasters.com.br/wp-content/uploads/2018/12/10164438/javascript.jpg',
    'description': 'JavaScript do Zero',
    'createdAt': '2021-02-11T00:24:50.767Z',
    'updatedAt': '2021-02-11T00:24:50.767Z',
    'chapters': [
      {
          'id': 161,
          'name': 'Apresentação',
          'topics': [
              {
                  'id': 156,
                  'name': 'Como usar',
                  'activities': [
                    {
                      'id': 1,
                      'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                      'topicId': 156,
                      'type': 'theorie'
                    },
                    {
                      'id': 2,
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                        'id': 3,
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                        'id': 4,
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
                        'id': 5,
                      'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                      'topicId': 156,
                      'type': 'theorie'
                    },
                    {
                        'id': 6,
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                        'id': 7,
                      'topicId': 156,
                      'type': 'exercise'
                    },
                    {
                        'id': 8,
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
                    'id': 9,
                    'youtubeLink': 'https://www.youtube.com/embed/Ptbk2af68e8',
                    'topicId': 160,
                    'type': 'theorie'
                  },
                  {
                    'id': 10,
                    'topicId': 156,
                    'type': 'exercise'
                  },
                  {
                    'id': 11,
                    'topicId': 156,
                    'type': 'exercise'
                  },
                  {
                    'id': 12,
                    'topicId': 156,
                    'type': 'exercise'
                  },
                ]
            },
          ]
      }
  ]
  });

  return (
    <CourseContext.Provider value={{ courseContext, setCourseContext }}>
      {children}
    </CourseContext.Provider>
  );
}
