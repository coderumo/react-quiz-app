import React, {useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import logo from '../../images/logo2.png'
import {useNavigate} from 'react-router-dom'

const Introduc = () => { 
    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState('')
    const navigate = useNavigate()
    const TOTAL_QUESTIONS = 10

    console.log(difficultyChange, "difficultyChange")
    
    const startQuiz = () => {
      if(difficultyChange){
        navigate(`/quiz/${difficultyChange}/${TOTAL_QUESTIONS}`)
      }
    }
    return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src={logo} alt="Logo" />
        <Dropdown data= {difficulty} setDifficultyChange = {setDifficultyChange}/>
            <div onClick={startQuiz} className='introduce-btn'>Quiz e başla</div>
      </div>
    </div>
  )
}

export default Introduc
