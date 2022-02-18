import React from 'react';
import './App.css';

import Pokedex from './componentes/pokedex';

import data from './data';

function App() {
  return (
    <div className="App">
      <Pokedex pokemons={ data } />
    </div>
  );
}

export default App;
