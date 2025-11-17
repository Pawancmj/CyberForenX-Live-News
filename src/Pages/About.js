import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About({ darkMode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 🎨 Theme colors based on mode
  const bgColor = darkMode ? "rgba(15, 23, 42, 0.9)" : "#f9fafb";
  const cardBg = darkMode ? "rgba(30, 41, 59, 0.9)" : "white";
  const textColor = darkMode ? "#e2e8f0" : "#1e293b";
  const titleColor = darkMode ? "#38bdf8" : "#0284c7";

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor,
        color: textColor,
        overflowX: "hidden",
        padding: "40px 15px",
        transition: "background-color 0.4s ease, color 0.4s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          backgroundColor: cardBg,
          borderRadius: "20px",
          padding: isMobile ? "25px 20px" : "50px",
          boxShadow: darkMode
            ? "0 8px 20px rgba(0,0,0,0.4)"
            : "0 4px 12px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          textAlign: isMobile ? "center" : "left",
          transition: "background-color 0.4s ease",
        }}
      >
        {/* TITLE */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: isMobile ? "2rem" : "2.6rem",
            color: titleColor,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          About CyberForenX Live News
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          <strong>CyberForenX Live News</strong> is your trusted destination for
          the latest technology, cybersecurity, and innovation updates. Our
          mission is to make complex tech topics accessible, insightful, and
          engaging for everyone — from IT professionals to curious readers.
        </motion.p>

        {/* MISSION SECTION */}
        <Section
          title="🌍 Our Mission"
          text="At CyberForenX, our goal is to empower readers with authentic and timely information. We highlight stories that matter — from AI breakthroughs and data privacy concerns to startups shaping the digital world."
          color={titleColor}
          bg={darkMode ? "rgba(15,23,42,0.8)" : "#f1f5f9"}
        />

        {/* VISION SECTION */}
        <Section
          title="💡 Our Vision"
          text="We envision a future where information is unbiased and accessible to all. CyberForenX aims to connect readers with the trends that define our digital world."
          color={titleColor}
          bg={darkMode ? "rgba(15,23,42,0.8)" : "#f1f5f9"}
        />

        {/* EDITORIAL VALUES */}
        <Section
          title="🧭 Editorial Integrity"
          text="Our content is driven by accuracy, independence, and responsibility. We fact-check every report and follow global journalism ethics to keep readers informed, not misled."
          color={titleColor}
          bg={darkMode ? "rgba(15,23,42,0.8)" : "#f1f5f9"}
        />

        {/* TEAM */}
        <Section
          title="👥 Our Team"
          text="Behind CyberForenX is a passionate group of journalists, tech analysts, and digital creators — united by a common goal: to report technology that impacts lives."
          color={titleColor}
          bg={darkMode ? "rgba(15,23,42,0.8)" : "#f1f5f9"}
        />

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            textAlign: "center",
            color: darkMode ? "#94a3b8" : "#475569",
            fontSize: "0.95rem",
          }}
        >
          © {new Date().getFullYear()} CyberForenX Live News — Empowering the
          Digital World.
        </motion.p>
      </div>
    </section>
  );
}

// ✅ Reusable section component
const Section = ({ title, text, color, bg }) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    style={{
      backgroundColor: bg,
      padding: "25px",
      borderRadius: "12px",
      transition: "background-color 0.4s ease",
    }}
  >
    <h2 style={{ color, marginBottom: "10px", fontSize: "1.4rem" }}>{title}</h2>
    <p style={{ lineHeight: "1.7" }}>{text}</p>
  </motion.div>
);
