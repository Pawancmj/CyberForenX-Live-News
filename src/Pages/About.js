import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        overflowX: "hidden",
        padding: "40px 15px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          backgroundColor: "rgba(30, 41, 59, 0.9)",
          borderRadius: "20px",
          padding: isMobile ? "25px 20px" : "50px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        {/* TITLE */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: isMobile ? "2rem" : "2.6rem",
            color: "#38bdf8",
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
            color: "#cbd5e1",
          }}
        >
          <strong>CyberForenX Live News</strong> is your trusted digital destination for the latest
          technology, cybersecurity, and innovation updates. Our mission is to make complex tech
          topics accessible, insightful, and engaging for everyone — from IT professionals to
          curious readers.
        </motion.p>

        {/* MISSION SECTION */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            padding: "25px",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "#38bdf8", marginBottom: "10px", fontSize: "1.4rem" }}>
            🌍 Our Mission
          </h2>
          <p style={{ color: "#e2e8f0", lineHeight: "1.7" }}>
            At CyberForenX, our goal is to empower readers with authentic and timely information.
            We’re committed to highlighting stories that matter — from AI breakthroughs and data
            privacy concerns to digital transformation and startups shaping the future.
          </p>
        </motion.div>

        {/* VISION SECTION */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            padding: "25px",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "#38bdf8", marginBottom: "10px", fontSize: "1.4rem" }}>
            💡 Our Vision
          </h2>
          <p style={{ color: "#e2e8f0", lineHeight: "1.7" }}>
            We envision a future where information is unbiased, credible, and accessible to all.
            CyberForenX aims to become a global platform where technology meets journalism —
            connecting readers with trends that define our digital world.
          </p>
        </motion.div>

        {/* EDITORIAL VALUES */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            padding: "25px",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ color: "#38bdf8", marginBottom: "10px", fontSize: "1.4rem" }}>
            🧭 Editorial Integrity
          </h2>
          <p style={{ color: "#e2e8f0", lineHeight: "1.7" }}>
            Our content is driven by accuracy, independence, and responsibility. We fact-check every
            report and ensure that our news coverage remains free from bias or external influence.
            CyberForenX follows global journalism ethics to keep readers informed, not misled.
          </p>
        </motion.div>

        {/* TEAM SECTION */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.8)",
            padding: "25px",
            borderRadius: "12px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h2 style={{ color: "#38bdf8", marginBottom: "10px", fontSize: "1.4rem" }}>
            👥 Our Team
          </h2>
          <p style={{ color: "#e2e8f0", lineHeight: "1.7" }}>
            Behind CyberForenX is a passionate group of journalists, tech analysts, and digital
            creators — united by a common goal: to report technology that impacts lives.  
            We believe in innovation, transparency, and storytelling that sparks awareness.
          </p>
        </motion.div>

        {/* FOOTNOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "0.95rem",
            marginTop: "10px",
          }}
        >
          © {new Date().getFullYear()} CyberForenX Live News — Empowering the Digital World.
        </motion.p>
      </div>
    </section>
  );
}

