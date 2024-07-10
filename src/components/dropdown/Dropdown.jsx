import React from 'react'
import './Dropdown.css'

const Dropdown = ({ data, setDifficultyChange }) => {
  return (
    <div className='dropdown'>
      <select onChange={e => setDifficultyChange(e.target.value)} defaultValue="Lütfen zorluk düzeyi seçin">
        <option value="Lütfen zorluk düzeyi seçin" disabled hidden>
          Lütfen zorluk düzeyi seçin
        </option>
        {data.map((dt, i) => (
          <option key={i} value={dt}>{dt}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
