import React from 'react';

const tableStyle1 = {
    border: '1px solid grey',
    borderCollapse: 'collapse',
    padding: '5px'
}
const TableRow = (props) => (
    <tr style={tableStyle1}>
        <td>{props.projectName}
        </td>
        <td>
            {props.serviceType}
        </td>
    </tr>
);

export default TableRow;