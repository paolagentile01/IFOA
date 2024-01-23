export const GET_DATA = 'GET_DATA';
export const FETCHING_ERROR = 'FETCHING_ERROR';
const apiKey = '6c6e849d54a8a74f5542dc039fea4bb4';

export function fetchDataSearch(location) {
    return async (dispatch) => {
        try {
          const [response1, response2] = await Promise.all([
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&limit=2&units=metric&appid=${apiKey}`),
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=2&units=metric&appid=${apiKey}`),
          ]);

          const data1 = await response1.json();
          const data2 = await response2.json();
    
          console.log(data1);
          console.log(data2);
    

          const cityData = {
            city: data1,
            details: data2,
          };

          dispatch({ type: GET_DATA, payload: cityData });
        } catch (error) {
          const errorMessage = 'Something went wrong';
          dispatch({ type: FETCHING_ERROR, payload: errorMessage});
          console.log(error);
        }
      };
}

export const GET_DETAILS = 'GET_DETAILS';

export function fetchClimeDetails(lat, lon) {
  return async (dispatch) => {
      try {
        const resp = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);

        const data = await resp.json();
  
        console.log(data);

        const climeData = {
          climeDetails: data
        };

        dispatch({ type: GET_DETAILS, payload: climeData });
      } catch (error) {
        console.log(error);
      }
    };
}
