import {GET_DATA, FETCHING_ERROR} from '../actions/fetchDataActions';


const fetchDataReducer = (state = [], action) => { //this is the reducer for the Weather and Forecats fetchData
        switch (action.type) {
            case GET_DATA:
                return [...state, action.payload];
            default:
                return state;
        }
}


export default fetchDataReducer;