import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/HomePage";
import HustlesPage from "./pages/HustlesPage";
import ToolsPage from "./pages/ToolsPage";
import GuidesPage from "./pages/GuidesPage";
import ContactPage from "./pages/ContactPage";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hustles" element={<HustlesPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/guides" element={<GuidesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

