import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { cashReducer } from './cashReducer';
import { customerReducer } from './customerReducer';

const rootReducer = combineReducers({
  cash: cashReducer,
  customer: customerReducer
});

export const store = configureStore({
  reducer: { rootReducer }
});
