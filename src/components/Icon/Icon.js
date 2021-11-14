import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.scss';

const Icon = props => (<i className={`fas fa-${props.name} ${styles.component}`} onClick={props.handleClick}></i>);

Icon.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Icon;
