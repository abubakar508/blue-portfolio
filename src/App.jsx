import React from "react";

import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Header } from "./Pages/Header/Header";
import { Display } from "./Pages/Display";
import { About } from "./Pages/About/About";
import { Skills } from "./Pages/Skills/Skills";
import { Contact } from "./Pages/Contact/Contact";
import { Clients } from "./Pages/Clients/Clients";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Services } from "./Pages/Services/Services";
import { Skillrank } from "./Pages/Skills/Skillrank/Skillrank";
import { Design } from "./Pages/Services/Design/Design";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Clients" element={<Clients/>}/>
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Skillrank" element={<Skillrank/>}/>
          <Route path="/Design" element={<Design/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
