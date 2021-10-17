import React from 'react'
import Course from './components/Course'



const App = ({courses}) => {
  console.log('App works...')
  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map(courses => <Course key={courses.id} course={courses} />
      )}
    </div>
  )
}

export default App