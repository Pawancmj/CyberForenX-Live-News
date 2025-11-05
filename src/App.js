import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";

import Navbar from "./components/Nav";
import BreakingTicker from "./components/BreakingTicker";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";

// Pages
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  const sportsArticles = [
    {
      title: "India wins the World Cup!",
      description: "Historic win as India beats Australia by 5 wickets.",
      image: "https://picsum.photos/400/250?7",
      date: "2025-10-20",
      category: "Sports",
      views: 9800,
    },
    {
      title: "Olympics 2025 Highlights",
      description: "Gold for Indian athletes in track events.",
      image: "https://picsum.photos/400/250?8",
      date: "2025-10-25",
      category: "Sports",
      views: 6400,
    },
  ];

  const techArticles = [
    {
      title: "AI Revolution in 2025",
      description: "How AI is transforming industries worldwide.",
      image: "https://picsum.photos/400/250?9",
      date: "2025-10-15",
      category: "Technology",
      views: 7800,
    },
    {
      title: "Quantum Computing Breakthrough",
      description: "Tech giants race for next-gen processors.",
      image: "https://picsum.photos/400/250?10",
      date: "2025-10-28",
      category: "Technology",
      views: 8700,
    },
  ];

  const allArticles = [...sportsArticles, ...techArticles];

  return (
    <Router>
      <div className="app">
        <Navbar />
        <BreakingTicker />

        <Routes>
          {/* ===== Homepage ===== */}
          <Route path="/" element={<Home articles={allArticles} />} />

          {/* ===== Category Pages ===== */}
          <Route
            path="/sports"
            element={<CategoryPage title="Sports" articles={sportsArticles} />}
          />
          <Route
            path="/technology"
            element={<CategoryPage title="Technology" articles={techArticles} />}
          />

          {/* ===== Other Pages ===== */}
          <Route path="/trending" element={<Trending />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

