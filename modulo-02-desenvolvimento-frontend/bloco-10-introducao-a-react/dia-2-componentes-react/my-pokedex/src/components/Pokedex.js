import Pokemon from "./Pokemon";
import React from 'react';


class Pokedex extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div className="pokedex">
        { pokemon.map((poke) => <Pokemon key={poke.id} pokemon={poke}/>) }
      </div>
    )
  }
}

export default Pokedex;