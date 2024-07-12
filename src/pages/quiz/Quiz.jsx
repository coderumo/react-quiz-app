import React, { useEffect, useState } from 'react';
import './Quiz.css';
import * as api from '../../api/api';
import { useParams } from 'react-router-dom';
import QuestionCard from '../../components/questionCard/QuestionCard';
import Modal from '../../components/modal/Modal';

const Quiz = () => {
  const { difficulty, amount } = useParams();
  const [questionsData, setQuestionsData] = useState([]);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [modal, setModal] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await api.fetchQuizData(difficulty, amount);
      setQuestionsData(data);
      console.log('Gelen sorular:', data);
    };
    getData();
  }, [difficulty, amount]);

  return (
    <div className='quiz'>
      {
        modal ? <Modal score={score} incorrectAnswers={incorrectAnswers}/> : 
        <QuestionCard
          questionsData={questionsData}
          score={score}
          setScore={setScore}
          count={count}
          setCount={setCount}
          modal={modal}
          setModal={setModal}
          setIncorrectAnswers={setIncorrectAnswers}
        />
      }
    </div>
  );
};

export default Quiz;
