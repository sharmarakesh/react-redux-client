import React from 'react';
// https://github.com/mui-org/material-ui/issues/4476

const classes ={
    collaspeCard: {
        textAlign: 'center',
    },
    dataElem: {
        margin: '-10px 10px 5px 10px',
        padding: '20px 10px',
        border: '1px solid #eee',
        borderRadius: '8px',
        backgroundColor: '#cce7ff'
    },
    td: {
        overflow: 'hidden'
    }
}
const collapseComponent = (props) => (
    <tr style={classes.collaspeCard}>
    <td colSpan={3} style={classes.td}> {/* put the number of col of your table in this field */}
        <div style={classes.dataElem}>
            {props.children}
        </div>
    </td>
    </tr>
    
)

export default collapseComponent;
