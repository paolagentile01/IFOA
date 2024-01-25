import { configureStore } from '@reduxjs/toolkit';
import fetchDataReducer from '../reducers/fetchDataReducer';
import fetchDetails from '../reducers/fetchDetails';
import errorReducer from '../reducers/errorHandling';
/* import loadingCheckReducer from '../reducers/loadingCheck'; */

const store = configureStore({ //this configures the Redux Store with all the available reducers
  reducer: {
    fetch: fetchDataReducer,
    fetchDetails: fetchDetails,  
    error: errorReducer,
/*     load: loadingCheckReducer, */
  },
});


export default store;
console.log(store);