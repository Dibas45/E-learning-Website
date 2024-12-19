import React, { useState } from 'react';

const MockTest = () => {
  const questions = [
    {
      id: 1,
      question: 'What is React?',
      options: ['Library', 'Framework'],
      answer: 'Library',
    },
    {
      id: 2,
      question: 'What is Redux?',
      options: ['State Manager', 'Database'],
      answer: 'State Manager',
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {!showResult ? (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-blue-600">Mock Test</h1>
          <p className="text-lg font-medium text-gray-800 mb-6">
            {questions[currentQuestion].question}
          </p>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-green-600 mb-4">Test Complete!</h1>
          <p className="text-lg font-medium text-gray-800 mb-6">
            Your Score: <span className="text-blue-600">{score}</span>/{questions.length}
          </p>
          <button
            onClick={restartTest}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700"
          >
            Restart Test
          </button>
        </div>
      )}
    </div>
  );
};

export default MockTest;
