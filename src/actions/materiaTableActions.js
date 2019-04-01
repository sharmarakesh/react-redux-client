import axios from 'axios';
// eslint-disable-next-line
const apiUrl = "/api/";

export const fetchTableData = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_TABLE_REQUEST'
        });

        //axios.get(apiUrl + "/fecthUserInfo")
        axios.get("data/tableData.json")
            .then((response) => {
                console.log('TABLE DATA', response.data);
                dispatch(fetchTableDataFullfilled(response.data))
            })
            .catch((error) => {
                dispatch(fetchTableDataRejected(error))
            })
    }
}

export const fetchTableDataFullfilled = (fetchTableData) => {
    return {
        type: 'FETCH_TABLE_FULLFILLED',
        payload: fetchTableData
    }
}

export const fetchTableDataRejected = (error) => {
    return {
        type: 'FETCH_TABLE_FULLFILLED',
        payload: error
    }
}

export const setPage = (event, page) => {
    console.log('page value in action :', page);
    return {
        type: 'CHANGE_PAGE_NUMBER',
        payload: page
    }
}

export const changeRowsPerPage = ( page, rowsPerPage ) => {
    return  {
        type: 'CHANGE_ROWS_PER_PAGE',
        payload: {page: page, rowsPerPage: rowsPerPage}
    }
}
