import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard';

function App() {
  const persons = [
    {
      firstName: "Jane",
      lastName: "Doe",
      age: 45,
      hairColor: "Black"
    },
    {
      firstName: "John",
      lastName: "Smith",
      age: 88,
      hairColor: "Brown"
    },
    {
      firstName: "Millard",
      lastName: "Fillmore",
      age: 50,
      hairColor: "Brown"
    },
    {
      firstName: "Maria",
      lastName: "Smith",
      age: 62,
      hairColor: "Brown"
    }
    ];
    const peeps = persons.map(p => 
      <PersonCard firstName = {p.firstName} lastName = {p.lastName} age = {p.age} hairColor = {p.hairColor}/>
    )
  return (
    <div className="App">
      {peeps}
    </div>
  );
}

export default App;
