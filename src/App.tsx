import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Examples from "./pages/Examples";
import Gallery from "./pages/Gallery";
import Places from "./pages/Places";
import "./scss/main.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/places" element={<Places />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
