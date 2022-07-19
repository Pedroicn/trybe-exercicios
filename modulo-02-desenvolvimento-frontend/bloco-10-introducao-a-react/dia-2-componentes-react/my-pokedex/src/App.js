import './App.css';
import pokemons from './data';
import './pokemoncss.css'
import Pokedex from './components/Pokedex';
function App() {
  return (
    <div className="App">
      <h1>POKEDEX</h1>
      <Pokedex pokemon={pokemons}/>
    </div>
  );
}

export default App;
