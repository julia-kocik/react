import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getMatchingCards} from '../../redux/cardsRedux.js';
import {createActionAddCard} from '../../redux/cardsRedux.js';


const mapStateToProps = (state, props)=> {
  const id = props.match.params.searchString;
  const filteredCards = state.cards.filter(card => card.id == id);
  const cardParams = filteredCards[0] || {};

  return {
    ...cardParams,
    cards: getMatchingCards(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);