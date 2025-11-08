import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import "./App.css";

// Components
import Navbar from "./components/Nav";
import BreakingTicker from "./components/BreakingTicker";
import Footer from "./components/Footer";

// Pages
import Home from "./Pages/Home";
import Trending from "./Pages/Trending";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import Article from "./Pages/Article";
import National from "./Pages/National";
import Lifestyle from "./Pages/Lifestyle";
import Environment from "./Pages/Environment";
import Health from "./Pages/Health";
import Business from "./Pages/Business";
import Technology from "./Pages/Technology";
import Entertainment from "./Pages/Entertainment";
import Sports from "./Pages/Sports";
import Politics from "./Pages/Politics";
import International from "./Pages/International";
import Auth from "./Pages/Auth";
import AdminDashboard from "./Pages/Admin/AdminDashboard";
import AddArticle from "./Pages/Admin/AddArticle";
import EditArticle from "./Pages/Admin/EditArticle";
import ManageArticle from "./Pages/Admin/ManageArticle";

import { AuthProvider } from "./context/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  // 🔹 Check user from localStorage when app loads
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  // 🔹 Handle logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
  };

  // 🔹 Demo Articles
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
    <AuthProvider>
      <Router>
        <div className="app">
          {/* 🔹 Navbar shows login/logout depending on user */}
          <Navbar user={user} onLogout={handleLogout} />
          <BreakingTicker />

          <Routes>
            <Route path="/" element={<Home articles={allArticles} />} />
            <Route path="/auth" element={<Auth setUser={setUser} />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/article/:id" element={<Article />} />
            <Route path="/national" element={<National />} />
            <Route path="/international" element={<International />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/business" element={<Business />} />
            <Route path="/health" element={<Health />} />
            <Route path="/environment" element={<Environment />} />
            <Route path="/lifestyle" element={<Lifestyle />} />

            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/add" element={<AddArticle />} />
            <Route path="/admin/edit/:id" element={<EditArticle />} />
            <Route path="/admin/manage" element={<ManageArticle />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
