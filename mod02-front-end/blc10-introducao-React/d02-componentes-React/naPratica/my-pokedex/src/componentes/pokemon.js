import { Component } from "react";
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render(){
  //  console.log(this.props); mostra o 'objeto' trabalhado.
    const { pokemon: { name, type, averageWeight: { value, measurementUnit }, image } } = this.props;

    return (
      <li>
        <img src={ image } alt={ name } />
        <p>
            <strong>
              { name }
            </strong>,
            <br />

            {' '}
            { type }
            {' '}
            { value }
            { measurementUnit }
        </p>
      </li>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string, 
    type: PropTypes.string,
    value: PropTypes.number, 
    measurementUnit: PropTypes.string, 
    image: PropTypes.string, 
  })
};

export default Pokemon;

/** name, type, averageWeight , image*/