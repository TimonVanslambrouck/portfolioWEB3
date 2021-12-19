import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Contact from './Contact';

function App() {
  
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
