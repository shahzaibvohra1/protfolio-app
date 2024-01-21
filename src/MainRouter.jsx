import react from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Services from "./components/Services";
import HomePage from "./components/Home";
import Projects from "./components/Projects";
function MainRouter() {
  return (
    <>
      <Layout />
      {
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<ContactMe />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      }
    </>
  );
}

export default MainRouter;
