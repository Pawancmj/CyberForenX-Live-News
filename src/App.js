import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BreakingTicker from "./components/BreakingTicker";
import HeadlinesCarousel from "./components/HeadlinesCarousel";
import CategoryCards from "./components/CategoryCards";
import FeaturedSection from "./components/FeaturedSection";
import LiveBroadcast from "./components/LiveBroadcast";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <BreakingTicker />
      <HeadlinesCarousel />
      <CategoryCards />
      <FeaturedSection />
      <LiveBroadcast />
      <Footer />
    </div>
  );
}

export default App;

