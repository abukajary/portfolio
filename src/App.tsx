import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import WorkEducationList from "./components/WorkEducationList";
import Projects from "./components/Projects";
import Contactme from "./components/Contactme";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-4 px-36 flex flex-col gap-10">
      <Header />
      <About />
      <WorkEducationList />
      <Projects />
      <Contactme />
    </div>
  );
}

export default App;
