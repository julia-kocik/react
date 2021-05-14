import {connect} from 'react-redux';
import List from './List';
import {getColumnsForList} from '../../redux/columnsRedux';
import {createActionAddColumn} from '../../redux/columnsRedux';
import { createAction_moveCard } from '../../redux/cardsRedux';



const mapStateToProps = (state, props) => {
  const id = props.match.params.id;
  const filteredLists = state.lists.filter(list => list.id == id);
  const listParams = filteredLists[0] || {};

  return {
    ...listParams,
    columns: getColumnsForList(state, id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  moveCard: (payload) => dispatch(createAction_moveCard(payload)),
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);