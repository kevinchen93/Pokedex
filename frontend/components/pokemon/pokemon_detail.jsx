import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestPokemon(parseInt(this.props.match.params.pokemonId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.pokemon && this.props.pokemon.id !== parseInt(nextProps.match.params.pokemonId)) {
      this.props.requestPokemon(parseInt(nextProps.match.params.pokemonId));
    }
  }

  render() {
    if (!this.props.pokemon || !this.props.pokemon.poke_type) {
      return null;
    }

    return (
      <div>
        <img src={this.props.pokemon.image_url} />
        <h3>{this.props.pokemon.name}</h3>
        <p>{this.props.pokemon.poke_type}</p>
        <p>{this.props.pokemon.attack}</p>
        <p>{this.props.pokemon.defense}</p>
        <p>{this.props.pokemon.moves.join(', ')}</p>
      </div>
    )
  }
}

export default PokemonDetail;
