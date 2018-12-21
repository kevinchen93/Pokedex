import React from 'react';
import { Route, Link } from 'react-router-dom';

import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className="pokedex-container">
        <ul className="pokemon-index-ul">
          { this.props.pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />) }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
