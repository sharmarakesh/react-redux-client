import axios from 'axios';
// eslint-disable-next-line
const apiUrl = "/api/";

export const fetchUserInformation = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_USER_INFORMATION_REQUEST'
        });

        //axios.get(apiUrl + "/fecthUserInfo")
        axios.get("data/data.json")
            .then((response) => {
                dispatch(fetchUserInformationFullfilled(response.data))
            })
            .catch((error) => {
                dispatch(fetchUserInformationRejected(error))
            })
    }
}

export const fetchUserInformationFullfilled = (userInformations) => {
    return {
        type: 'FETCH_USER_INFORMATION_FULLFILLED',
        payload: userInformations
    }
}

export const fetchUserInformationRejected = (error) => {
    return {
        type: 'FETCH_USER_INFORMATION_FULLFILLED',
        payload: error
    }
}
