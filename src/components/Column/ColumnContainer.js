import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard} from '../../redux/cardsRedux';
import {getCardsForColumn} from '../../redux/cardsRedux';
import {createActionRemoveCard} from '../../redux/cardsRedux';
import {getDone} from '../../redux/doneRedux';
import {createActionMarkDone} from '../../redux/doneRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
  done: getDone(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
  removeCard: id => dispatch(createActionRemoveCard({id})),
  markDone: () => dispatch(createActionMarkDone()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);