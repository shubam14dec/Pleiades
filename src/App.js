import { Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './components/Events';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/events' element={<Events/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
