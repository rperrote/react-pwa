const initialState = {
  cant: 0,
  list: [],
  visibility: "SHOW_ALL"
};

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return Object.assign({}, state, {
        list: state.list.concat({
          id: state.cant++,
          text: action.text,
          completed: false
        }),
        cant: state.cant++
      });
    }
    case TOGGLE_TODO: {
      return Object.assign({}, state, {
        list: state.list.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        })
      });
    }
    case EDIT_TODO: {
      return Object.assign({}, state, {
        list: state.list.map(todo => {
          if (todo.id !== action.id) {
            return todo;
          }

          return Object.assign({}, todo, {
            text: action.text
          });
        })
      });
    }
    case SET_VISIBILITY_FILTER: {
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      });
    }
    default:
      return state;
  }
};
