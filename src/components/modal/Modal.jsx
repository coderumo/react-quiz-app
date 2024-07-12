import React from 'react';
import './Modal.css';
import '../../style/main.css';

const Modal = ({ score, incorrectAnswers, unansweredCount, totalTimeUsed }) => {
  const totalQuestions = 10;
  const correctAnswers = totalQuestions - incorrectAnswers.length - unansweredCount;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes} dakika ${seconds} saniye`;
  };

  return (
    <>
      <div className='modal-overlay'></div>
      <div className='modal'>
        <div className='modal-title'>Skor: {score}</div>
        <div className='summary'>
          <p><strong>Toplam Soru Sayısı:</strong> {totalQuestions}</p>
          <p><strong>Doğru Cevap Sayısı:</strong> {correctAnswers}</p>
          <p><strong>Yanlış Cevap Sayısı:</strong> {incorrectAnswers.length}</p>
          <p><strong>Boş Bırakılan Soru Sayısı:</strong> {unansweredCount}</p>
          <p><strong>Toplam Kullanılan Süre:</strong> {formatTime(totalTimeUsed)}</p>
        </div>
        {incorrectAnswers.length === 0 ? (
          <div className='congratulations'>
            <h2>Tebrikler! Hiç hata yapmadınız!</h2>
          </div>
        ) : (
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
        )}
        <div className='modal-footer'>
          <div onClick={() => window.location = "/"} className='modal-btn'>Yeniden Başla</div>
        </div>
      </div>
    </>
  );
};

export default Modal;