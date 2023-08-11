import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Galery from './components/pages/Galery';
import About from './components/pages/About';
import Feedbacks from './components/pages/Feedbacks';
import Footer from './components/layout/Footer';


function App() {
  return (
    <Router>
      <Navbar></Navbar>
      
      <Routes>
        
        <Route path='/Projeto-tiago' exact element={<Home></Home>}></Route>
        <Route path='/about' exact element={<About></About>}></Route>
        <Route path='/galery' exact element={<Galery></Galery>}></Route>
        <Route path='/feedbacks' exact element={<Feedbacks></Feedbacks>}></Route>
        <Route path='/contact' exact element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
