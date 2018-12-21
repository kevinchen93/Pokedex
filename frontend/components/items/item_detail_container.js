import { connect } from 'react-redux';
import ItemDetail from './item_detail';

const selectPokemonItem = (state, itemId) => {
  return state.entities.items[itemId];
};

const mapStateToProps = (state, ownProps) => {
  return {
    item: selectPokemonItem(state, ownProps.match.params.itemId)
  };
};


export default connect(mapStateToProps)(ItemDetail);
