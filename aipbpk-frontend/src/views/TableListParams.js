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


  const [loader, setLoader] = React.useState(true);
  const [data, setData] = React.useState(null);
  const [preData, setPreData] = React.useState(null);
  const [typeList, setTypeList] = React.useState(["Inorganic", "Hybrid", "Organic"]);
  const [tsList, setTsList] = React.useState(["Active","Passive","negtive","positive"]);
  const [shapeList, setShapeList] = React.useState(["Other", "Spherical", "Rod", "Plate", "Rod", "Irregular", "Flake"]);
  const [chargeList, setChargeList] = React.useState(["0","1","2"]);
  const [tmList, setTmList] = React.useState(["Xenograft Heterotopic", "Xenograft Orthotopic", "Allograft Heterotopic", "Allograft Orthotopic", "Other"]);
  const [ctList, setCtList] = React.useState(["breast", "skin", "cervix", "brain", "stomach", "prostate", "Skin", "Prostate", "Brain", "Breast", "Cervix", "Pancreas", "Colon", "Lung", "Liver", "Other", "Ovary", "Kidney"]);

  const [noerror, setNoerror] = React.useState(true);

  const dataValuesContext = React.useContext(DataValuesContext);
  console.log(dataValuesContext.adminRoute);
  console.log("---tab----2")
  

  console.log("---tab----3")
  React.useEffect(() => {
    // Function to make the API request
    const fetchData = async () => {
      try {

        const [ParticleType,setParticleType] = [dataValuesContext.ParticleType,dataValuesContext.setParticleType] 

        const [Targeting,setTargeting] =  [dataValuesContext.Targeting,dataValuesContext.setTargeting]

        const [HDRangeValues, setHDRangeValues] = [dataValuesContext.HDRangeValues, dataValuesContext.setHDRangeValues]
        
        const [zetaPotential, setZetaPotential] = [dataValuesContext.zetaPotential, dataValuesContext.setZetaPotential];

        const [Charge,setCharge] =  [dataValuesContext.Charge,dataValuesContext.setCharge]

        const [Shape,setShape] =  [dataValuesContext.Shape,dataValuesContext.setShape]

        const [TargetingModel, setTargetingModel] =  [dataValuesContext.TargetingModel, dataValuesContext.setTargetingModel]

        const [CT,setCT] =  [dataValuesContext.CT,dataValuesContext.setCT]

        const [TszValues, setTszValues] = [dataValuesContext.TszValues, dataValuesContext.setTszValues]

        const [TumorWeightValues, setTumorWeightValues] = [dataValuesContext.TumorWeightValues, dataValuesContext.setTumorWeightValues]

        const [BodyWeightValues, setBodyWeightValues] = [dataValuesContext.BodyWeightValues, dataValuesContext.setBodyWeightValues];

        const [doseLevel, setDoseLevel] = [dataValuesContext.doseLevel, dataValuesContext.setDoseLevel];

        const [interval, setInterval] = [dataValuesContext.interval, dataValuesContext.setInterval];

        const [dose, setDose] = [dataValuesContext.dose, dataValuesContext.setDose];

        const [days, setDays] = [dataValuesContext.days, dataValuesContext.setDays];

        const [iterations, setIterations] = [dataValuesContext.iterations, dataValuesContext.setIterations];

        let data = {
          Type:ParticleType,
          TS:Targeting,
          HD:HDRangeValues,
          Zeta:zetaPotential,
          Charge:parseInt(Charge),
          Shape: Shape,
          TM: TargetingModel,
          CT:CT,
          TSz:TszValues,
          TW:TumorWeightValues,
          Dose:doseLevel,
          BW:BodyWeightValues,
          NumDoses:dose,
          interval:interval,
          days:days,
          iterations:iterations}
        // const response = await ApiCallComponent({requestType:"GET",apiPath:"paramsRecords", requestBody:{}}); // Replace with your API endpoint
        let response = await ApiCallComponent({requestType:"POST",apiPath:"predKmaxRserver", body:data});
        console.log('2=================================');
        console.log('============TABLE LIST============')
        console.log(response)
        setPreData(response); // Update the state with API response data
      } catch (error) {
        console.error('Error fetching data:', error);
        console.log("display error")
        setNoerror(false);
        setLoader(false);
      }
    };
    console.log("---tab----4")
    // Call the API function when the component mounts
    fetchData();
  }, []);

  const [columns, setColumns] = React.useState(React.useMemo(
    () => [{
            accessorKey: 'TimeSeries',
            header: 'TimeSeries',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
          },
          {
            accessorKey: 'DETumor',
            header: 'DETumor',
            columnFilterModeOptions: ['between', 'greaterThan', 'lessThan'], //only allow these filter modes
            filterFn: 'between', //set filter mode to equals
          },
          ],
    []
  ));

  React.useEffect(() => {
    // Function to make the API request
      try {
        console.log(preData["DETumor"])
        console.log("++++++++++++++++++++++++++++++++++++23")
        if(preData["DETumor"]!==null){
        console.log('=================================');
        let resultdata = [];
        for(let i=0;i<preData["DETumor"].length;i++){
          resultdata.push({'TimeSeries':preData["TimeSeries"][i],'DETumor':preData["DETumor"][i]});
        }
        setData(resultdata);
        console.log('=================================');
        setLoader(false);  
      }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
  }, [preData]);

  React.useEffect(() => {
    if(data!==null){
      console.log("=================loaderend")
      console.log(...typeList)
      console.log(...tsList);
      console.log(...chargeList);
      console.log(...shapeList);
      console.log(...tmList);
      console.log(...ctList);
      setLoader(false)
    }
    else{
      console.log("=================loaderstart")
    }
  }, [typeList,tsList,chargeList,shapeList,tmList,ctList])

  if(loader){
      return (
        <> 
          <div className="content">
            <LinearProgress style={{ position: 'relative', marginTop: '20%',marginBottom: '-10%', marginLeft: '25%', marginRight: '25%'}}/>
          </div>
        </>
      )
  }

  else{
    return (
      <>
      <div className="content">
      { noerror ? 
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
      /> : <>
      <div className="error-container">
                    <h1>500 Internal Server Error</h1>
                    <p>Oops! Something went wrong on the server.</p>
                    <p>Please try again later.</p>
                  </div>
        </>}
      </div>
      </>
    );
  }
}

export default Tables;
