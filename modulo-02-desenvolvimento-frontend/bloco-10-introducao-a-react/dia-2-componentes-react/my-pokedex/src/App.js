import './App.css';
import pokemons from './data';
import './pokemoncss.css'
import Pokedex from './components/Pokedex';
function App() {
  return (
    <div className="App">
      <Pokedex pokemon={pokemons}/>
    </div>
  );
}

export default App;
