import Course from './components/Course'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
    </div>
  )
  
}

export default App

/*
KAikki toimii

const Header = ({name}) => <h2>{name}</h2>

const Content = ({parts}) => 
parts.map( x => <p key={x.id}>{x.name} {x.exercises}</p>)

const TotalPerCourse = ({parts}) => {
  return(
    <b><p>total of {parts.reduce((sum,part) => {
      return sum + part.exercises
    },0)} exercises</p></b>
  )
}


const Course = ({courses}) => {
  return (
  courses.map((c) => {
    return(
      <div key={c.id}>
      <Header name={c.name}/>
      <Content parts ={c.parts} />
      <TotalPerCourse parts = {c.parts} />
      </div>
    )
  })
  )
}
*/