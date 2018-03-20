import React from 'react';
import Unimag from '../../components/media/logoUnimag.png';
import './style.css';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {peoples}  from '../../datas.json';
import matchSorter from 'match-sorter';

class Jurado extends React.Component {
    constructor(props){
        super(props);
        this.renderEditable = this.renderEditable.bind(this);
    }

    renderEditable(cellInfo) {
        return (
          <div
            
            style={{ backgroundColor: "#fafafa" }}
            contentEditable
            suppressContentEditableWarning
            onBlur={e => {
              const data = [...peoples];
              data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
              this.setState({ data });
            }}
            dangerouslySetInnerHTML={{
              __html: peoples[cellInfo.index][cellInfo.column.id]
            }}
          />
        );
    }

    render() {
        return (
            <div id="container-jurado" >
                <img src={Unimag} alt="" />
                <ReactTable
                    data={peoples}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                        String(row[filter.id]) === filter.value}
                    columns={[
                        {
                            Header: "Votantes",
                            columns: [
                                {
                                    Header: "Nombre",
                                    accessor: "nombre",
                                    filterAll: true,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["nombre"] }),
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Apellido",
                                    accessor: "apellido",
                                    filterAll: true,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["apellido"] }),
                                    Cell: this.renderEditable
                                },
                                {
                                    Header: "Cedula",
                                    accessor: "dni",
                                    filterAll: true,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["dni"] }),
                                },
                                {
                                    Header: "Fecha",
                                    accessor: "fecha",
                                    filterAll: true,
                                    filterMethod: (filter, rows) =>
                                        matchSorter(rows, filter.value, { keys: ["fecha"] }),
                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight tabla "
                />
            </div>
        );
    }
}

export default Jurado;