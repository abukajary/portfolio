import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import WorkEducationList from "./components/WorkEducationList";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";
import { Home } from "./components/Home";

function App() {
  return (
    <Router>
      <div className="max-w-max md:max-w-6xl md:mx-auto p-4 md:px-36 flex flex-col gap-10">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/workEducationList" element={<WorkEducationList />} />
        </Routes>
        <Contactme />
      </div>
    </Router>
  );
}

export default App;
