import React from 'react';
import styles from './Column.scss';
import Card from "../Card/Card.js";
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Creator from "../Creator/Creator.js";
import Icon from "../Icon/Icon.js";

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }
  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string,

  }
  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title

          }
        ]
      }
    ));
  }
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon>
              {this.props.name}
            </Icon>
          </span>
          {this.props.title}
        </h3>
        <div className={styles.card}>
          {this.state.cards.map(({ key, ...cardProps }) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>
        <div className={styles.creator}>

          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />

        </div>



      </section>

    )
  }
}
export default Column;