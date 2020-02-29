import { CITIES } from "../../../constants/sampleData";

export const getFAQContext = context => {
  switch (context) {
    case CITIES.NY_CITY:
      return [
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
      ];
    case CITIES.BUFFALO:
      return [
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
      ];
    case CITIES.LA:
      return [
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
      ];
    case CITIES.SF:
      return [
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
      ];
    case CITIES.AUSTIN:
      return [
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
      ];
    case CITIES.SA:
      return [
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
      ];
    default:
      return "";
  }
};
