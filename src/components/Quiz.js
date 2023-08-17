import React, { useState, useEffect } from "react";
import questionsData from "./QuestionsData.jsx";
import "../index.css";
import { Button } from "@mui/material";

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState([]);

  // Shuffle function to randomize the order of questions
  const shuffleArray = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const getRandomQuestions = () => {
    // Shuffle the questions array and take the first 5 questions to display
    const shuffledQuestions = shuffleArray(questionsData);
    const firstFiveQuestions = shuffledQuestions.slice(0, 5);
    return firstFiveQuestions;
  };

  useEffect(() => {
    const newRandomQuestions = getRandomQuestions();
    setRandomQuestions(newRandomQuestions);
  }, []);

  const handleOptionChange = (questionId, optionId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    const newRandomQuestions = getRandomQuestions();
    setSelectedAnswers({});
    setShowResults(false);
    setRandomQuestions(newRandomQuestions);
  };

  return (
    <div
      className="quiz-container"
      style={{ backgroundColor: "#F0F8FF", backdropFilter: "blur(20px)" }}
    >
      <img
        className="p-2"
        src="https://cdn-icons-png.flaticon.com/512/807/807281.png"
        width="80px"
        height="80px"
        alt="img3"
      />
      {randomQuestions.map((question) => (
        <div className="question-container" key={question.id}>
          <div className="question">{question.text}</div>
          <div className="options">
            {question.options.map((option) => (
              <label
                key={option.id}
                className={`option ${
                  showResults &&
                  option.id === question.correctAnswerId &&
                  "correct"
                } ${
                  showResults &&
                  option.id === selectedAnswers[question.id] &&
                  option.id !== question.correctAnswerId &&
                  "incorrect"
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={selectedAnswers[question.id] === option.id}
                  onChange={() => handleOptionChange(question.id, option.id)}
                />
                {option.text}
              </label>
            ))}
          </div>
          {showResults && (
            <div className="answer-explanation">
              {selectedAnswers[question.id] !== question.correctAnswerId && (
                <div className="explanation incorrect-answer">
                  The correct answer is:{" "}
                  {
                    question.options.find(
                      (option) => option.id === question.correctAnswerId
                    ).text
                  }
                </div>
              )}
              <div className="explanation correct-answer">
                Explanation: {question.explanation}
              </div>
            </div>
          )}
        </div>
      ))}
      <div className="button-container">
        {!showResults && (
          <Button
            variant="contained"
            onClick={handleSubmit}
            disabled={!Object.keys(selectedAnswers).length}
          >
            Submit
          </Button>
        )}
        {showResults && (
          <Button variant="contained" onClick={handleReset}>
            Restart Quiz
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;

