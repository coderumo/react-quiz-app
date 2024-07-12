import React from 'react';
import './Modal.css';

const Modal = ({ score, incorrectAnswers }) => {
  return (
    <>
      <div className='modal-overlay'></div>
      <div className='modal'>
        <div className='modal-title'>Skor: {score}</div>
        <div className='incorrect-answers'>
          <h2>Yanlış Cevaplar</h2>
          <ul>
            {incorrectAnswers.map((item, index) => (
              <li key={index} className='incorrect-answer-item'>
                <strong className='question'>Soru:</strong> {item.question} <br />
                <strong className='incorrect'>Seçilen Cevap:</strong> {item.selectedAnswer} <br />
                <strong className='correct'>Doğru Cevap:</strong> {item.correctAnswer}
              </li>
            ))}
          </ul>
        </div>
        <div className='modal-footer'>
          <div onClick={() => window.location = "/"} className='modal-btn'>Yeniden Başla</div>
        </div>
      </div>
    </>
  );
};

export default Modal;
