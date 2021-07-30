import React, { useEffect, useState } from "react";
//import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './Presentlist.css';

function Sumu() {

    const [todoS, setTodoS] = useState([]);

    useEffect(() => {
        fetchTodosS();
    }, []);

    const fetchTodosS = () => {
        fetch('/sumu_index')
            .then(response => response.json())
            .then(responseData => setTodoS(responseData))
            .catch(err => console.error(err))
    }

    //   const columns = [
    //       { field: 'person', headerName: 'Currently present' }
    //   ]

    //material-ui form dialog for adding yourself on the list? like next to list :D 
    //https://material-ui.com/components/dialogs/

    return (
        <div>
            <header className="All">
                <p className="Head">Sumu todos</p>
                <table className="Tab">
                    <tbody>
                        <tr><th>Task</th><th>Who</th></tr>
                        {
                            todoS.map((todoS) =>
                                <tr key={todoS.id} className="List">
                                    <td>{todoS.task}</td>
                                    <td>{todoS.who}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
}

export default Sumu;


/*       <div className="ag-theme-material" style={{ height: 400, width: '17%', margin: 'auto'}}>
           <AgGridReact
               rowData={present}
               columnDefs={columns}
               paginationPageSize={10}
               suppressCellSelection={true}
           />
       </div> */