import React, { Component } from "react";
import Answer from "./Answer/Answer";
import Question from "./Question/Question";
import "./QuizMain.scss";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

// import {
//   NotificationContainer,
//   NotificationManager,
// } from "react-notifications";

// import "react-notifications/lib/notifications.css";

// imgs
import Specful from "../img/men/men-badge-specful.png";
import Specmaking from "../img/men/men-badge-specmaking.png";
import Specless from "../img/men/men-badge-specless.png";
import SpecTacular from "../img/men/men-badge-spectacular.png";
import SpecUpcoming from "../img/men/men-badge-specupcoming.png";
// import score

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
        A: ["Once a day", 7],
        B: ["Wash and dry", 1],
        C: ["twice a day", 9],
        D: ["Hmmm...on a need to basis", 5],
        E: ["I am into wash and dry", 3],
      },
      2: {
        A: ["Why you go wear socks with Native?", 3],
        B: ["Pam slippers for me", 5],
        C: ["Half shoes things", 1],
        D: ["Defend on my mood", 9],
        E: ["Shoe with socks for me", 7],
      },
      3: {
        A: ["Team legedis", 3],
        B: ["I gat a fleet", 9],
        C: ["All these things don't matter in heaven", 7],
        D: ["Na bicycle i get, i no kill person.", 1],
        E: ["i no come this life to suffer.", 5],
      },
      4: {
        A: ["What is that?", 3],
        B: ["Who gym help?", 1],
        C: ["Spirit is willing but body is weak", 9],
        D: ["Gym all the way", 7],
        E: ["Eba no gree me go gym", 5],
      },
      5: {
        A: ["I dey cook my skin?", 9],
        B: ["I take my time oh ( Celine Dion moment )", 1],
        C: ["E depend on if queue dey outside door", 3],
        D: ["Rush in Rush out", 5],
        E: ["It depends on my mood", 7],
      },
      6: {
        A: ["Tattoo yes pls", 3],
        B: ["Earring abeg", 5],
        C: ["The 2 of them", 7],
        D: ["none", 9],
        E: ["The pain is madt", 1],
      },
      7: {
        A: ["Can't be bothered", 5],
        B: [`Small "bear bear" crew`, 7],
        C: ["Team clean shaven abeg", 3],
        D: ["Anyone goes abeg", 1],
        E: ["Beard gang all the way", 9],
      },
      8: {
        A: ["Well Summarised", 3],
        B: ["Ofcos I represent all tall light and handsome dudes", 1],
        C: ["What about short people? Stop discrimination", 9],
        D: ["I am nobody's ex jor", 5],
        E: ["Omo na TDH I be oh AKA Charcoal coloured Iroko", 7],
      },
      9: {
        A: ["I sniff, e smell, I wash", 5],
        B: ["who boxers help?", 3],
        C: ["Team change daily", 1],
        D: ["Team weekly", 7],
        E: ["Twice per day", 9],
      },
      10: {
        A: ["If no sugar mummy nko?", 9],
        B: ["Aunty aeg run am", 5],
        C: ["The guy na", 7],
        D: ["Person wey ask for bill", 3],
        E: ["Who no forget wallet for house", 1],
      },
    },
    // correctAnswers: {
    //   1: "C",
    // 2: "B",
    // 3: "C",
    // 4: "D",
    // 5: "B",
    // 6: "D",
    // 7: "C",
    // 8: "A",
    // 9: "C",
    // 10: "D",
    // },
    correctAnswer: 0,
    clickedAnswer: 0,
    step: 1,
    score: 0,
    showSpecFul: false,
    userName: "",
    number: "",
    errors: {},
  };

  checkAnswer = (answer) => {
    const { correctAnswers, score, step, Answers } = this.state;

    if (answer) {
      this.setState({
        score: score + Answers[step][answer][1],
        // correctAnswer: correctAnswers[step],
        // now we set that correct Answer to our correctAnswer object
        clickedAnswer: answer, // we still need pass the licked correctAnswer clickedAnswer to it for some conditional rendering
      });
    }
    // else {
    //   this.setState({
    //     correctAnswer: 0,
    //     clickedAnswer: answer, // this just incase d clicked answer is not the correct one
    //     // we can use it to style the app
    //   });
    // }
    console.log(Answers[step][answer][1]);
  };

  NextStep = (step) => {
    this.setState({
      step: step + 1,
      correctAnswer: 0,
      clickedAnswer: 0,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { userName, number } = this.state;
    let isValid = true;
    const errors = {};
    if (userName.trim().length < 6) {
      // we use the trim to cut out any white space/ outer space
      // and at the same time it give the chance to use lenght method
      errors.userNameLength = "username must be of length 6 or higher";
      isValid = false;
    }
    // if (!userName.includes("$")) {
    //   // if it does not include $ sign den it is not valid
    //   errors.userName$ = "username must ' $ ' ";
    //   isValid = false;
    // }

    if (number.trim().length < 8) {
      // we use the trim to cut out any white space/ outer space
      // and at the same time it give the chance to use lenght method
      errors.numberLength = "number must be of length 8 or higher";
      isValid = false;
    }
    this.setState({ errors });
    return isValid; // let return valid state e.i true or false
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const isValid = this.validateForm();

    if (isValid) {
      this.setState({ showSpecFul: true });
    }
  };

  render() {
    let {
      Questions,
      score,
      step,
      Answers,
      correctAnswer,
      clickedAnswer,
      errors,
    } = this.state;
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
                  // the clickedAnswer must equal true that an answer in the answers[step].qAnswer was clicked
                  // and the length of the question is === or greter than step to make the disabled atribute false
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
        ) : this.state.showSpecFul === false ? (
          <div className="finalPage">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-6 d-flex align-items-center">
                  <div className="finalPage__spec-score">
                    <span>{score}</span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="finalPage__complete-content">
                    {/* <pre>
                       {JSON.stringify(
                        `${this.state.userName} ${this.state.number}`,
                        undefined,
                        2
                      )} 
                    </pre> */}
                    <h2 className="content-title">Get your Spec Badge</h2>
                    <p className="content-subtitle text-center">
                      Fill in your details to know your spec status
                    </p>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-group">
                        <label>Instagram/Facebook Profile Link</label>
                        <input
                          type="text"
                          name="userName"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          name="number"
                          className="form-control"
                          onChange={this.handleChange}
                        />
                        {Object.keys(errors).map((key) => {
                          return (
                            <div
                              style={{
                                color: "orangered",
                                fontSize: "1.5rem",
                              }}
                              key={key}
                            >
                              {errors[key]}
                            </div>
                          );
                        })}
                      </div>
                      <div className="btn-wrapper text-center">
                        <button className="btn">CONTINUE</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5 ">
                <div className="specful">
                  <h2 className="specful__title text-center pt-50 mb-3">
                    Share your SPEC Status Badge
                  </h2>
                  {score >= 81 ? (
                    <img
                      src={SpecTacular}
                      className="specful__badge mb-2"
                      alt="spec img"
                    />
                  ) : score >= 61 && score <= 80 ? (
                    <img
                      src={Specful}
                      className="specful__badge mb-2"
                      alt="spec img"
                    />
                  ) : score >= 31 && score <= 60 ? (
                    <img
                      src={Specmaking}
                      className="specful__badge mb-2"
                      alt="spec img"
                    />
                  ) : score >= 11 && score <= 30 ? (
                    <img
                      src={SpecUpcoming}
                      className="specful__badge mb-2"
                      alt="spec img"
                    />
                  ) : (
                    <img
                      src={Specless}
                      className="specful__badge mb-2"
                      alt="spec img"
                    />
                  )}
                  <div className="share-button text-center mt-5">
                    <button className="share-button__btn px-2">
                      Download your SPEC badge and share
                    </button>
                    <span className="share-text mt-4">Share on:</span>
                    <div className="d-flex justify-content-center">
                      <span className="share-button">
                        <FaFacebookSquare />
                      </span>
                      <span className="share-button">
                        <FaTwitterSquare />
                      </span>
                      <span className="share-button">
                        <FaWhatsapp />
                      </span>
                      <span className="share-button">
                        <FaInstagram />
                      </span>
                    </div>
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

/* <h1>you have completed the quiz</h1>
<p>
  your score is: {score} of {Object.keys(Questions).length}
</p>
<p>thank you</p> */
