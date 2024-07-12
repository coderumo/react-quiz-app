import quizData from '../questionData.json'; // Path'in doğru olduğundan emin olun

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const fetchQuizData = async (difficulty, amount) => {
  if (!quizData[difficulty]) {
    throw new Error(`Difficulty level "${difficulty}" not found in data.`);
  }

  const data = quizData[difficulty].slice(0, amount);
  return data.map((dt) => ({
    ...dt,
    answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
  }));
};
