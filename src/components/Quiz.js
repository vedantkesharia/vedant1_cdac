import React, { useState } from 'react';
import questionsData from './QuestionsData.jsx';
import '../index.css';
import { Button } from '@mui/material';

const Quiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

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
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="quiz-container" style={{backgroundColor: '#F0F8FF', backdropFilter: 'blur(20px)'}}>
      <img className="p-2" src="https://cdn-icons-png.flaticon.com/512/807/807281.png" width="80px" height="80px" alt="img3" />
      {questionsData.map((question) => (
        <div className="question-container"  key={question.id}>
          <div className="question">{question.text}</div>
          <div className="options">
            {question.options.map((option) => (
              <label
                key={option.id}
                className={`option ${
                  showResults &&
                  option.id === question.correctAnswerId &&
                  'correct'
                } ${
                  showResults &&
                  option.id === selectedAnswers[question.id] &&
                  option.id !== question.correctAnswerId &&
                  'incorrect'
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
                  The correct answer is:{' '}
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
          <Button  variant="contained" onClick={handleSubmit} disabled={!Object.keys(selectedAnswers).length}>
            Submit
          </Button>
        )}
        {showResults && (
          <Button variant="contained" onClick={handleReset}>
            Reset
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;