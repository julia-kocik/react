import {combineReducers, createStore} from 'redux';
import initialStoreData from '../data/dataStore';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';
import doneReducer from './doneRedux';

// define initial state and shallow-merge initial data
const initialState = {
  app: initialStoreData.app,
  lists: initialStoreData.lists,
  columns: initialStoreData.columns,
  cards: initialStoreData.cards,
  searchString: '',
  done: initialStoreData.done,
};

// define reducers
const reducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
  done: doneReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

// merge all reducers
const storeReducer = combineReducers(reducers);

// create store
const store = createStore(
  storeReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
