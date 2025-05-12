import { Routes, Route, NavLink } from 'react-router-dom';
import Haqqinda from './Haqqinda';
import Isler from './Isler';
import Elaqe from './Elaqe';
import Main from './Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='menu'>
      <NavLink to="/">
          Esas Sehife
      </NavLink>
      <NavLink to="/Haqqında">
          Haqqinda
      </NavLink>
      <NavLink to="/İş nümunələri">
      Isler
      </NavLink>
      <NavLink to="/Əlaqə məlumatları">
          Elaqe
      </NavLink>
      </div>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/Haqqında" element={<Haqqinda />}></Route>
      <Route path="/İş nümunələri" element={<Isler />}></Route>
      <Route path="/Əlaqə məlumatları" element={<Elaqe />}></Route>
    </Routes>
    </div>
  );
}

export default App;
