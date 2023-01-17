import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Errorpage from "./components/pages/Errorpage";

import "./components/layout/layout.css"

import ViewStudents from './components/pages/ViewStudents';
import StdDetail from './components/pages/StdDetail';
import StdCreate from './components/pages/StdCreate';
import StdEdit from './components/pages/StdEdit';


const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />

            <Route path="/viewStudents" exact element={<ViewStudents />} />
            {/* <Route path="/students/add" exact element={<AddStudent />} /> */}
            <Route path='/student/create' element={<StdCreate />} />

          <Route path='/student/detail/:stdid' element={<StdDetail />} />
          <Route path='/student/edit/:stdid' element={<StdEdit />} />

            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  )
}

export default App