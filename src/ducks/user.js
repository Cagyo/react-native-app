export const REQUEST_USER_DATA = 'app/REQUEST_USER_DATA';
export const REQUEST_USER_DATA_SUCCESS = 'app/REQUEST_USER_DATA_SUCCESS';
export const REQUEST_USER_DATA_FAIL = 'app/REQUEST_USER_DATA_FAIL';
export const UPDATE_USERNAME = 'app/UPDATE_USERNAME';
export const UPDATE_AVATAR_URI = 'app/UPDATE_AVATAR_URI';

export const requestUserData = () => ({
  type: REQUEST_USER_DATA,
});

export const receiveUserData = userModel => ({
  type: REQUEST_USER_DATA_SUCCESS,
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
  [REQUEST_USER_DATA]: state => ({
    ...state,
    isFetching: true,
  }),
  [REQUEST_USER_DATA_SUCCESS]: (state, action) => ({
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
  userName: 'Username',
  avatarUri: 'https://facebook.github.io/react/img/logo_og.png',
}, action) {
  if (typeof actionsLookup[action.type] === 'function') return actionsLookup[action.type](state, action);

  return state;
};
