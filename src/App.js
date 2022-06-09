import './App.css';
import Navbar from "./Navbar";
import Registeration from "./Registeration";
import List from './List';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/registeration" element={<Registeration/>}/>
          <Route exact path="/list" element={<List/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
