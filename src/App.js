import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Introduc from './pages/introduce/Introduc';
import Quiz from './pages/quiz/Quiz';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Introduc/>}/>
          <Route path='/quiz/:difficulty/:amount' element={<Quiz/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
