import React from 'react';


class PokemonIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <p>{ this.props.poke.name}</p>
        <img src={this.props.poke.image_url} />
      </li>
    )
  }
}

export default PokemonIndexItem;
