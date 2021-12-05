import React from "react";
import "./Answer.scss";

const Answer = (props) => {
  let { Answer, correctAnswer, clickedAnswer, checkAnswer } = props;

  const listAnswer = Object.keys(Answer).map((qAnswer) => {
    return (
      <li onClick={() => checkAnswer(qAnswer)} key={qAnswer}>
        <label
          className={
            correctAnswer === qAnswer
              ? "correct"
              : clickedAnswer === qAnswer
              ? "incorrect"
              : ""
          }
        >
          <span>{qAnswer}.</span>
          {Answer[qAnswer]}
        </label>
      </li>
    );
  });
  return (
    <>
      {/* // we want to disable the click event/ once an answer is click to avoid
      clicking other option */}
      <ul disabled={clickedAnswer ? true : false} className="Answers">
        {listAnswer}
      </ul>
      {/* <div>
        {correctAnswer
          ? "correct answer!"
          : clickedAnswer
          ? "incorrect answer"
          : ""}
      </div> */}
    </>
  );
};

export default Answer;
