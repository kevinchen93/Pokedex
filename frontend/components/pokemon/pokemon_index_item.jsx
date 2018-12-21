import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <Link to={`/pokemon/${this.props.poke.id}`}>
          <p>{ this.props.poke.name}</p>
          <img src={this.props.poke.image_url} />
        </Link>
      </li>
    )
  }
}

export default PokemonIndexItem;
