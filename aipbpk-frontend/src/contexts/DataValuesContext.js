import { createContext } from "react";

export const defaultValues = {
  defaultAdminRoute:"Oral",
  defaultTargetTissue : "Blood",
  defaultDoseLevel : 20,
  defaultNPSize : 5,
  defaultZetaPotential : 0,
  defaultHydroDiameter : 12.2,
  defaultSurface : 27,
  defaultAdminNpsPerRat:13,
  defaultInterval : 24,
  defaultDose : 1,
  defaultDays : 1,
  defaultIterations : 100
};

export const DataValuesContext = createContext();
