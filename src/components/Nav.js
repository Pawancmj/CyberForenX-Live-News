import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ChevronDown, Globe } from "lucide-react";
import "./Nav.css";

export default function Navbar({ user, onLogout }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  const dropdownRef = useRef(null);

  // 🌓 Theme toggle
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // 🌐 Language persist
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // 🔒 Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🌐 Language translations
  const t = (text) => {
    const translations = {
      en: {
        home: "Home",
        trending: "Trending",
        categories: "Categories",
        about: "About",
        contact: "Contact",
        login: "Login",
        signup: "Sign Up",
        logout: "Logout",
        welcome: "Welcome",
      },
      hi: {
        home: "होम",
        trending: "ट्रेंडिंग",
        categories: "श्रेणियाँ",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        login: "लॉगिन",
        signup: "साइन अप",
        logout: "लॉगआउट",
        welcome: "स्वागत है",
      },
    };
    return translations[language][text] || text;
  };

  const categories = [
    { name: language === "hi" ? "राष्ट्रीय" : "National", path: "/national" },
    { name: language === "hi" ? "अंतरराष्ट्रीय" : "International", path: "/international" },
    { name: language === "hi" ? "राजनीति" : "Politics", path: "/politics" },
    { name: language === "hi" ? "खेल" : "Sports", path: "/sports" },
    { name: language === "hi" ? "मनोरंजन" : "Entertainment", path: "/entertainment" },
    { name: language === "hi" ? "प्रौद्योगिकी" : "Technology", path: "/technology" },
    { name: language === "hi" ? "व्यापार" : "Business", path: "/business" },
    { name: language === "hi" ? "स्वास्थ्य" : "Health", path: "/health" },
    { name: language === "hi" ? "पर्यावरण" : "Environment", path: "/environment" },
    { name: language === "hi" ? "जीवनशैली" : "Lifestyle", path: "/lifestyle" },
  ];

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        CyberForenX
      </div>

      {/* 🔗 Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>
          {t("home")}
        </Link>
        <Link to="/trending" onClick={() => setMenuOpen(false)}>
          {t("trending")}
        </Link>

        {/* 🗂️ Categories Dropdown */}
        <div
          className={`dropdown ${dropdownOpen ? "open" : ""}`}
          ref={dropdownRef}
          onMouseEnter={() => window.innerWidth > 768 && setDropdownOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setDropdownOpen(false)}
        >
          <button
            className="dropdown-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {t("categories")} <ChevronDown size={16} />
          </button>

          <div className="dropdown-menu" onClick={() => setMenuOpen(false)}>
            {categories.map((cat, i) => (
              <Link key={i} to={cat.path} className="dropdown-link">
                {cat.name}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/about" onClick={() => setMenuOpen(false)}>
          {t("about")}
        </Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>
          {t("contact")}
        </Link>

        {/* 👤 Auth Buttons */}
        <div className="auth-buttons">
          {!user ? (
            <>
              <button
                onClick={() => navigate("/auth?mode=login")}
                className="auth-btn"
              >
                {t("login")}
              </button>
              <button
                onClick={() => navigate("/auth?mode=signup")}
                className="auth-btn signup"
              >
                {t("signup")}
              </button>
            </>
          ) : (
            <div className="logged-in">
              <span className="username">
                {t("welcome")}, {user.name}
              </span>
              <button onClick={onLogout} className="auth-btn logout">
                {t("logout")}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 🌙☀️ Theme + Language + Hamburger */}
      <div className="nav-icons">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>

        {/* 🌐 Language Switcher */}
        <div className="language-switcher">
          <Globe size={18} />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="lang-dropdown"
          >
            <option value="en">EN</option>
            <option value="hi">हिंदी</option>
          </select>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  );
}
