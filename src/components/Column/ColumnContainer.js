import {connect} from 'react-redux';
import Column from './Column';
import {createActionAddCard} from '../../redux/cardsRedux';
import {getCardsForColumn} from '../../redux/cardsRedux';
import {createActionRemoveCard} from '../../redux/cardsRedux';
import { createActionMarkDone } from '../../redux/cardsRedux';


const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
    done: false,
  })),
  removeCard: id => dispatch(createActionRemoveCard({id})),
  markDone: id => dispatch(createActionMarkDone({id})),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);