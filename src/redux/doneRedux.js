// selectors
export const getDone = (({done}) => done);

// action name creator
const reducerName = 'done';
const createActionName = name => `app/${reducerName}/${name}`;

//action types 
export const MARK_DONE = createActionName('MARK_DONE');

// action creators
export const createActionMarkDone = payload => ({payload: {...payload}, type: MARK_DONE });

//reducer
export default function reducer(state = false, action = {}) {
  switch(action.type) {
    case MARK_DONE: {
      return !state;
    }    
    default:
      return state;
  }
}