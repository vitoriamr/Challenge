import { STATES, CITIES } from "../../../constants/sampleData";

export const getDropdownOptions = context => {
  switch (context) {
    case STATES.NY:
      return [CITIES.NY_CITY, CITIES.BUFFALO];
    case STATES.CA:
      return [CITIES.LA, CITIES.SF];
    case STATES.TX:
      return [CITIES.AUSTIN, CITIES.SA];
    default:
      return "";
  }
};
