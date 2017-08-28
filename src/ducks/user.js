export const REQUEST_CURRENT_USER = 'app/REQUEST_CURRENT_USER';
export const RECEIVE_CURRENT_USER = 'app/RECEIVE_CURRENT_USER';
export const UPDATE_USERNAME = 'app/UPDATE_USERNAME';
export const UPDATE_AVATAR_URI = 'app/UPDATE_AVATAR_URI';

export const requestCurrentUser = () => ({
  type: REQUEST_CURRENT_USER,
});

export const receiveCurrentUser = userModel => ({
  type: RECEIVE_CURRENT_USER,
  userModel,
});

export const updateUserName = userName => ({
  type: UPDATE_USERNAME,
  userName,
});

export const updateAvatarUri = avatarUri => ({
  type: UPDATE_AVATAR_URI,
  avatarUri,
});

const actionsLookup = {
  [REQUEST_CURRENT_USER]: state => ({
    ...state,
    isFetching: true,
  }),
  [RECEIVE_CURRENT_USER]: (state, action) => ({
    ...state,
    ...action.userModel,
    isFetching: false,
  }),
  [UPDATE_USERNAME]: (state, action) => ({
    ...state,
    userName: action.userName,
  }),
  [UPDATE_AVATAR_URI]: (state, action) => ({
    ...state,
    avatarUri: action.avatarUri,
  }),
};

export const user = function user(state = {
  userName: 'Username3',
  avatarUri: 'https://facebook.github.io/react/img/logo_og.png',
}, action) {
  if (typeof actionsLookup[action.type] === 'function') return actionsLookup[action.type](state, action);

  return state;
};
