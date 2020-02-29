import { CITIES } from "../../../../constants/sampleData";

import { getFAQContext } from "../FAQconfig";

describe("getFAQContext", () => {
  describe("NY City Context", () => {
    it("should return New York City answers", () => {
      expect(getFAQContext(CITIES.NY_CITY)).toStrictEqual([
        {
          item: 1,
          question: "Where is the best Pizza?",
          answer: "Di Fara in Brooklyn"
        },
        {
          item: 2,
          question: "Are the bagels really that good?",
          answer: "Yes"
        }
      ]);
    });
  });

  describe("Buffalo Context", () => {
    it("should return Buffalo answers", () => {
      expect(getFAQContext(CITIES.BUFFALO)).toStrictEqual([
        {
          item: 1,
          question: "Did Buffalo Sauce come from Buffalo the city?",
          answer: "Yup!"
        },
        {
          item: 2,
          question:
            "Does Buffalo have a population of more than 1 Million people?",
          answer:
            "Nope, the population of Buffalo (not including the Buffalo-Niagara Falls metropolitan area) as of 2016 is ~257,000"
        }
      ]);
    });
  });

  describe("Los Angeles Context", () => {
    it("should return Los Angeles answers", () => {
      expect(getFAQContext(CITIES.LA)).toStrictEqual([
        {
          item: 1,
          question: "Does the sun shine every day in LA?",
          answer: "Nearly"
        },
        {
          item: 2,
          question: "What's the official dish of Los Angeles?",
          answer: "An avocado"
        }
      ]);
    });
  });

  describe("San Francisco Context", () => {
    it("should return San Francisco answers", () => {
      expect(getFAQContext(CITIES.SF)).toStrictEqual([
        {
          item: 1,
          question: "What's the name of that famous bridge?",
          answer: "Golden Gate Bridge"
        },
        {
          item: 2,
          question: "What's the name of that other bridge in SF?",
          answer: "San Francisco–Oakland Bay Bridge"
        }
      ]);
    });
  });

  describe("Austin Context", () => {
    it("should return Austin answers", () => {
      expect(getFAQContext(CITIES.AUSTIN)).toStrictEqual([
        {
          item: 1,
          question: "Where can I find the best breakfast tacos?",
          answer: "Veracruz"
        },
        {
          item: 2,
          question: "Is the BBQ really that good?",
          answer: "Yes"
        }
      ]);
    });
  });

  describe("San Antonio Context", () => {
    it("should return San Antonio answers", () => {
      expect(getFAQContext(CITIES.SA)).toStrictEqual([
        {
          item: 1,
          question: "How far away is Austin from San Antonio?",
          answer: "45 minutes to 2 hours depending on traffic"
        },
        {
          item: 2,
          question: "Are San Antonio's breakfast tacos better than Austin's?",
          answer: "No way"
        }
      ]);
    });
  });
});
