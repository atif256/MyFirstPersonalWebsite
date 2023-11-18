import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,} from 'react-router-dom';


import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js';
import NoMatch from './NoMatch.js';
import Resume from './Resume.js';


export default function App() {
  return (
<>
<Router>

<nav id ="header" style={{ margin: 10 }}>

    {/* testing */}

<div className="headerlink1">
    <Link to="/" >
    <b>Home</b>
    </Link>
    <Link to="/about" >
    <b>About</b>
    </Link>
    <Link to="/contact" >
    <b>Contact</b>
    </Link>
    <Link to="/resume" >
    <b>Resume</b>
    </Link>
  </div>
       
    

</nav>

<Routes>
  <Route path="/" element={ <Home/> } />
  <Route path="/about" element={ <About/> } />
  <Route path="/contact" element={ <Contact/> } />
  <Route path="/resume" element={ <Resume/> } />
  <Route path="*" element={<NoMatch />} />
</Routes>

</Router>

<footer className="footer">
          <div className="footer-content">
            <a href="https://www.linkedin.com/in/muhdatif25/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/atif256" target="_blank" rel="noopener noreferrer">
              Github
            </a>
            <a href="mailto:atifkunn@gmail.com">Email</a>
          </div>
</footer>
</>
    
  );
}

