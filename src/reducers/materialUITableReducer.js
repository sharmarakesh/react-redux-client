const INITIAL_STATE = {
    tablesData: [{
        id: null,
        firstName: null,
        lastName: null,
        phoneNumbers: [],
        pincode: null,
        collapsedRow: true
    }],
    page: 0,
    rowsPerPage: 5,
    isFetching: false,
    isFetched: false,
    error: null,
    startDate: {
        selectedStartDate: new Date(),
    },
    endDate: {
        selectedEndDate: new Date(),
    }
}

export const materialUITableReducer = (currentState = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_TABLE_REQUEST':
               return {...currentState, isFetching: true}; 

        case 'FETCH_TABLE_FULLFILLED':
            const newState1 = {...currentState};
                newState1.tablesData = action.payload;
                newState1.tablesData.map((item) => {
                    item.collapsedRow = false;
                    return item;
                });
            return {...newState1, isFetching: false, isFetched: true}
        
        case 'FETCH_TABLE_REJECTED':
            return {...currentState, isFetching: false, error: action.payload}
        
        case 'CHANGE_PAGE_NUMBER':
            return {...currentState, page: action.payload}

        case 'CHANGE_ROWS_PER_PAGE':
            return {...currentState, page: action.payload.page, rowsPerPage: action.payload.rowsPerPage}
        
        case 'CHANGE_START_DATE':
            return {...currentState, startDate: {startDate: action.payload.date}}

        case 'TOGGLE_CHROMIUM_WINDOW': 
            const newState = {...currentState};
            newState.tablesData[action.payload.index-1].collapsedRow = action.payload.collapsedRow;
            return {...newState}

        default:
        return currentState;
    }
}