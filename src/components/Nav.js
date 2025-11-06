import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import "./Nav.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const dropdownRef = useRef(null);

  // 🌓 Theme toggle handler
  useEffect(() => {
    document.body.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // 🔒 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const categories = [
  { name: "National", path: "/national" },
  { name: "International", path: "/international" },
  { name: "Politics", path: "/politics" },
  { name: "Sports", path: "/sports" },
  { name: "Entertainment", path: "/entertainment" },
  { name: "Technology", path: "/technology" },
  { name: "Business", path: "/business" },
  { name: "Health", path: "/health" },
  { name: "Environment", path: "/environment" },
  { name: "Lifestyle", path: "/lifestyle" },
  
  

];  

  return (
    <nav className="navbar">
      <div className="logo">CyberForenX</div>

      {/* 🔗 Nav Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/trending" onClick={() => setMenuOpen(false)}>Trending</Link>

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
            Categories <ChevronDown size={16} />
          </button>

          <div className="dropdown-menu" onClick={() => setMenuOpen(false)}>
             
             {categories.map((cat, i) => (
                <Link key={i} to={cat.path} className="dropdown-link">
                 {cat.name}
                </Link>
              ))}
          </div>
        </div>

        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* 🌙☀️ Theme + Hamburger */}
      <div className="nav-icons">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Theme"
        >
          {darkMode ? <Sun /> : <Moon />}
        </button>

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

