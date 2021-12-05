import React from "react";
import "./App.scss";
import QuizMain from "./Component/QuizMain";
import Home from "./Component/Home/Home";

import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Quiz2 from "./Component/Quiz2";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <div className="main my-2">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quizmain" exact element={<QuizMain />} />
            <Route path="/quiz2" exact element={<Quiz2 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
