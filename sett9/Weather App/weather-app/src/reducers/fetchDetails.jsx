import {GET_DETAILS} from '../actions/fetchDataActions';


const fetchDetails = (state = [], action) => {//this is the reducer for the AIR QUALITY fetchData
        switch (action.type) {
            case GET_DETAILS:
                return [action.payload];
            default:
                return state;
        }
}


export default fetchDetails;