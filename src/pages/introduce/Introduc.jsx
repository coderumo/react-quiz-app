import React, {useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import logo from '../../images/logo2.png'

const Introduc = () => { 
    const difficulty = ["easy", "medium", "hard"]
    const [difficultyChange, setDifficultyChange] = useState('')
    return (
    <div className='introduce'>
      <div className="introduce-container">
        <img src={logo} alt="Logo" />
        <Dropdown data= {difficulty} setDifficultyChange = {setDifficultyChange}/>
            <div className='introduce-btn'>Quiz e başla</div>
      </div>
    </div>
  )
}

export default Introduc
