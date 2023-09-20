import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./slices/counterSlice";
import { setupListeners } from '@reduxjs/toolkit/query'
import api  from './api/api'; 

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add more reducers as needed

    [api.reducerPath]: api.reducer, // Include the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // Add the RTK Query middleware
});
setupListeners(store.dispatch)


