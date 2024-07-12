import React, { useEffect, useState } from 'react';
import './QuestionCard.css';

const QuestionCard = ({ questionsData, score, setScore, count, setCount, modal, setModal, setIncorrectAnswers }) => {
  const [timer, setTimer] = useState(30);

  const approvedChoice = (e) => {
    const selectedAnswer = e.currentTarget.value;
    const checkAnswer = selectedAnswer === questionsData[count]?.correct_answer;
    
    if (checkAnswer) {
      setScore(score + 100);
    } else {
      setIncorrectAnswers(prev => [
        ...prev,
        {
          question: questionsData[count]?.question,
          selectedAnswer,
          correctAnswer: questionsData[count]?.correct_answer
        }
      ]);
    }

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
      } else if (timer === 0 && count < 9) {
        setCount(count + 1);
        setTimer(30);
      } else if (count >= 9) {
        setModal(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, count]);


  return (
    
    <div className='questionCard'>
      <div className='questionCard-timer'>{timer}</div>
      <div className='questionCard-title'>{count + 1}/10 - {questionsData[count]?.question}</div>
      {
        questionsData[count]?.answers?.map((answer, index) => (
          <button className='button' onClick={approvedChoice} key={index} value={answer}>{answer}</button>
        ))
      }
    </div>
  );
  
};

export default QuestionCard;
