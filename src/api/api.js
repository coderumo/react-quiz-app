const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const response = await fetch(url);  // İlk await fetch isteği için
    const data = await response.json(); // İkinci await yanıtı JSON'a çevirmek için

    return data.results.map((dt) => ({
        ...dt,
        answers: shuffleArray([...dt.incorrect_answers, dt.correct_answer])
    }))
}
