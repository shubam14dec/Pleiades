import { Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './components/Events';
import Home from './components/Home';
import Competitions from './components/Competitions';
import Competiton_final from './components/TechHori';
import RegisterEvent from './components/RegisterEvent';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
        <Route path='/competition' element={<Competitions/>}></Route>
        <Route path='/competition/event1' element={<RegisterEvent/>}></Route>

      </Routes>
     
    </div>
  );
}

export default App;
