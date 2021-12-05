import React, { Component } from "react";
import Answer from "./Answer/Answer";
import Question from "./Question/Question";
import "./QuizMain.scss";

class QuizMain extends Component {
  state = {
    Questions: {
      1: `How many times do you shower in a day?"`,
      2: "Native dressing with socks and shoe or with Pam slippers?",
      3: "Team Drive or Team legedis?",
      4: "To gym or Not to Gym?",
      5: "Team 5 sec bathing or team I take my time to baff?",
      6: "Team Tattoo or Team earring?",
      7: "Team beard gang or bear bear crew?",
      8: "Tall dark and Handsome or Tall light and Handsome?",
      9: "Change boxers daily or 1 week 1 boxer",
      10: "Invited for dinner, who pays the bill?",
    },
    Answers: {
      1: {
        A: "Once a day",
        B: "Wash and dry",
        C: "twice a day",
        D: "Hmmm...on a need to basis",
        E: "I am into wash and dry",
      },
      2: {
        A: "Why you go wear socks with Native?",
        B: "Pam slippers for me",
        C: "Half shoes things",
        D: "Defend on my mood",
        E: "Shoe with socks for me",
      },
      3: {
        A: "Team legedis",
        B: "I gat a fleet",
        C: "All these things don't matter in heaven",
        D: "Na bicycle i get, i no kill person.",
        E: "i no come this life to suffer.",
      },
      4: {
        A: "What is that?",
        B: "Who gym help?",
        C: "Spirit is willing but body is weak",
        D: "Gym all the way",
        E: "Eba no gree me go gym",
      },
      5: {
        A: "I dey cook my skin?",
        B: "I take my time oh ( Celine Dion moment )",
        C: "E depend on if queue dey outside door",
        D: "Rush in Rush out",
        E: "It depends on my mood",
      },
      6: {
        A: "Tattoo yes pls",
        B: "Earring abeg",
        C: "The 2 of them",
        D: "none",
        E: "The pain is madt",
      },
      7: {
        A: "Can't be bothered",
        B: `Small "bear bear" crew`,
        C: "Team clean shaven abeg",
        D: "Anyone goes abeg",
        E: "Beard gang all the way",
      },
      8: {
        A: "Well Summarised",
        B: "Ofcos I represent all tall light and handsome dudes",
        C: "What about short people? Stop discrimination",
        D: "I am nobody's ex jor",
        E: "Omo na TDH I be oh AKA Charcoal coloured Iroko",
      },
      9: {
        A: "I sniff, e smell, I wash",
        B: "who boxers help?",
        C: "Team change daily",
        D: "Team weekly",
        E: "Twice per day",
      },
      10: {
        A: "If no sugar mummy nko?",
        B: "Aunty aeg run am",
        C: "The guy na",
        D: "Person wey ask for bill",
        E: "Who no forget wallet for house",
      },
    },
    correctAnswers: {
      1: "C",
      2: "B",
      3: "C",
      4: "D",
      5: "B",
      6: "D",
      7: "C",
      8: "A",
      9: "C",
      10: "D",
    },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
  };

  checkAnswer = (answer) => {
    const { correctAnswers, score, step } = this.state;
    // we want to check if d clicked answer is the same with the
    // correctAnswers[step] position
    // i.e if answer/key/index position 1 is the same as index position
    // correctAnswer[step] 1

    // it just mean if answer clicked i key (1)or id (1) and then
    // correctAnswers[step] e.g step is 1 then set this state
    // push that correctAnswers that matches to correctAnswer
    if (answer === correctAnswers[step]) {
      // if it matches then set score
      //   set correctAnswer
      this.setState({
        score: score + 1,
        correctAnswer: correctAnswers[step],
        // now we set that correct Answer to our correctAnswer object
        clickedAnswer: answer, // we still need pass the licked correctAnswer clickedAnswer to it for some conditional rendering
      });
    } else {
      this.setState({
        correctAnswer: 0,
        clickedAnswer: answer, // this just incase d clicked answer is not the correct one
        // we can use it to style the app
      });
    }
  };

  NextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  totalScore = (propScore) => {
    const newtotal = Math.floor(
      (propScore / Object.keys(this.state.Questions).length) * 100
    );
    return newtotal;
  };

  render() {
    let { Questions, score, step, Answers, correctAnswer, clickedAnswer } =
      this.state;
    return (
      <div className="content">
        {step <= Object.keys(Questions).length ? (
          <>
            <Question Question={Questions[step]} step={step} />
            <Answer
              Answer={Answers[step]}
              step={step}
              checkAnswer={this.checkAnswer}
              correctAnswer={correctAnswer}
              clickedAnswer={clickedAnswer}
            />
            <div className="content__button">
              <button style={{ visibility: "hidden" }}>&nbsp;</button>
              <button
                className="nextStep"
                //   we check to see if the length of the question and the
                //    clicked answer is greater or equal to step den don't disable the btn
                disabled={
                  // both the clickedAnswer and question length must match
                  // and must be equal to the present {step} position
                  clickedAnswer && Object.keys(Questions).length >= step
                    ? false
                    : true
                }
                onClick={() => this.NextStep(step)}
              >
                next question
              </button>
            </div>
          </>
        ) : (
          <div className="finalPage">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 d-flex align-items-center">
                  <div class="finalPage__spec-score">
                    <span>{this.totalScore(score)}</span>
                  </div>
                </div>

                <div class="col-md-6">
                  <div className="finalPage__complete-content">
                    <h2 className="content-title">Get your Spec Badge</h2>
                    <p className="content-subtitle text-center">
                      Fill in your details to know your spec status
                    </p>
                    <form>
                      <div className="form-group">
                        <label>Instagram/Facebook Profile Link</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder=""
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="btn-wrapper text-center">
                        <button className="btn">
                          <a>CONTINUE</a>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default QuizMain;

{
  /* <h1>you have completed the quiz</h1>
<p>
  your score is: {score} of {Object.keys(Questions).length}
</p>
<p>thank you</p> */
}
