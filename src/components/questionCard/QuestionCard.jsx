import React, { useEffect, useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ questionsData, score, setScore, count, setCount, modal, setModal, setIncorrectAnswers, unansweredCount, setUnansweredCount, totalTimeUsed, setTotalTimeUsed }) => {
  const [timer, setTimer] = useState(30);
  const [answered, setAnswered] = useState(false); 

  const approvedChoice = (e) => {
    const selectedAnswer = e.currentTarget.value;
    const checkAnswer = selectedAnswer === questionsData[count]?.correct_answer;

    if (checkAnswer) {
      setScore(score + 100);
    } else {
      setIncorrectAnswers((prev) => [
        ...prev,
        {
          question: questionsData[count]?.question,
          selectedAnswer,
          correctAnswer: questionsData[count]?.correct_answer,
        },
      ]);
    }

    setAnswered(true);

    if (count < 9) {
      setCount(count + 1);
      setTimer(30);
    } else {
      setModal(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
        setTotalTimeUsed((prevTime) => prevTime + 1);
      } else if (timer === 0 && count < 9 && !answered) {
        setCount(count + 1);
        setTimer(30);
        setUnansweredCount(unansweredCount + 1);
      } else if (count >= 9) {
        setModal(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, count, answered, unansweredCount, setUnansweredCount]);

  useEffect(() => {
    setAnswered(false);
  }, [count]);

  if (!questionsData || questionsData.length === 0 || !questionsData[count]) {
    return <div>Loading...</div>;
  }

  return (
    <div className='questionCard'>
      <div className='questionCard-timer'>{timer}</div>
      <div className='questionCard-content'>
        <span className='question-number'>{count + 1}</span><span className='total-number'>/10</span> 
        <div className='questionCard-title'>
          {questionsData[count].question}
        </div>
        {questionsData[count].answers.map((answer, index) => (
          <button className='button' onClick={approvedChoice} key={index} value={answer}>
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;