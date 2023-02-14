import { useState } from 'react'

const Filter = ({value, handleFilter}) => {
  return(
  <div>
    filter shown with 
    <input value={value} onChange={handleFilter}/>
  </div>
  )
}

const PersonForm = ({nameValue, handleNameChange, numberValue, handleNumberChange, handleClick,text}) => {
  return (
    <form>
      <div>name: <input value={nameValue} onChange={handleNameChange}/></div>
      <div>number: <input value={numberValue} onChange={handleNumberChange}/></div>
      <div>
        <button onClick={handleClick}>{text}</button>
      </div>
    </form>
  )
}

const Persons = ({pers, nFilter}) => {
  return(
    pers.filter((x) => x.name.toLowerCase().includes(nFilter.toLowerCase())).map(y => <p key={y.name}>{y.name} {y.number}</p>)
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
    const loytyy = persons.filter(x => x.name === newName)
    if (loytyy.length > 0){
      window.alert(`${newName} is already added to phonebook`)
    }
    else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleNameFilter = (event) => {
    setNameFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter value={nameFilter} handleFilter = {handleNameFilter} />       
      
      <h3>Add a new</h3>
      
      <PersonForm 
      nameValue={newName} 
      handleNameChange={handleNameChange}
      numberValue={newNumber} 
      handleNumberChange={handleNumberChange}  
      handleClick={addPerson}
      text="add"
      />

      <h3>Numbers</h3>

      <Persons pers={persons} nFilter={nameFilter}/>
  </div>  
  )
}

export default App