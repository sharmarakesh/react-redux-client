import React from 'react';
import zIndex from '@material-ui/core/styles/zIndex';

const classes ={
    collaspeCard: {
        textAlign: 'center',
        margin: '0 30px',
    },
    dataElem: {
        margin: '-5px 10px 15px 10px',
        padding: '15px',
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
