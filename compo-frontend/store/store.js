import { combineReducers, configureStore } from '@reduxjs/toolkit';

import universityReducer from './university/universitySlice';

const getStore = (incomingPreloadedState) => {
  const store = configureStore({
    reducer: { universities: universityReducer },
    preloadedState: incomingPreloadedState,
  });

  return store;
};

export default getStore;
