import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import PokemonIndexContainer from './pokemon/pokemon_index_container';
import PokemonDetailContainer from './pokemon/pokemon_detail_container';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter >
        <div className="page-container">
          <Route path="/" component={PokemonIndexContainer} />
          <div className="poke-display">
            <Switch>
              <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
              <Route path="/" render={() => <p>Select a pokemon!</p>} />
            </Switch>
          </div>
        </div>
      </HashRouter>
    </Provider>
  );
};
export default Root;
