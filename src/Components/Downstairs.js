import React, { useEffect, useState } from "react";
//import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './Presentlist.css';

function Downstairs() {

    const [todoD, setTodoD] = useState([]);

    useEffect(() => {
        fetchTodosD();
    }, []);

    const fetchTodosD = () => {
        fetch('/downstairs_index')
            .then(response => response.json())
            .then(responseData => setTodoD(responseData))
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
                <p className="Head">Downstairs todos</p>
                <table className="Tab">
                    <tbody>
                        <tr><th>Task</th><th>Who</th></tr>
                        {
                            todoD.map((todoD) =>
                                <tr key={todoD.id} className="List">
                                    <td>{todoD.task}</td>
                                    <td>{todoD.who}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
}

export default Downstairs;


/*       <div className="ag-theme-material" style={{ height: 400, width: '17%', margin: 'auto'}}>
           <AgGridReact
               rowData={present}
               columnDefs={columns}
               paginationPageSize={10}
               suppressCellSelection={true}
           />
       </div> */