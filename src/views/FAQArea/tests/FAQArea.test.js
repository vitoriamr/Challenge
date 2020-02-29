import React from "react";
import { shallow, mount } from "enzyme";

import { CITIES } from "../../../constants/sampleData";
import FAQArea from "../FAQArea";

describe("FAQArea", () => {
  const requiredProps = {
    faqVisible: true,
    value: CITIES.AUSTIN
  };

  it("matches previous snapshot", () => {
    const wrapper = shallow(<FAQArea {...requiredProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("FAQ Visible", () => {
    it("should render FAQTitle with value", () => {
      const wrapper = shallow(<FAQArea {...requiredProps} />);
      expect(wrapper.find("FAQTitle").text()).toBe(
        `${requiredProps.value} FAQs`
      );
    });

    it("should not render FAQSubtitle", () => {
      const wrapper = shallow(<FAQArea {...requiredProps} />);
      expect(wrapper.find("FAQSubtitle").exists()).toBe(false);
    });

    it("should render QuestionsList", () => {
      const wrapper = shallow(<FAQArea {...requiredProps} />);
      expect(wrapper.find("QuestionsList").exists()).toBe(true);
    });

    it("should render 2 Questions", () => {
      const wrapper = mount(<FAQArea {...requiredProps} />);
      expect(wrapper.find("Question").length).toBe(2);
    });

    it("should render corresponding answer if button is clicked", () => {
      const wrapper = mount(<FAQArea {...requiredProps} />);
      wrapper.find(`Button[id="button-1"]`).simulate("click");
      expect(wrapper.find(`Answer[id="answer-1"]`).exists()).toBe(true);
    });
  });

  describe("FAQ not Visible", () => {
    const props = {
      ...requiredProps,
      faqVisible: false
    };

    it("should render default FAQTitle", () => {
      const wrapper = shallow(<FAQArea {...props} />);
      expect(wrapper.find("FAQTitle").text()).toBe("City FAQs");
    });

    it("should render FAQSubtitle if faq is not visible", () => {
      const wrapper = shallow(<FAQArea {...props} />);
      expect(wrapper.find("FAQSubtitle").text()).toBe(
        "Select a State and City to see Info"
      );
    });

    it("should not render QuestionsList", () => {
      const wrapper = shallow(<FAQArea {...props} />);
      expect(wrapper.find("QuestionsList").exists()).toBe(false);
    });
  });
});
