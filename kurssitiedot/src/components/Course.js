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

export default Course