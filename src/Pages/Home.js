import React from "react";


import HeadlinesCarousel from "../components/HeadlinesCarousel";
import NewsList from "../components/NewsList";
import CategoryCards from "../components/CategoryCards";
import FeaturedSection from "../components/FeaturedSection";
import LiveBroadcast from "../components/LiveBroadcast";

export default function Home({ articles = [] }) {
  
  return (
    <div className="home-page">
      
      {/* 📰 Headlines Carousel */}
      <section className="home-section">
        <HeadlinesCarousel />
      </section>

      {/* 📄 News List */}
      <section className="home-section">
        <NewsList articles={articles} />
      </section>

      {/* 🗂️ Category Cards */}
      <section className="home-section">
        <CategoryCards />
      </section>

      {/* 🌟 Featured Section */}
      <section className="home-section">
        <FeaturedSection />
      </section>

    

      {/* 📺 Live Broadcast */}
      <section className="home-section">
        <LiveBroadcast />
      </section>
    </div>
  );
}




