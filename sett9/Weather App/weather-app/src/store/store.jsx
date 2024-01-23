import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from '../reducers/fetchDataReducer';
import fetchDetails from '../reducers/fetchDetails';
const store = configureStore({
  reducer: {
    fetch: fetchDataReducer,
    fetchDetails: fetchDetails,
  },
});


export default store;
