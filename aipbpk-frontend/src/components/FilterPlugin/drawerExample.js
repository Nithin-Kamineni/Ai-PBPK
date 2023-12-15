import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Stack,
  Box,
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

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';

import ApiCallComponent from "../../request/ApiCallComponent";

import {DataValuesContext} from '../../contexts/DataValuesContext'
import MultiSelect from "./multi-select";
import { shape } from "prop-types";

function DrawerExample({ children, ...rest }) {

  const dataValuesContext = React.useContext(DataValuesContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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

  const records = dataValuesContext.records;

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
  if(records!=null){
    ParticleTypeOptions = records["Particle Type"] ? records["Particle Type"] : []
    TargetingStratrgyOptions = records["Targeting Stratergy"] ? records["Targeting Stratergy"] : []
    HDOptions = records["HD"] ? records["HD"] : []
    ZetaOptions = records["Zeta"] ? records["Zeta"] : []
    ChargeOptions = records["Charge"] ? records["Charge"] : []
    ShapeOptions = records["Shape"] ? records["Shape"] : []
    TargetingModelOptions = records["Tumor Model"] ? records["Tumor Model"] : []
    CTOptions = records["CT"] ? records["CT"] : []
    TSzOptions = records["TSz"] ? records["TSz"] : []
    TumorWeightOptions = records["Tumor Weight"] ? records["Tumor Weight"] : []
    DoseOptions = records["Dose"] ? records["Dose"] : []
    BodyWeightOptions = records["Body Weight"] ? records["Body Weight"] : []
  }
  else{
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
  }
  
  const AdminRouteOptions = ["Oral", "IV", "IT", "IH","test"]
  const TargetTissueOptions = ["Oral", "IV", "IT", "IH","test"]
  const DoseLevelOptions = ["Oral", "IV", "IT", "IH","test"]
  const NPSizeOptions = ["Oral", "IV", "IT", "IH","test"]
  const zetaPotentialOptions = ["Oral", "IV", "IT", "IH","test"]
  const HydrodynamicOptions = ["Oral", "IV", "IT", "IH","test"]
  const SurfaceOptions = ["Oral", "IV", "IT", "IH","test"]
  const AdminNumberOptions = ["Oral"]
  const DoseIntervalOptions = [1,2]
  const NumberOfDoses = [1,20]
  const SimulationOptions = [0,10]
  const IterationsOptions = [1,2000]
  return (
    <>
      <i className="fa fa-2x fa-filter" onClick={onOpen}/>
      <Drawer
        // variant="alwaysOpen"
        {...rest}
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        // trapFocus={false}
        // closeOnOverlayClick={false}
        // blockScrollOnMount={false}
      >
        {/* <DrawerOverlay /> */}
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Filters
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">

              <Box>
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
              </Box>

              <Box>
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
              </Box>

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
                    <SliderMark value={HDOptions[1]*0.75} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={ZetaOptions[1]*0.75} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={TSzOptions[1]*0.75} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={TumorWeightOptions[1]*0.75} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={DoseOptions[1]*0.75} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={ZetaOptions[1]*0.75} mt="4" ml="1" fontSize="sm">
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

              

              <Box>
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
              </Box>

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
                    <SliderMark value={43} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={17.5} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={8.5} mt="4" ml="1" fontSize="sm">
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
                    <SliderMark value={1550} mt="4" ml="1" fontSize="sm">
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

              <Box>
                {/* <MultiSelect
                  title="Technologies"
                  options={[
                    "Chakra-UI",
                    "React",
                    "Vite",
                    "TypeScript",
                    "Next.js",
                    "TailwindCSS",
                    "React Query",
                    "React Hook Form",
                    "React Router"
                  ]}
                /> */}
              </Box>

              {/* <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea id="desc" />
              </Box> */}
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={DefaultValues}
              className="default-button"
            >
              Default
            </Button>
            <Button colorScheme="blue" className="apply-button" onClick={ApplyParameters}>
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
