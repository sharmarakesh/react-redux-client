const INITIAL_STATE = {
    userInformations: [{
        id: null,
        firstName: null,
        lastName: null,
        phoneNumbers: [],
        pincode: null
    }],
    isFetching: false,
    isFetched: false,
    error: null
}

export const userInformationReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_USER_INFORMATION_REQUEST':
               return {...currentState, isFetching: true}; 

        case 'FETCH_USER_INFORMATION_FULLFILLED':
            return {...currentState, isFetching: false, isFetched: true, userInformations: action.payload}
        
        case 'FETCH_USER_INFORMATION_REJECTED':
            return {...currentState, isFetching: false, error: action.payload}
        default:
        return currentState;
    }
}