import React from 'react';
import CarousalComp from '../Components/Carousal/CarousalComp.js';
import ReviewSection from '../Components/Review/ReviewSection.js';
import ImageCardSection from '../Components/Cards/ImageCardSection.js';
import Mentors from "../Components/Mentors/Mentors.js";
import PythonPage from "./PythonPage/PythonPage.js";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function LandingPage() {
  return (
    <>
    <CarousalComp/>
    <ImageCardSection/>
    <Mentors/>
    <ReviewSection/>
    </>

  )
}

export default LandingPage