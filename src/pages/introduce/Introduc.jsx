import React, { useState } from 'react';
import './Introduce.css';
import Dropdown from '../../components/dropdown/Dropdown';
import logo from '../../images/logo3.png';
import { useNavigate } from 'react-router-dom';

const Introduc = () => { 
    const difficulty = ["easy", "medium", "hard"];
    const [difficultyChange, setDifficultyChange] = useState('');
    const navigate = useNavigate();
    const TOTAL_QUESTIONS = 10;
    
    const startQuiz = () => {
      if (difficultyChange && difficultyChange !== "Lütfen zorluk düzeyi seçin") {
        navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`);
      }
    };

    return (
      <div className='introduce'>
        <div className="introduce-container">
          <img src={logo} alt="Logo" />
          <Dropdown data={difficulty} setDifficultyChange={setDifficultyChange} difficultyChange={difficultyChange} />
          <p className='p'>Her soru 30 saniyedir</p>
          <div 
            onClick={startQuiz} 
            className={`introduce-btn ${!difficultyChange || difficultyChange === "Lütfen zorluk düzeyi seçin" ? 'disabled' : ''}`}
          >
            Quiz'e başla
          </div>
        </div>
      </div>
    );
};

export default Introduc;
