import React, { useState } from "react";
import styled from "styled-components";

import { STATES, DEFAULT_VALUE } from "../constants/sampleData";
import Dropdown from "./Dropdown/Dropdown";
import FAQArea from "./FAQArea/FAQArea";
import { getDropdownOptions } from "./Dropdown/dropdownConfig/dropdownConfig";

const App = () => {
  const [firstDropdownCurrentValue, setFirstDropdownCurrentValue] = useState(
    DEFAULT_VALUE
  );
  const [secondDropdownCurrentValue, setSecondDropdownCurrentValue] = useState(
    DEFAULT_VALUE
  );
  const [dropdownAvailable, setDropdownAvailable] = useState(false);
  const [faqVisible, setFaqVisible] = useState(false);

  const dropdown1 = [STATES.NY, STATES.CA, STATES.TX];
  const dropdown2 = dropdownAvailable
    ? getDropdownOptions(firstDropdownCurrentValue)
    : [];

  const handleFirstDropdown = (event, value) => {
    event.preventDefault();
    setFirstDropdownCurrentValue(value);
    setDropdownAvailable(true);
    setSecondDropdownCurrentValue(DEFAULT_VALUE);
    setFaqVisible(false);
  };

  const handleSecondDropdown = (event, value) => {
    event.preventDefault();
    setSecondDropdownCurrentValue(value);
    setFaqVisible(true);
  };

  return (
    <Grid>
      <FlexDiv>
        <DropdownLabel id="statesLabel">{"States:"}</DropdownLabel>
        <Dropdown
          available={true}
          currentValue={firstDropdownCurrentValue}
          valueOptions={dropdown1}
          handleDropdown={handleFirstDropdown}
        />
      </FlexDiv>
      <FlexDiv>
        <DropdownLabel id="citiesLabel">{"Cities:"}</DropdownLabel>
        <Dropdown
          available={dropdownAvailable}
          currentValue={secondDropdownCurrentValue}
          valueOptions={dropdown2}
          handleDropdown={handleSecondDropdown}
        />
      </FlexDiv>
      <FAQArea faqVisible={faqVisible} value={secondDropdownCurrentValue} />
    </Grid>
  );
};

const Grid = styled.div`
  margin: 30px;
  display: grid;
`;

const FlexDiv = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

const DropdownLabel = styled.label`
  margin: 3px 10px 0 0;
`;
DropdownLabel.displayName = "DropdownLabel";

export default App;
