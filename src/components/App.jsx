import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  var questionName = 0;
  return (
    <div className="app">
      Trivia!
      <Question question="Question Goes Here" />
    </div>
  );
}

function Question(props) {
  return <div>{props.question}</div>;
}

export default App;
