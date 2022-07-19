import { combineReducers, configureStore } from '@reduxjs/toolkit';

import universityReducer from './university/universitySlice';
import emailReducer from './email/emailSlice';

const store = configureStore({
  reducer: { universities: universityReducer, email: emailReducer },
});

export default store;
