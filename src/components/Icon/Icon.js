import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`} onClick={props.handleClick}></i>);

Icon.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Icon;
