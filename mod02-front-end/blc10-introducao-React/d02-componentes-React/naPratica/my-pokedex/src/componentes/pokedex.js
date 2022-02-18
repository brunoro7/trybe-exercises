import { Component } from "react";
import PropTypes from 'prop-types';
import Pokemon from "./pokemon";

class Pokedex extends Component {
  render(){
    const { pokemons } = this.props;
    return (
      <div className='cards-pokedex'>
        { pokemons.map((bichinho) => <Pokemon key={ bichinho.id } pokemon={ bichinho } />) }
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      type: PropTypes.string,
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
      image: PropTypes.image,
    })
  ).isRequired,
};

export default Pokedex;