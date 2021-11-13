import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';


const Hero = props => {
  const {titleText, imageSrc} = props;
  return (
    <header className={styles.component}>
      <h2 className={styles.title}>{ReactHtmlParser(titleText)}</h2>
      <img className={styles.image} src={imageSrc}/>
    </header>
  );
};


Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSrc: PropTypes.string.isRequired,
  done: PropTypes.bool,
  markDone: PropTypes.func,
};

export default Hero;


