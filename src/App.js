import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Main from './pages/Main';
import Css from './pages/Css';
import Not from './pages/Not';
import RouterJs from './pages/Router';
import './App.css';
import StateProps from './pages/StateProps';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">HOME</Link>
        <Link to="/css">CSS</Link>
        <Link to="/router" state={{page:100}}>Router</Link>
        <Link to="/state">State&Props</Link>
        <Link to="/git">GitHub Deploy</Link>
      </header>
      <Routes>
          <Route path="/" element={<Main/>}    />
          <Route path="/css" element={<Css/>}    />
          <Route path="/*" element={<Not />}    />
          <Route path="/router" element={<RouterJs />}    />
          <Route path="/state" element={<StateProps />}    />
      </Routes>
    </Router>
  );
  
}



export default App;
