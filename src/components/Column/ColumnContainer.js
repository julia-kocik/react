import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard} from '../../redux/cardsRedux';
import {getCardsForColumn} from '../../redux/cardsRedux';
import {createActionRemoveCard} from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
  removeCard: id => dispatch(createActionRemoveCard({id})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);