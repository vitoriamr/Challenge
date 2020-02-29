import { STATES, CITIES } from "../../../../constants/sampleData";

import { getDropdownOptions } from "../dropdownConfig";

describe("getDropdownOptions", () => {
  describe("NY Context", () => {
    it("should return New York City and Buffalo cities", () => {
      expect(getDropdownOptions(STATES.NY)).toStrictEqual([
        CITIES.NY_CITY,
        CITIES.BUFFALO
      ]);
    });
  });

  describe("CA Context", () => {
    it("should return Los Angeles and San Francisco cities", () => {
      expect(getDropdownOptions(STATES.CA)).toStrictEqual([
        CITIES.LA,
        CITIES.SF
      ]);
    });
  });

  describe("TX Context", () => {
    it("should return Austin and San Antonio cities", () => {
      expect(getDropdownOptions(STATES.TX)).toStrictEqual([
        CITIES.AUSTIN,
        CITIES.SA
      ]);
    });
  });
});
