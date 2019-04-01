const INITIAL_STATE = {
    showUserInformation: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TOGGLE_USER_INFORMATION':
            return {...currentState, showUserInformation: !currentState.showUserInformation}
        
        default:
            return currentState;
        } 
}

export default appReducer;
