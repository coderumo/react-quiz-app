import React, { useEffect } from 'react';
import './Dropdown.css';

const Dropdown = ({ data, setDifficultyChange, difficultyChange }) => {
  useEffect(() => {
    if (difficultyChange && difficultyChange !== "Lütfen zorluk düzeyi seçin") {
      console.log(`Seçilen zorluk derecesi: ${difficultyChange}`);
    }
  }, [difficultyChange]);

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
  );
};

export default Dropdown;
