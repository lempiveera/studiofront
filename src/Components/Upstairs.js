import React, { useEffect, useState } from "react";
//import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './Presentlist.css';

function Upstairs() {

    const [todoU, setTodoU] = useState([]);

    useEffect(() => {
        fetchTodosU();
    }, []);

    const fetchTodosU = () => {
        fetch('/upstairs_index')
            .then(response => response.json())
            .then(responseData => setTodoU(responseData))
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
                <p className="Head">Upstairs todos</p>
                <table className="Tab">
                    <tbody>
                        <tr><th>Task</th><th>Who</th></tr>
                        {
                            todoU.map((todoU) =>
                                <tr key={todoU.id} className="List">
                                    <td>{todoU.task}</td>
                                    <td>{todoU.who}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
}

export default Upstairs;


/*       <div className="ag-theme-material" style={{ height: 400, width: '17%', margin: 'auto'}}>
           <AgGridReact
               rowData={present}
               columnDefs={columns}
               paginationPageSize={10}
               suppressCellSelection={true}
           />
       </div> */