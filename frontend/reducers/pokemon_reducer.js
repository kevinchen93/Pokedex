import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge(newState, action.pokemon);
    case RECEIVE_POKEMON:
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
