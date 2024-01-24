import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from '../reducers/fetchDataReducer';
import fetchDetails from '../reducers/fetchDetails';
import errorReducer from '../reducers/errorHandling';

const store = configureStore({
  reducer: {
    fetch: fetchDataReducer,
    fetchDetails: fetchDetails,  
    error: errorReducer,
  },
});


export default store;
