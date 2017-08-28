export const REQUEST_LIST = 'app/REQUEST_LIST';
export const REQUEST_LIST_SUCCESS = 'app/REQUEST_LIST_SUCCESS';
export const REQUEST_LIST_FAIL = 'app/REQUEST_LIST_FAIL';
export const ADD_TO_LIST = 'app/ADD_TO_LIST';

export const requestList = () => ({
  type: REQUEST_LIST,
});

export const receiveList = items => ({
  type: REQUEST_LIST_SUCCESS,
  items,
});

export const addToList = item => ({
  type: ADD_TO_LIST,
  item,
});

const actionsLookup = {
  [REQUEST_LIST]: state => ({
    ...state,
  }),
  [REQUEST_LIST_SUCCESS]: (state, action) => ({
    ...state,
    items: action.list,
  }),
  [ADD_TO_LIST]: (state, action) => ({
    ...state,
    items: [...state.items, action.item],
  }),
};

export const list = function list(state = {
  items: [],
}, action) {
  if (typeof actionsLookup[action.type] === 'function') return actionsLookup[action.type](state, action);

  return state;
};
