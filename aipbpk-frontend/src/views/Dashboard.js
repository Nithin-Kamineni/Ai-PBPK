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
import React, {useContext} from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

//import for API calls
import ApiCallComponent from "request/ApiCallComponent"
import Box from '@mui/material/Box';
import LinearProgress from "@mui/material/LinearProgress"; 
import CircularProgress from "@mui/material/CircularProgress"; 
// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button as ButtonChakra,
  // Input,
  useDisclosure,
  Stack,
  Box as BoxChakra,
  FormLabel,
  Select,
  Textarea,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Slider,
  SliderThumb,
  SliderFilledTrack,
  SliderTrack,
  SliderMark,
  RangeSliderMark,
  Checkbox
} from "@chakra-ui/react";

// // core components
// import {
//   chartExample1,
//   // chartExample2,
//   // chartExample3,
//   // chartExample4,
// } from "variables/charts.js";

import chartExample1, {updateChart2} from "variables/chartExample1.js"
import chartExample2 from "variables/chartExample2.js"
import chartExample3 from "variables/chartExample3.js"
import chartExample4 from "variables/chartExample4.js"
import { AlignHorizontalCenter, GraphicEqOutlined } from "@mui/icons-material";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {DataValuesContext} from '../contexts/DataValuesContext'

let test = "test"

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        parts: ["dialog, dialogContainer"],
        dialog: {
          pointerEvents: "auto"
        },
        dialogContainer: {
          pointerEvents: "none"
        }
      }
    }
  }
};

const theme = extendTheme({
  components
});

