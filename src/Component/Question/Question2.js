import React from "react";
import "./Question.scss";

const Question2 = (props) => {
  let { Question, step } = props;
  return (
    <p>
      <span>{step}.</span> {Question}
    </p>
  );
};

export default Question2;
