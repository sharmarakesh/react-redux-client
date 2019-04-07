const INITIAL_STATE = {
    startDate: '',
    endDate: ''
}

const appGlobalDateRangeReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_START_DATE':
            return {...currentState, startDate: action.payload}
        
        case 'SET_END_DATE':
            return {...currentState, endDate: action.payload}

        default:
            return currentState;
        } 
}

export default appGlobalDateRangeReducer;