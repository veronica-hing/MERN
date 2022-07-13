import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {FetchButton} from './components/FetchButton';
import {PokemonList} from './components/PokemonList';

function App() {
  const [pokemons, setPokemons] = useState([]);
  return (
    <div className="App">
      <FetchButton setPokemons = {setPokemons}/>
      <PokemonList pokemons = {pokemons}/>
    </div>
  );
}

export default App;
