import React,{useState}from 'react'
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { Input } from "reactstrap";
const ShowDetails = (props) => {
  const [GridState, setGridState] = useState(null);
    const { newData, formData } = props;    
    // console.log("sumit123", newData);
    formData["numberOfLength"] = newData[0].length;
     const totalAmount=newData[0].reduce((a, v) => a = a + v.amount, 0)
     formData["total"]=totalAmount;
     const Columns = [
       {
         headerName: "Username",
         field: "username",
       },
       {
         headerName: "MovieName",
         field: "movieName",
       },
       {
         headerName: "MovieTime",
         field: "movieTime",
       },
       {
         headerName: "Number Of Seats",
         field: "numberOfLength",
       },
       {
         headerName: "Total",
         field: "total",
       },
     ];
     console.log(" newData.length", newData);

     const defaultColDef = {
       sortable: true,
       filter: true,
       flex: 1,
     };
      
     const rowSelectionType = "multiple";
     const onGridReady = (params) => {
       setGridState(params.api);
     };
     const onChangeHandler = (e) => {
      //  console.log(e.target.value);
       GridState.setQuickFilter(e.target.value);
     };
    
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            className="ag-theme-alpine"
            style={{
              height: "400px",
              width: "80%",
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            <Input
              type="search"
              placeholder="search here....."
              onChange={onChangeHandler}
              style={{ height: "30px", width: "20vw", margin: "20px" }}
            />
            <h3 style={{ textAlign: "center", color: "teal" }}>User Details</h3>
            <AgGridReact
              columnDefs={Columns}
              rowData={[formData]}
              defaultColDef={defaultColDef}
              onGridReady={onGridReady}
              rowSelection={rowSelectionType}
              floatingFilter={true}
            />
          </div>
        </div>
    );
}

export default ShowDetails;
