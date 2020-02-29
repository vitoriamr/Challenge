import React from "react";
import { shallow } from "enzyme";

import App from "./App";

describe("App", () => {
  it("matches previous snapshot", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render States label", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('DropdownLabel[id="statesLabel"]').text()).toBe(
      "States:"
    );
  });

  it("should render Cities label", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('DropdownLabel[id="citiesLabel"]').text()).toBe(
      "Cities:"
    );
  });

  it("should render 2 Dropdowns label", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Dropdown").length).toBe(2);
  });

  it("should render FAQArea", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("FAQArea").exists()).toBe(true);
  });
});
