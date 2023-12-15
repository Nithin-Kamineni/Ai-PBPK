import React, { useState } from "react";
import {
  DataValuesContext,
  defaultValues
} from "contexts/DataValuesContext";
import ApiCallComponent from "../../request/ApiCallComponent";
export default function DataValuesWrapper(props) {

  const [adminRoute, setAdminRoute] = React.useState(defaultValues.defaultAdminRoute);
  const handleAdminRoute = (event) => setAdminRoute(event.target.value);

  const [targetTissue, SetTargetTissue] = React.useState(defaultValues.defaultTargetTissue);
  const handleTargetTissue = (interval) => SetTargetTissue(interval.target.value);

  const [doseLevel, setDoseLevel] = React.useState(defaultValues.defaultDoseLevel);

  const [nPSize, setNPSize] = React.useState(defaultValues.defaultNPSize);

  const [zetaPotential, setZetaPotential] = React.useState(defaultValues.defaultZetaPotential);

  const [hydroDiameter, setHydroDiameter] = React.useState(defaultValues.defaultHydroDiameter);

  const [surface, setSurface] = React.useState(defaultValues.defaultSurface);

  const [adminNpsPerRat, setAdminNpsPerRat] = React.useState(defaultValues.defaultAdminNpsPerRat);
  
  const [interval, setInterval] = React.useState(defaultValues.defaultInterval);
  const handleInterval = (interval) => setInterval(interval);

  const [dose, setDose] = React.useState(defaultValues.defaultDose);
  const handleDose = (dose) => setDose(dose);

  const [days, setDays] = React.useState(defaultValues.defaultDays);
  const handleDays = (value) => setDays(value);

  const [iterations, setIterations] = React.useState(defaultValues.defaultIterations);
  const handleIterations = (value) => setIterations(value);

  const [numRecords, setNumRecords] = React.useState(0);
  const [records, setRecords] = React.useState({});

  const [noerror, setNoerror] = React.useState(true);

  const DefaultValues = () => {
    setAdminRoute(defaultValues.defaultAdminRoute);
    SetTargetTissue(defaultValues.defaultTargetTissue);
    setDoseLevel(defaultValues.defaultDoseLevel);
    setNPSize(defaultValues.defaultNPSize);
    setZetaPotential(defaultValues.defaultZetaPotential);
    setHydroDiameter(defaultValues.defaultHydroDiameter);
    setSurface(defaultValues.defaultSurface);
    setAdminNpsPerRat(defaultValues.defaultAdminNpsPerRat);
    setInterval(defaultValues.defaultInterval);
    setDose(defaultValues.defaultDose);
    setDays(defaultValues.defaultDays);
    setIterations(defaultValues.defaultIterations);
    console.log("default values setting...")
  }

  React.useEffect(() => {
    // numberOfRecords();
    fetchRecordsParams();
  },[]);

  const ApplyParameters = async () => {
    console.log("request call started...")
    fetchData();
    // fetchNumberOfRecords();
    console.log('request call ended')
  }

  const numberOfRecords = async () => {
    try {
      let data = {
        "Particle Type": [
          ParticleType
      ],
      "Targeting Stratergy": [
        Targeting
      ],
      "HD": [
          5.5,
          456.5
      ],
      "Zeta": [
          0.0,
          59.4
      ],
      "Charge": [
          0.0,
          2.0,
          1.0
      ],
      "Shape": [
        Shape
      ],
      "Tumor Model": [
        TargetingModel
      ],
      "CT": [
          "skin",
          "cervix",
          "brain",
          "stomach",
          "breast",
          "prostate",
          "Skin",
          "Prostate",
          "Brain",
          "Breast",
          "Cervix",
          "Pancreas",
          "Colon",
          "Lung",
          "Liver",
          "Other",
          "Ovary",
          "Kidney"
      ],
      "TSz": [
          0.03,
          1.8
      ],
      "Tumor Weight": [
          0.036,
          2.16
      ],
      "Dose": [
          0.0545,
          1220.0
      ],
      "Body Weight": [
          16.0,
          31.0
        ]
      }

      // let data = {
      //   "Particle Type": [
      //     ParticleType
      // ],
      // "Targeting Stratergy": [
      //   Targeting
      // ],
      // "HD": HDRangeValues,
      // "Zeta": ZetaValues,
      // "Charge": [
      //   Charge
      // ],
      // "Shape": [
      //   Shape
      // ],
      // "Tumor Model": [
      //   TargetingModel
      // ],
      // "CT": [
      //   CT
      // ],
      // "TSz": TszValues,
      // "Tumor Weight": TumorWeightValues,
      // "Dose": DoseValues,
      // "Body Weight": BodyWeightValues
      // }

      const response = await ApiCallComponent({requestType:"POST", apiPath:"recordsAvilable", body: data})
      console.log("response:",response);
      console.log("+++++++++++++++++++++++++++++++")
      console.log(response['NumberOfRecords'])
      console.log("+++++++++++++++++++++++++++++++")
      setNumRecords(response['NumberOfRecords'])
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const [newLabels, setNewLabels] = React.useState([]);
  const [newData, setNewData] = React.useState([]);
  const [graphLoaded, setGraphLoaded] = React.useState(false);

  const fetchData = async () => {
    try {
      setGraphLoaded(false);
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
      const response = await ApiCallComponent({requestType:"POST",apiPath:"predKmaxRserver", body:data}); // Replace with your API endpoint
      setNewData(response['DETumor']);
      setNewLabels(response['TimeSeries']);
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log("request failed1");
      console.log("request failed2");
      console.log("request failed3");
      setNoerror(false);
    }
  };

  const fetchRecordsParams = async () => {
    try {
      const response = await ApiCallComponent({requestType:"GET",apiPath:"filterParams", requestBody:{}}); // Replace with your API endpoint
      console.log("fetchrecord:",response)
      setRecords(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  ///////////////////////////

  console.log(records);
  console.log("===this'==")

  let HDOptions;
  let ZetaOptions;
  let TSzOptions;
  let TumorWeightOptions;
  let DoseOptions;
  let BodyWeightOptions;
  if(records===null){
    console.log("here45")
    HDOptions = []
    ZetaOptions = []
    TSzOptions = []
    TumorWeightOptions = []
    DoseOptions = []
    BodyWeightOptions = []
  }
  else{
    console.log("here66")
  HDOptions = records["HD"] ? records["HD"] : []
  ZetaOptions = records["Zeta"] ? records["Zeta"] : []
  TSzOptions = records["TSz"] ? records["TSz"] : []
  TumorWeightOptions = records["Tumor Weight"] ? records["Tumor Weight"] : []
  DoseOptions = records["Dose"] ? records["Dose"] : []
  BodyWeightOptions = records["Body Weight"] ? records["Body Weight"] : []
  }

  const [ParticleType,setParticleType] =  React.useState("Inorganic");
  const handleParticleType = (event) => setParticleType(event.target.value);

  const [Targeting,setTargeting] =  React.useState("Passive");
  const handleTargeting = (event) => setTargeting(event.target.value);

  const [Charge,setCharge] =  React.useState("0.0");
  const handleCharge = (event) => setCharge(event.target.value);

  const [Shape,setShape] =  React.useState("Spherical");
  const handleShape = (event) => setShape(event.target.value);

  const [TargetingModel, setTargetingModel] =  React.useState("Xenograft Orthotopic");
  const handleTargetingModel = (event) => setTargetingModel(event.target.value);

  const [CT,setCT] =  React.useState("skin");
  const handleCT = (event) => setCT(event.target.value);

  const [HDRangeValues, setHDRangeValues] = React.useState(6);
  const ChangeHDRangeValues = (val) => {
    setHDRangeValues(val)
  }
  
  const [includeNAHD, setIncludeNAHD] = React.useState(true);
  const HandelIncludeNAHD = () => {
    setIncludeNAHD(!includeNAHD)
  }

  const [ZetaValues, setZetaValues] = React.useState([0.0,59.4]);
  const ChangeZetaValues = ([min,max]) => {
    setZetaValues([min,max])
  }
  const ChangeMinZetaValues = (value) => {
    if(value!==undefined){
      value=ZetaOptions[0]
    }
    if(value<=ZetaValues[1] && value>=ZetaOptions[0]){
      setZetaValues([parseFloat(value),ZetaValues[1]])
    }
  }
  const ChangeMaxZetaValues = (value) => {
    if(value!==undefined){
      value=ZetaOptions[1]
    }
    if(ZetaValues[0]<=value && value<=ZetaOptions[1]){
      setZetaValues([ZetaValues[0],parseFloat(value)])
    }
  }
  const [includeNAZeta, setIncludeNAZeta] = React.useState(true);
  const HandelIncludeNAZeta = () => {
    setIncludeNAZeta(!includeNAZeta)
  }

  const [TszValues, setTszValues] = React.useState(0.03);
  const ChangeTszValues = (val) => {
    setTszValues(val)
  }

  const [TumorWeightValues, setTumorWeightValues] = React.useState(0.036);

  const [DoseValues, setDoseValues] = React.useState(0.0545);
  
  const [BodyWeightValues, setBodyWeightValues] = React.useState(31);
  













































//////////////////////////////////////////

  const value = {
    noerror: noerror,
    setNoerror:setNoerror,
    adminRoute: adminRoute,
    handleAdminRoute: handleAdminRoute,
    targetTissue: targetTissue,
    handleTargetTissue: handleTargetTissue,
    doseLevel: doseLevel,
    setDoseLevel: setDoseLevel,
    nPSize: nPSize,
    setNPSize: setNPSize,
    zetaPotential: zetaPotential,
    setZetaPotential: setZetaPotential,
    hydroDiameter: hydroDiameter,
    setHydroDiameter: setHydroDiameter,
    surface: surface,
    setSurface: setSurface,
    adminNpsPerRat: adminNpsPerRat, 
    setAdminNpsPerRat: setAdminNpsPerRat, 
    interval: interval, 
    setInterval: setInterval, 
    handleInterval: handleInterval, 
    dose: dose, 
    setDose: setDose, 
    handleDose: handleDose, 
    days: days, 
    setDays: setDays, 
    handleDays: handleDays, 
    iterations: iterations, 
    setIterations: setIterations, 
    handleIterations: handleIterations,
    DefaultValues: DefaultValues,
    ApplyParameters: ApplyParameters,
    newLabels:newLabels,
    setNewLabels:setNewLabels,
    newData:newData,
    setNewData:setNewData,
    fetchData: fetchData,
    graphLoaded:graphLoaded,
    setGraphLoaded:setGraphLoaded,
    numRecords: numRecords,
    records: records,
    ParticleType:ParticleType,
    setParticleType:setParticleType,
    handleParticleType:handleParticleType,
    Targeting:Targeting,
    setTargeting:setTargeting,
    handleTargeting:handleTargeting,
    Charge:Charge,
    setCharge:setCharge,
    handleCharge:handleCharge,
    Shape:Shape,
    setShape:setShape,
    handleShape:handleShape,
    TargetingModel:TargetingModel,
    setTargetingModel:setTargetingModel,
    handleTargetingModel:handleTargetingModel,
    CT:CT,
    setCT:setCT,
    handleCT:handleCT,
    HDRangeValues:HDRangeValues,
    setHDRangeValues:setHDRangeValues,
    ChangeHDRangeValues:ChangeHDRangeValues,
    includeNAHD:includeNAHD,
    setIncludeNAHD:setIncludeNAHD,
    HandelIncludeNAHD:HandelIncludeNAHD,
    ZetaValues:ZetaValues,
    setZetaValues:setZetaValues,
    ChangeZetaValues:ChangeZetaValues,
    ChangeMinZetaValues:ChangeMinZetaValues,
    ChangeMaxZetaValues:ChangeMaxZetaValues,
    includeNAZeta:includeNAZeta,
    setIncludeNAZeta:setIncludeNAZeta,
    HandelIncludeNAZeta:HandelIncludeNAZeta,
    TszValues:TszValues,
    setTszValues:setTszValues,
    ChangeTszValues:ChangeTszValues,
    TumorWeightValues:TumorWeightValues,
    setTumorWeightValues:setTumorWeightValues,
    DoseValues:DoseValues,
    setDoseValues:setDoseValues,
    BodyWeightValues:BodyWeightValues,
    setBodyWeightValues:setBodyWeightValues
  }

  return (
    <DataValuesContext.Provider
      value={value}
    >
      {props.children}
    </DataValuesContext.Provider>
  );
}
