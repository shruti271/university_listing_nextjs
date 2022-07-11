import { combineReducers, configureStore } from '@reduxjs/toolkit';

import universityReducer from './university/universitySlice';

const store = configureStore({
  reducer: { universities: universityReducer },
});

export default store;
