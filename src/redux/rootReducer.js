import { combineReducers } from 'redux';
import {
  INCREMENT,
  DECREMENT,
  CHANGE_THEME,
  ENABLE_BTN,
  DISABLE_BTN,
} from './types';

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const initialThemeState = {
  value: 'light',
  disabled: false,
};

function themeReducer(state = initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload };
    case ENABLE_BTN:
      return { ...state, disabled: false };
    case DISABLE_BTN:
      return { ...state, disabled: true };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});
