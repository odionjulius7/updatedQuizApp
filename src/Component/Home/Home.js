import React from "react";
import Spec from "../../img/are-you-a-sp.png";
import "./Home.scss";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home">
      <div style={{ margin: "5rem" }} className="row">
        <div className="home__Img-content">
          <img className="home__img" src={Spec} alt="Spec" />
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-5 col-md-6">
            <div class="home__spec-info">
              <h2>
                <span>Hey Guys,</span>
                <br /> Are you a SPEC?
              </h2>
              <p>Here’s a chance to check just how much of a SPEC you are.</p>
              <Link to="/quizmain" class="home__spec-info--link">
                <span>Take the Quiz</span>Check Your SPEC Status
              </Link>
            </div>
          </div>
          <div class="col-lg-5 col-md-6">
            <div class="home__spec-info">
              <h2>
                <span>Hey Ladies,</span>
                <br /> Do you have a SPEC?
              </h2>
              <p>
                Here’s a chance to check just how much of a SPEC your SPEC is.
              </p>
              <Link to="/quiz2" class="home__spec-info--link">
                <span>Take the Quiz</span>Check the SPEC status of your SPEC
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
