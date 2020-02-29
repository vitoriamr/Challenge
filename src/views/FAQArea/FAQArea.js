import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import faqArrowIcon from "../../icons/faqArrow.svg";
import { getFAQContext } from "./FAQconfig/FAQconfig";

const FAQArea = ({ faqVisible, value }) => {
  const [openAnswer, setOpenAnswer] = useState(false);
  const [FAQItem, setFAQItem] = useState(undefined);

  const values = getFAQContext(value);

  const shouldOpenAnswer = (openAnswer, FAQItem, currentFAQ) =>
    openAnswer && FAQItem === currentFAQ;

  return (
    <div>
      <FAQTitle>{faqVisible ? value + " FAQs" : "City FAQs"}</FAQTitle>
      {!faqVisible && (
        <FAQSubtitle>{"Select a State and City to see Info"}</FAQSubtitle>
      )}
      {faqVisible && (
        <QuestionsList>
          {values.map(value => (
            <Grid key={value.item}>
              <Button
                id={`button-${value.item}`}
                onClick={() => {
                  value.item === FAQItem
                    ? setOpenAnswer(!openAnswer)
                    : setOpenAnswer(true);
                  setFAQItem(value.item);
                }}
              >
                <Icon
                  facingUp={shouldOpenAnswer(openAnswer, FAQItem, value.item)}
                  src={faqArrowIcon}
                  alt={"faqArrowIcon"}
                />
              </Button>
              <Question
                shouldOpenAnswer={shouldOpenAnswer(
                  openAnswer,
                  FAQItem,
                  value.item
                )}
              >
                {value.question}
              </Question>
              {shouldOpenAnswer(openAnswer, FAQItem, value.item) && (
                <Answer id={`answer-${value.item}`}>{value.answer} </Answer>
              )}
            </Grid>
          ))}
        </QuestionsList>
      )}
    </div>
  );
};
FAQArea.propTypes = {
  faqVisible: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

const FAQTitle = styled.div`
  font-size: 18px;
  font-family: "Cinzel";
`;
FAQTitle.displayName = "FAQTitle";

const FAQSubtitle = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;
FAQSubtitle.displayName = "FAQSubtitle";

const QuestionsList = styled.div`
  margin-top: 20px;
  width: 500px;
`;
QuestionsList.displayName = "QuestionsList";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    "button question"
    ". answer";
  margin-bottom: 20px;
`;

const Question = styled.div`
  grid-area: question;
  font-weight: bold;
  margin: 8px 0 10px;
  text-align: start;
`;
Question.displayName = "Question";

const Button = styled.button`
  grid-area: button;
  border: none;
  background: transparent;
  height: 30px;
  width: 30px;
  outline: none;
`;
Button.displayName = "Button";

const Icon = styled.img`
  height: 30px;
  width: 30px;
  ${props => (props.facingUp ? "transform: rotate(90deg);" : "")}
`;

const Answer = styled.div`
  grid-area: answer;
  margin-bottom: 20px;
`;
Answer.displayName = "Answer";

export default FAQArea;
