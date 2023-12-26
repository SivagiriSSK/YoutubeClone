// Reducer is a fn that takes in state and action
// returns state based on the action type dispatched
// reducer must return state

const todoReducer = (state = [], action) => {
  // state is comp-wide data
  // action is an obj
  // action.type is must
  // action.payload -- is optional
  console.log('Inside Reducer');
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'LIST_TODOS':
      return action.payload;

    case 'EDIT_TODO':
      return state;

    case 'CHECK_TODO': {
      const checkBox = state.findIndex((todo) => todo.id === action.payload.id);
      const temporaryState = [...state];
      temporaryState[checkBox].isChecked = !temporaryState[checkBox].isChecked;
      console.log(temporaryState);
      return temporaryState;
    }

    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
};

export default todoReducer;

// some possible actions for todo app
/*
  ADD_TODO
  LIST_TODOS
*/
