import { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Themes";

import Navbar from "./components/Navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Body = styled.div`
  width: 100%;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.bg};

`;

const Wrapper1 = styled.div`
  background: rgb(0, 48, 102);
  background: linear-gradient(
    45deg,
    rgba(0, 48, 102, 1) 0%,
    rgba(8, 20, 68, 1) 14%,
    rgba(10, 19, 52, 1) 29%,
    rgba(10, 16, 38, 1) 47%,
    rgba(11, 15, 32, 1) 61%,
    rgba(15, 19, 33, 1) 81%,
    rgba(7, 8, 14, 1) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  margin-top: -60px;
  padding-top: 60px;
  position: relative;
  z-index: 10;
`;

const Wrapper2 = styled.div`
  background: rgb(0, 48, 102);
  background: linear-gradient(
    45deg,
    rgba(0, 48, 102, 1) 0%,
    rgba(8, 20, 68, 1) 14%,
    rgba(10, 19, 52, 1) 29%,
    rgba(10, 16, 38, 1) 47%,
    rgba(11, 15, 32, 1) 61%,
    rgba(15, 19, 33, 1) 81%,
    rgba(7, 8, 14, 1) 100%
  );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper1>
            <Skills />
            <Experience />
          </Wrapper1>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper2>
            <Education />
            <Contact />
          <Footer />
          </Wrapper2>
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
      <ToastContainer />
    </ThemeProvider>
  );
}

export default App;
