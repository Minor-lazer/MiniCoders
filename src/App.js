import logo from './logo.svg';
import './App.css';
import NavbarComp from "./navbar/NavbarComp.js";
import FooterComp from './Footer/FooterComp';
import CarousalComp from './Components/Carousal/CarousalComp.js';
import ReviewSection from './Components/Review/ReviewSection';
import ImageCardSection from './Components/Cards/ImageCardSection';
import Mentors from "../src/Components/Mentors/Mentors.js";
import PythonPage from "./Pages/PythonPage/PythonPage.js";
import AppInventorPage from './Pages/AppInventorPage/AppInventorPage';
import JavaPage from './Pages/JavaPage/JavaPage';
import MathPage from "./Pages/MathPage/MathPage.js";
import ScratchPage from "./Pages/ScratchPage/ScratchPage.js";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <div className="App">
      <NavbarComp/>
       <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route path="/python" element={<PythonPage/>} />
        <Route path="/app" element={<AppInventorPage/>} />
        <Route path="/scratch" element={<ScratchPage/>} />
        <Route path="/math" element={<MathPage/>} />
        <Route path="/java" element={<JavaPage/>} />
        <Route path="/web" element={<PythonPage/>} />
       </Routes>
      <FooterComp/>
    </div>
  );
}

export default App;
