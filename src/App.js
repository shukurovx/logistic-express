
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={ <Home /> } />
      <Route path={'/about'} element={ <About /> } />
      <Route path={'/services'} element={ <Services /> } />
      <Route path={'/contact'} element={ <Contact /> } />
    </Routes>
  );
}

export default App;
