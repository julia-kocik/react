import React from 'react';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import PropTypes from 'prop-types';
import Container from '../Container/Container';



class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  }
  render() {
    const {cards} = this.props;
    return (
      <Container>
        <section>
          {
            <div className={styles.cards}>
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          }
        </section>
      </Container>
    );
  }
}
export default SearchResults;