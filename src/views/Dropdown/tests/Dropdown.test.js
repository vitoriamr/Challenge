import React from "react";
import { shallow, mount } from "enzyme";

import { DEFAULT_VALUE, STATES, CITIES } from "../../../constants/sampleData";
import Dropdown from "../Dropdown";

describe("Dropdown", () => {
  const requiredProps = {
    available: true,
    currentValue: DEFAULT_VALUE,
    valueOptions: [STATES.CA, STATES.NY, STATES.TX],
    handleDropdown: () => {}
  };

  it("matches previous snapshot", () => {
    const wrapper = shallow(<Dropdown {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render default dropdown text", () => {
    const wrapper = shallow(<Dropdown {...requiredProps} />);
    expect(wrapper.find("DropdownText").text()).toBe(DEFAULT_VALUE);
  });

  it("opens dropdown options on click", () => {
    const wrapper = mount(<Dropdown {...requiredProps} />);
    wrapper.find("FirstButton").simulate("click");
    expect(wrapper.find("Options").exists()).toBe(true);
  });

  it("should call handleDropdown when selecting an option", () => {
    const props = {
      ...requiredProps,
      handleDropdown: jest.fn()
    };
    const wrapper = mount(<Dropdown {...props} />);
    jest.clearAllMocks();
    wrapper.find("FirstButton").simulate("click");
    wrapper.find(`OptionsButton[id="button-${STATES.NY}"]`).simulate("click");
    expect(props.handleDropdown).toHaveBeenCalledTimes(1);
  });

  it("should close dropdown when selecting an option", () => {
    const props = {
      ...requiredProps,
      handleDropdown: jest.fn()
    };
    const wrapper = mount(<Dropdown {...props} />);
    jest.clearAllMocks();
    wrapper.find("FirstButton").simulate("click");
    wrapper.find(`OptionsButton[id="button-${STATES.NY}"]`).simulate("click");
    expect(wrapper.find("Options").exists()).toBe(false);
  });

  describe("first dropdown", () => {
    it("should render New York label", () => {
      const wrapper = mount(<Dropdown {...requiredProps} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${STATES.NY}"]`).text()).toBe(
        STATES.NY
      );
    });

    it("should render California label", () => {
      const wrapper = mount(<Dropdown {...requiredProps} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${STATES.CA}"]`).text()).toBe(
        STATES.CA
      );
    });

    it("should render Texas label", () => {
      const wrapper = mount(<Dropdown {...requiredProps} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${STATES.TX}"]`).text()).toBe(
        STATES.TX
      );
    });
  });

  describe("second dropdown", () => {
    const props = {
      ...requiredProps,
      valueOptions: [
        CITIES.AUSTIN,
        CITIES.BUFFALO,
        CITIES.LA,
        CITIES.NY_CITY,
        CITIES.SA,
        CITIES.SF
      ]
    };
    it("should render Austin label", () => {
      const wrapper = mount(<Dropdown {...props} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${CITIES.AUSTIN}"]`).text()).toBe(
        CITIES.AUSTIN
      );
    });

    it("should render Buffalo label", () => {
      const wrapper = mount(<Dropdown {...props} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${CITIES.BUFFALO}"]`).text()).toBe(
        CITIES.BUFFALO
      );
    });

    it("should render Los Angeles label", () => {
      const wrapper = mount(<Dropdown {...props} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${CITIES.LA}"]`).text()).toBe(
        CITIES.LA
      );
    });

    it("should render New York City label", () => {
      const wrapper = mount(<Dropdown {...props} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${CITIES.NY_CITY}"]`).text()).toBe(
        CITIES.NY_CITY
      );
    });

    it("should render San Antonio label", () => {
      const wrapper = mount(<Dropdown {...props} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${CITIES.SA}"]`).text()).toBe(
        CITIES.SA
      );
    });

    it("should render San Francisco label", () => {
      const wrapper = mount(<Dropdown {...props} />);
      wrapper.find("FirstButton").simulate("click");
      expect(wrapper.find(`MenuText[id="${CITIES.SF}"]`).text()).toBe(
        CITIES.SF
      );
    });
  });
});
