import * as actions from '../actions';

const initialState = {
  loading: false,
};

export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SHOW_LOADER:
      return { ...state, loading: true };
    case actions.HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
