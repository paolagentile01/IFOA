import {GET_DETAILS} from '../actions/fetchDataActions';


const fetchDetails = (state = [], action) => {
        switch (action.type) {
            case GET_DETAILS:
                return [action.payload];
            default:
                return state;
        }
}


export default fetchDetails;