function Dashboard(props) {

  const dataValuesContext = React.useContext(DataValuesContext);
  
  const [noerror, setNoerror] = [dataValuesContext.noerror, dataValuesContext.setNoerror]

  const [bigChartData, setbigChartData] = React.useState("data2");

  const [newLabels, setNewLabels] = [dataValuesContext.newLabels, dataValuesContext.setNewLabels]
  const [newData, setNewData] = [dataValuesContext.newData, dataValuesContext.setNewData];

  // New labels and data values
  const fetchData = dataValuesContext.fetchData;
  // const fetchData = async () => {
  //   try {
  //     const response = await ApiCallComponent({requestType:"POST",apiPath:"predKmaxRserver", requestBody:{}}); // Replace with your API endpoint
  //     setNewData(response['TimeSeries']['134']['DETumor_g']);
  //     setNewLabels(response['TimeSeries']['134']['Times']);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  const [graphData, setGraphData] = React.useState(chartExample1);
  const [graphLoaded, setGraphLoaded] = [dataValuesContext.graphLoaded, dataValuesContext.setGraphLoaded];

  // const handleParticleType = dataValuesContext.handleParticleType;
  // let ParticleTypeOptions = ['Hybrid', 'Inorganic', 'Organic']
  // const [ParticleType,setParticleType] = [dataValuesContext.ParticleType,dataValuesContext.setParticleType] 


  const [adminRoute, setAdminRoute] = [dataValuesContext.adminRoute, dataValuesContext.setAdminRoute];
  const handleAdminRoute = dataValuesContext.handleAdminRoute;

  const [targetTissue, SetTargetTissue] = [dataValuesContext.targetTissue, dataValuesContext.SetTargetTissue];
  const handleTargetTissue = dataValuesContext.handleTargetTissue;

  const [doseLevel, setDoseLevel] = [dataValuesContext.doseLevel, dataValuesContext.setDoseLevel];

  const [nPSize, setNPSize] = [dataValuesContext.nPSize, dataValuesContext.setNPSize];

  const [zetaPotential, setZetaPotential] = [dataValuesContext.zetaPotential, dataValuesContext.setZetaPotential];

  const [hydroDiameter, setHydroDiameter] = [dataValuesContext.hydroDiameter, dataValuesContext.setHydroDiameter];

  const [surface, setSurface] = [dataValuesContext.surface, dataValuesContext.setSurface];

  const [adminNpsPerRat, setAdminNpsPerRat] = [dataValuesContext.adminNpsPerRat, dataValuesContext.setAdminNpsPerRat];

  const [interval, setInterval] = [dataValuesContext.interval, dataValuesContext.setInterval];
  const handleInterval = dataValuesContext.handleInterval;

  const [dose, setDose] = [dataValuesContext.dose, dataValuesContext.setDose];
  const handleDose = dataValuesContext.handleDose;

  const [days, setDays] = [dataValuesContext.days, dataValuesContext.setDays];
  const handleDays = dataValuesContext.handleDays;

  const [iterations, setIterations] = [dataValuesContext.iterations, dataValuesContext.setIterations];
  const handleIterations = dataValuesContext.handleIterations;

  const DefaultValues = dataValuesContext.DefaultValues;

  const ApplyParameters = dataValuesContext.ApplyParameters;

  const [ParticleType,setParticleType] = [dataValuesContext.ParticleType,dataValuesContext.setParticleType] 
  const handleParticleType = dataValuesContext.handleParticleType

  const [Targeting,setTargeting] =  [dataValuesContext.Targeting,dataValuesContext.setTargeting]
  const handleTargeting = dataValuesContext.handleTargeting

  const [Charge,setCharge] =  [dataValuesContext.Charge,dataValuesContext.setCharge]
  const handleCharge = dataValuesContext.handleCharge

  const [Shape,setShape] =  [dataValuesContext.Shape,dataValuesContext.setShape]
  const handleShape = dataValuesContext.handleShape

  const [TargetingModel, setTargetingModel] =  [dataValuesContext.TargetingModel, dataValuesContext.setTargetingModel]
  const handleTargetingModel = dataValuesContext.handleTargetingModel

  const [CT,setCT] =  [dataValuesContext.CT,dataValuesContext.setCT]
  const handleCT = dataValuesContext.handleCT

  const [HDRangeValues, setHDRangeValues] = [dataValuesContext.HDRangeValues, dataValuesContext.setHDRangeValues]
  const ChangeHDRangeValues = dataValuesContext.ChangeHDRangeValues

  const [includeNAHD, setIncludeNAHD] = [dataValuesContext.includeNAHD, dataValuesContext.setIncludeNAHD]
  const HandelIncludeNAHD = dataValuesContext.HandelIncludeNAHD

  const [ZetaValues, setZetaValues] = [dataValuesContext.ZetaValues, dataValuesContext.setZetaValues]
  const ChangeZetaValues = dataValuesContext.ChangeZetaValues
  const ChangeMinZetaValues = dataValuesContext.ChangeMinZetaValues
  const ChangeMaxZetaValues = dataValuesContext.ChangeMaxZetaValues
  const [includeNAZeta, setIncludeNAZeta] = [dataValuesContext.includeNAZeta, dataValuesContext.setIncludeNAZeta]
  const HandelIncludeNAZeta = dataValuesContext.HandelIncludeNAZeta

  const [TszValues, setTszValues] = [dataValuesContext.TszValues, dataValuesContext.setTszValues]

  const [TumorWeightValues, setTumorWeightValues] = [dataValuesContext.TumorWeightValues, dataValuesContext.setTumorWeightValues]

  const [DoseValues, setDoseValues] = [dataValuesContext.DoseValues, dataValuesContext.setDoseValues];

  const [BodyWeightValues, setBodyWeightValues] = [dataValuesContext.BodyWeightValues, dataValuesContext.setBodyWeightValues];

  let ParticleTypeOptions;
  let TargetingStratrgyOptions;
  let HDOptions;
  let ZetaOptions;
  let ChargeOptions;
  let ShapeOptions;
  let TargetingModelOptions;
  let CTOptions;
  let TSzOptions;
  let TumorWeightOptions;
  let DoseOptions;
  let BodyWeightOptions;
    
  // priority 1
  ParticleTypeOptions = ['Hybrid', 'Inorganic', 'Organic']
  TargetingStratrgyOptions = ['Active', 'Passive', 'negtive', 'positive']
  HDOptions = [5.5, 456.5]
  ZetaOptions = [0.0, 274.2]
  ChargeOptions = [0,1,2]
  ShapeOptions = ['Flake', 'Irregular', 'Other', 'Plate', 'Rod', 'Rod ', 'Spherical']
  TargetingModelOptions = ['Allograft Heterotopic',
  'Allograft Orthotopic',
  'Other',
  'Xenograft Heterotopic',
  'Xenograft Orthotopic']
  CTOptions = ['Brain',
  'Breast',
  'Cervix',
  'Colon',
  'Kidney',
  'Liver',
  'Lung',
  'Other',
  'Ovary',
  'Pancreas',
  'Prostate',
  'Skin',
  'brain',
  'breast',
  'cervix',
  'prostate',
  'skin',
  'stomach']
  TSzOptions = [0.02, 1.8]
  TumorWeightOptions = [0.024, 2.16]
  DoseOptions = [0.05, 1220.0]
  BodyWeightOptions = [16.0, 34.0]

  let chartReference = React.createRef();

  const setBgChartData = async (name) => {
    setbigChartData(name);
    console.log("------------------------")
    console.log(test);
    console.log("------------------------")
  };

  

  React.useEffect(() => {
    // Call the API function when the component mounts
    fetchData();
    // Call the function to update chart data
  }, []);

  React.useEffect(() => {
    // New labels and data values
    const updateGraph = async () => {
    try {
      chartExample1 = await updateChart2(newLabels, newData);
      // console.log(newLabels.slice(0,10), newData)
      console.log('132=================================');
      setGraphData(chartExample1);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    updateGraph()
  }, [newData, newLabels]);

  React.useEffect(() => {
    console.log("graphload useeffect")
    console.log(newData)

    // New labels and data values
    if(newData.length!==0 && newLabels.length!==0){
      console.log("graphloaded: True")
      setGraphLoaded(true);
    }
  }, [newData, newLabels]);
  
  return (
    <>
      <div className="content">
        <Row>
          <Col xs="12">
            <Card className="card-chart">
              <CardHeader>
                <Row>
                  <Col className="text-left" sm="6">
                    <h5 className="card-category">Timeline</h5>
                    <CardTitle tag="h2">Time-varying profiles</CardTitle>
                  </Col>
                  <Col sm="6">
                    {/* <ButtonGroup
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data1",
                        })}
                        color="info"
                        id="0"
                        size="sm"
                        onClick={() => setBgChartData("data1")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Accounts
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="1"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data2",
                        })}
                        onClick={() => setBgChartData("data2")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Purchases
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-gift-2" />
                        </span>
                      </Button>
                      <Button
                        color="info"
                        id="2"
                        size="sm"
                        tag="label"
                        className={classNames("btn-simple", {
                          active: bigChartData === "data3",
                        })}
                        onClick={() => setBgChartData("data3")}
                      >
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Sessions
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                    </ButtonGroup> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody centered>
                {noerror ?
                  (graphLoaded ? 
                  <div className="chart-area">
                    <Line
                    data={graphData[bigChartData]}
                    options={chartExample1.options}
                    ref={chartReference}
                    />
                  </div>: 
                  <div className="chart-area">
                    <Box sx={{ width: '100%'}}>
                      <LinearProgress style={{ position: 'relative', marginTop: '10%',marginBottom: '-10%', marginLeft: '25%', marginRight: '25%'}}/>
                    </Box>
                  </div>
                ) : <>
                    <div className="error-container">
                    <h1>500 Internal Server Error</h1>
                    <p>Oops! Something went wrong on the server.</p>
                    <p>Please try again later.</p>
                  </div>
                    </>
              }
                
              </CardBody>
            </Card>
          </Col>
        </Row>

        {/* bar graph start */}
        
        {/* <Row>
          <Col lg="4">
            <Card className="card-chart">
              <CardHeader>
                <h5 className="card-category">Time-varying profiles </h5>
              </CardHeader>
              <CardBody>
              {noerror ? (graphLoaded ? 
                <div className="chart-area">
                  <Bar
                    data={chartExample3.data}
                    options={chartExample3.options}
                  />
                </div>:
                <div className="chart-area">
                  <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}/>
                </div>) : <>
                    <h3>500 Internal Server Error</h3>
                    <p>Oops! Something went wrong on the server.</p>
                    <p>Please try again later.</p>
                          </>}
              </CardBody>
            </Card>
          </Col>
        </Row> */}

        {/* bar graph end */}

        <ChakraProvider theme={theme}>

        <Row>
          <Col lg="12" md="12">
            <Card className="card-tasks" style={{height:'80px'}}>
              <ButtonChakra colorScheme="g" variant="outline" mr={3} onClick={DefaultValues} className="default-button">
                Default
              </ButtonChakra>
              <ButtonChakra colorScheme="blue" className="apply-button" onClick={ApplyParameters}>
                Apply
              </ButtonChakra>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6" md="12">
            <Card className="card-tasks" style={{height:'1110px'}}>
            <CardHeader>
                <CardTitle tag="h4">Filters</CardTitle>
              </CardHeader>
              <CardBody>
              <Stack spacing="24px">
              <BoxChakra>
                  <FormLabel htmlFor="owner">Particle type:</FormLabel>
                  <Select id="owner" 
                  onChange={handleParticleType} 
                  value={ParticleType}>
                    {ParticleTypeOptions.map((particleType, index) => (
                    <option key={index} value={particleType}>
                      {particleType}
                    </option>
                  ))}
                  </Select>
              </BoxChakra>

              <BoxChakra>
                <FormLabel htmlFor="owner">Targeting stratergy:</FormLabel>
                <Select id="owner" 
                onChange={handleTargeting} 
                value={Targeting}>
                  {TargetingStratrgyOptions.map((particleType, index) => (
                  <option key={index} value={particleType}>
                    {particleType}
                  </option>
                  ))}
                </Select>
              </BoxChakra>

              <Box>
                <FormLabel htmlFor="owner">HD:</FormLabel>
                <Flex>
                  <NumberInput
                    min={HDOptions[0]}
                    max={HDOptions[1]}
                    maxW="100px"
                    mr="2rem"
                    value={HDRangeValues}
                    onChange={setHDRangeValues}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={HDOptions[0]}
                    max={HDOptions[1]}
                    focusThumbOnChange={false}
                    value={HDRangeValues}
                    onChange={setHDRangeValues}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                    {HDOptions[0]}
                    </SliderMark>
                    <SliderMark value={HDOptions[1]*0.92} mt="4" ml="1" fontSize="sm">
                    {HDOptions[1]}
                    </SliderMark>
                    <SliderMark
                      value={HDRangeValues}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {HDRangeValues}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Zeta potential (mV):</FormLabel>
                <Flex>
                  <NumberInput
                    min={ZetaOptions[0]}
                    max={ZetaOptions[1]}
                    maxW="100px"
                    mr="2rem"
                    value={zetaPotential}
                    onChange={setZetaPotential}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={ZetaOptions[0]}
                    max={ZetaOptions[1]}
                    focusThumbOnChange={false}
                    value={zetaPotential}
                    onChange={setZetaPotential}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                    {ZetaOptions[0]}
                    </SliderMark>
                    <SliderMark value={ZetaOptions[1]*0.92} mt="4" ml="1" fontSize="sm">
                    {ZetaOptions[1]}
                    </SliderMark>
                    <SliderMark
                      value={zetaPotential}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {zetaPotential}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Charge:</FormLabel>
                <Select id="owner" 
                onChange={handleCharge} 
                value={Charge}>
                  {ChargeOptions.map((particleType, index) => (
                  <option key={index} value={particleType}>
                    {particleType}
                  </option>
                ))}
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Shape:</FormLabel>
                <Select id="owner" 
                onChange={handleShape} 
                value={Shape}>
                  {ShapeOptions.map((particleType, index) => (
                  <option key={index} value={particleType}>
                    {particleType}
                  </option>
                ))}
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Targeting model:</FormLabel>
                <Select id="owner" 
                onChange={handleTargetingModel} 
                value={TargetingModel}>
                  {TargetingModelOptions.map((particleType, index) => (
                  <option key={index} value={particleType}>
                    {particleType}
                  </option>
                ))}
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">CT:</FormLabel>
                <Select id="owner" 
                onChange={handleCT} 
                value={CT}>
                  {CTOptions.map((particleType, index) => (
                  <option key={index} value={particleType}>
                    {particleType}
                  </option>
                ))}
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Tsz:</FormLabel>
                <Flex>
                  <NumberInput
                    min={TSzOptions[0]}
                    max={TSzOptions[1]}
                    maxW="100px"
                    mr="2rem"
                    value={TszValues}
                    onChange={setTszValues}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={TSzOptions[0]}
                    max={TSzOptions[1]}
                    focusThumbOnChange={false}
                    value={TszValues}
                    onChange={setTszValues}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                    {TSzOptions[0]}
                    </SliderMark>
                    <SliderMark value={TSzOptions[1]*0.95} mt="4" ml="1" fontSize="sm">
                    {TSzOptions[1]}
                    </SliderMark>
                    <SliderMark
                      value={TszValues}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {TszValues}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Tumor Weight:</FormLabel>
                <Flex>
                  <NumberInput
                    min={TumorWeightOptions[0]}
                    max={TumorWeightOptions[1]}
                    maxW="100px"
                    mr="2rem"
                    value={TumorWeightValues}
                    onChange={setTumorWeightValues}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={TumorWeightOptions[0]}
                    max={TumorWeightOptions[1]}
                    focusThumbOnChange={false}
                    value={TumorWeightValues}
                    onChange={setTumorWeightValues}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                    {TumorWeightOptions[0]}
                    </SliderMark>
                    <SliderMark value={TumorWeightOptions[1]**0.91} mt="4" ml="1" fontSize="sm">
                    {TumorWeightOptions[1]}
                    </SliderMark>
                    <SliderMark
                      value={TumorWeightValues}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {TumorWeightValues}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Dose level (mg/kg):</FormLabel>
                <Flex>
                  <NumberInput
                    min={DoseOptions[0]}
                    max={DoseOptions[1]}
                    maxW="100px"
                    mr="2rem"
                    value={doseLevel}
                    onChange={setDoseLevel}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={DoseOptions[0]}
                    max={DoseOptions[1]}
                    focusThumbOnChange={false}
                    value={doseLevel}
                    onChange={setDoseLevel}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                    {DoseOptions[0]}
                    </SliderMark>
                    <SliderMark value={DoseOptions[1]*0.92} mt="4" ml="1" fontSize="sm">
                    {DoseOptions[1]}
                    </SliderMark>
                    <SliderMark
                      value={HDRangeValues[0]}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {doseLevel}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Body Weight:</FormLabel>
                <Flex>
                  <NumberInput
                    min={ZetaOptions[0]}
                    max={ZetaOptions[1]}
                    maxW="100px"
                    mr="2rem"
                    value={BodyWeightValues}
                    onChange={setBodyWeightValues}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={ZetaOptions[0]}
                    max={ZetaOptions[1]}
                    focusThumbOnChange={false}
                    value={BodyWeightValues}
                    onChange={setBodyWeightValues}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                    {ZetaOptions[0]}
                    </SliderMark>
                    <SliderMark value={ZetaOptions[1]*0.92} mt="4" ml="1" fontSize="sm">
                    {ZetaOptions[1]}
                    </SliderMark>
                    <SliderMark
                      value={BodyWeightValues}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {BodyWeightValues}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>


              </Stack>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" md="12">
            <Card className="card-tasks" style={{height:"410px"}}>
            <CardHeader>
              <CardTitle tag="h4">Dose intervals:</CardTitle>
            </CardHeader>
            <CardBody>
            <Stack spacing="24px">
            {/* <Box>
                <FormLabel htmlFor="owner">Administration route</FormLabel>
                <Select id="owner" 
                onChange={handleAdminRoute} 
                value={adminRoute}
                >
                  <option value="Oral">Oral</option>
                  <option value="IV">IV</option>
                  <option value="IT">IT</option>
                  <option value="IH">IH</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Target tissue</FormLabel>
                <Select id="owner" 
                onChange={handleTargetTissue} 
                value={targetTissue}
                >
                  <option value="Blood">Blood</option>
                  <option value="Lung">Lung</option>
                  <option value="Spleen">Spleen</option>
                  <option value="Liver">Liver</option>
                  <option value="Kidney">Kidney</option>
                  <option value="GI">GI</option>
                </Select>
              </Box> */}

              <Box>
                <FormLabel htmlFor="owner">Dose interval (h):</FormLabel>
                <Flex>
                  <NumberInput
                    min={1}
                    max={50}
                    maxW="100px"
                    mr="2rem"
                    value={interval}
                    onChange={handleInterval}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={1}
                    max={50}
                    focusThumbOnChange={false}
                    value={interval}
                    onChange={handleInterval}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                      1
                    </SliderMark>
                    <SliderMark value={48} mt="4" ml="1" fontSize="sm">
                      50
                    </SliderMark>
                    <SliderMark
                      value={interval}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {interval}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Number of doses:</FormLabel>
                <Flex>
                  <NumberInput
                    min={1}
                    max={20}
                    maxW="100px"
                    mr="2rem"
                    value={dose}
                    onChange={handleDose}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={1}
                    max={20}
                    focusThumbOnChange={false}
                    value={dose}
                    onChange={handleDose}
                  >
                    <SliderMark value={0.75} mt="4" ml="1" fontSize="sm">
                      1
                    </SliderMark>
                    <SliderMark value={19.2} mt="4" ml="1" fontSize="sm">
                      20
                    </SliderMark>
                    <SliderMark
                      value={dose}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {dose}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">
                  Simulation time after last administration (day):
                </FormLabel>
                <Flex>
                  <NumberInput
                    min={0}
                    max={10}
                    maxW="100px"
                    mr="2rem"
                    value={days}
                    onChange={handleDays}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={0}
                    max={10}
                    focusThumbOnChange={false}
                    value={days}
                    onChange={handleDays}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                      0
                    </SliderMark>
                    <SliderMark value={9.55} mt="4" ml="1" fontSize="sm">
                      10
                    </SliderMark>
                    <SliderMark
                      value={days}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {days}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Number of iterations:</FormLabel>
                <Flex>
                  <NumberInput
                    min={0}
                    max={2000}
                    maxW="100px"
                    mr="2rem"
                    value={iterations}
                    onChange={handleIterations}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    flex="1"
                    // defaultValue={5}
                    min={0}
                    max={2000}
                    focusThumbOnChange={false}
                    value={iterations}
                    onChange={handleIterations}
                  >
                    <SliderMark value={0} mt="4" ml="1" fontSize="sm">
                      1
                    </SliderMark>
                    <SliderMark value={1870} mt="4" ml="1" fontSize="sm">
                      2000
                    </SliderMark>
                    <SliderMark
                      value={iterations}
                      textAlign="center"
                      bg="blue.500"
                      color="white"
                      mt="-3.5"
                      ml="-5"
                      w="12"
                    >
                      {iterations}
                    </SliderMark>
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb
                    // fontSize="sm"
                    // boxSize="32px"
                    // children={value}
                    />
                  </Slider>
                </Flex>
              </Box>
              </Stack>
            </CardBody>
            </Card>
          </Col>
        </Row>
        </ChakraProvider>
        {/* chakraUI ending */}
      </div>
    </>
  );
}

export default Dashboard;
