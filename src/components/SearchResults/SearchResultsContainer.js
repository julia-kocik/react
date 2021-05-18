import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getMatchingCards} from '../../redux/cardsRedux.js';



const mapStateToProps = (state, props)=> {
  const searchString = props.match.params.searchString;
 
  return {
    cards: getMatchingCards(state, searchString),
  };
};


export default connect(mapStateToProps)(SearchResults);