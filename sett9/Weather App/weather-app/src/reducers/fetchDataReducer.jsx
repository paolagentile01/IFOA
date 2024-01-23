import {GET_DATA, FETCHING_ERROR} from '../actions/fetchDataActions';


const fetchDataReducer = (state = [], action) => {
        switch (action.type) {
            case GET_DATA:
                return [...state, action.payload];
            case FETCHING_ERROR:
                return [...state, action.payload];
            default:
                return state;
        }
}


export default fetchDataReducer;