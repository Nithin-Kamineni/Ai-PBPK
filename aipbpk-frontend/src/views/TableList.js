/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

import { MaterialReactTable } from 'material-react-table';
import { MenuItem, tabClasses } from '@mui/material';

import {DataValuesContext} from '../contexts/DataValuesContext'

import ApiCallComponent from '../request/ApiCallComponent'

import LinearProgress from "@mui/material/LinearProgress"; 
import CircularProgress from "@mui/material/CircularProgress"; 

function Tables() {

  const [data, setData] = React.useState(null);
  const [TableSchema, SetTableSchema] = React.useState([]);

  const dataValuesContext = React.useContext(DataValuesContext);
  console.log(dataValuesContext.adminRoute);
  console.log("---tab----")
  
  React.useEffect(() => {
    // Function to make the API request
    const fetchData = async () => {
      try {
        let response = await ApiCallComponent({requestType:"GET",apiPath:"paramsRecords", requestBody:{}}); // Replace with your API endpoint
        console.log(response);

        const sanitizedResponseString = response.replace(/NaN/g, 'null');
        response = JSON.parse(sanitizedResponseString);

        console.log(typeof response);
        setData(response.predKmax); // Update the state with API response data
        console.log('1=================================0');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Call the API function when the component mounts
    fetchData();
  }, []);

  // React.useEffect(() => {
  //   // Function to make the API request
  //     try {
  //       console.log('2=================================');
  //       console.log(data);
  //       let requestSchema = [
  //         {
  //           accessorKey: 'ID',
  //           enableColumnFilterModes: false, //disable changing filter mode for this column
  //           filterFn: 'equals', //set filter mode to equals
  //           header: 'ID',
  //         },
  //         {
  //           accessorKey: 'KTRES50',
  //           columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
  //           filterFn: 'between', //set filter mode to equals
  //           header: 'KTRES50',
  //         },
  //       ];
  //       // for(let i=1;i<keys.length;i++){
  //       //   requestSchema.push({
  //       //                 accessorKey: keys[i],
  //       //                 // columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
  //       //                 // enableColumnFilterModes: false,
  //       //                 filterFn: 'between',
  //       //                 header: keys[i],
  //       //                 })
  //       // }
  //       console.log('=================================');
  //       console.log("a:",TableSchema);
  //       SetTableSchema(requestSchema);
  //       console.log('=================================');
  //       console.log("b:",TableSchema);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  // }, [data]);

  const columns = React.useMemo( //priority 1
    () => [{
            accessorKey: 'ID',
            enableColumnFilterModes: false, //disable changing filter mode for this column
            filterFn: 'equals', //set filter mode to equals
            header: 'ID',
          },
          {
            accessorKey: 'Type',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'Type',
          },
          {
            accessorKey: 'TS',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'TS',
          },
          {
            accessorKey: 'HD',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'HD', //Zeta	Charge	Shape	TM	CT	TSz	TW	Dose	BW
          },
          {
            accessorKey: 'Zeta',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'Zeta'
          },
          {
            accessorKey: 'Charge',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'Charge',
          },
          {
            accessorKey: 'Shape',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'Shape',
          },
          {
            accessorKey: 'TM',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'TM',
          },
          {
            accessorKey: 'CT',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'CT'
          },
          {
            accessorKey: 'TSz',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'TSz'
          },
          {
            accessorKey: 'TW',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'TW'
          },
          {
            accessorKey: 'Dose',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'Dose'
          },
          {
            accessorKey: 'BW',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'BW'
          },
          {
            accessorKey: 'KTRES50',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'KTRES50',
          },
          {
            accessorKey: 'KTRESmax',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'KTRESmax',
          },
          {
            accessorKey: 'KTRESn',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'KTRESn',
          },
          {
            accessorKey: 'KTRESrel',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
            header: 'KTRESrel'
          }],
    [TableSchema]
  );

  if(data===null){
      return (
        <>
          <div className="content">
            <LinearProgress style={{ position: 'relative', marginTop: '20%',marginBottom: '-10%', marginLeft: '25%', marginRight: '25%'}}/>
          </div>
        </>
      )
  }

  return (
    <>
    <div className="content">
      <MaterialReactTable
      columns={columns}
      data={data}
      enableColumnFilterModes //enable changing filter mode for all columns unless explicitly disabled in a column def
      initialState={{ showColumnFilters: false, pagination: { pageSize: 50, pageIndex: 0 } }} //show filters by default
      filterFns={{
        customFilterFn: (row, id, filterValue) => {
          return row.getValue(id) === filterValue;
        },
      }}
      localization={{
        filterCustomFilterFn: 'Custom Filter Fn',
      }}
      muiTablePaginationProps={{
        rowsPerPageOptions: [50, 100, 200, 300],
        showFirstButton: false,
        showLastButton: false,
      }}
    />
    </div>
    </>
  );
}

export default Tables;
