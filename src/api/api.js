import quizData from '../questionData.json'; // Adjust the path as necessary

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount) => {
  const data = quizData[difficulty].slice(0, amount);
  return data.map((dt) => ({
    ...dt,
    answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
  }));
};

