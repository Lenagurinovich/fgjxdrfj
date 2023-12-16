import cards from './cards.json';
import './App.scss';
import { BrowserRouter as Router, NavLink, Route,Routes} from "react-router-dom";
import Cards from './pages/Cards/Cards';
import Create from './pages/Create/Create';
import Info from './pages/Info/Info';
import { useState } from 'react';

function App() {
  const [arr, setArr] = useState(cards);

  
  return (
    <Router>
      <header>
      <nav>
         <NavLink to="/">Info</NavLink>
         <NavLink to="/cards">Cards</NavLink>
         <NavLink to="/create">Create</NavLink>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Info arr={arr}/>}/>
          <Route path="/cards" element={<Cards arr={arr}/>}/>
          <Route path="/create" element={<Create arr={arr} setArr={setArr}/>}/>
        </Routes>
      </main>
      <footer>

      </footer>
    </Router>
  )
}

export default App
