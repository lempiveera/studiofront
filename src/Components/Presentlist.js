import React, { useEffect, useState } from "react";
//import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import './Presentlist.css';

function Presentlist() {

    const [present, setPresent] = useState([]);

    useEffect(() => {
        fetchPresent();
    }, []);

    const fetchPresent = () => {
        fetch('/home_index')
            .then(response => response.json())
            .then(responseData => setPresent(responseData))
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
                <p className="Head">Currently Present</p>
                <table className="Tab">
                    <tbody>
                        {
                            present.map((present) =>
                                <tr key={present.id} className="List">
                                    <td>{present.person}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
}

export default Presentlist;


/*       <div className="ag-theme-material" style={{ height: 400, width: '17%', margin: 'auto'}}>
           <AgGridReact
               rowData={present}
               columnDefs={columns}
               paginationPageSize={10}
               suppressCellSelection={true}
           />
       </div> */