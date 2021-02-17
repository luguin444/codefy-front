import React, { createContext, useState } from 'react';

const CourseContext = createContext();
export default CourseContext;

export function CourseProvider({ children }) {
  const [courseContext, setCourseContext] = useState(null);

  return (
    <CourseContext.Provider value={{ courseContext, setCourseContext }}>
      {children}
    </CourseContext.Provider>
  );
}
