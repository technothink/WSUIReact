import React from 'react';
import TableRow from './TableRow';


class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            tableRow: null
        });

    }


    componentWillReceiveProps(newProps) {
        console.log("[Table.js ]", newProps);
        this.processTableRow(newProps);
    }

    processTableRow = (newProps) => {
        let tableData = newProps.projectData;
        console.log(tableData);
        if (null != tableData) {
            let tableRow = [tableData.length];
            for (let index in tableData) {
                console.log('[Table.js>Row ]', tableData[index])
                tableRow[index] = <TableRow projectName={tableData[index].projectName}
                    serviceType={tableData[index].serviceType} key={index} />
            }
            this.setState({
                tableRow: tableRow
            });
        }
    }

    render() {
        let tableRow = null;


        return (<div >
            <table className='projects' >
                <thead>
                    <tr>
                        <th >Project</th>
                        <th >Service Type</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.tableRow}

                </tbody>

            </table>

        </div>);
    }
}


export default Table;