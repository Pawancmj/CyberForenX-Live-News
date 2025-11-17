import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact({ darkMode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const bgColor = darkMode ? "rgba(15, 23, 42, 0.9)" : "rgba(255, 255, 255, 0.9)";
  const cardBg = darkMode ? "rgba(30, 41, 59, 0.9)" : "rgba(245, 245, 245, 0.9)";
  const textColor = darkMode ? "#fff" : "#000";
  const headingColor = darkMode ? "#38bdf8" : "#007bff";
  const inputBg = darkMode ? "#0f172a" : "#f1f5f9";
  const inputText = darkMode ? "#fff" : "#000";
  const borderColor = darkMode ? "#475569" : "#ccc";

  return (
    <section
      id="contact"
      style={{
        minHeight: "100vh",
        paddingTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        padding: "40px 15px",
        backgroundColor: bgColor,
        color: textColor,
        transition: "all 0.4s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          backgroundColor: cardBg,
          borderRadius: "20px",
          padding: isMobile ? "25px 20px" : "50px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "30px" : "50px",
          textAlign: isMobile ? "center" : "left",
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        {/* LEFT SIDE */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1
            style={{
              fontSize: isMobile ? "2rem" : "2.5rem",
              fontWeight: "700",
              color: headingColor,
              marginBottom: "20px",
              transition: "color 0.4s ease",
            }}
          >
            Get in Touch with CyberForenX Live News
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
            We’re always open to hearing from our readers, partners, and the media.
          </p>
          <p
            style={{
              color: darkMode ? "#cbd5e1" : "#333",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
          >
            Whether you have a news tip, media inquiry, partnership proposal, or feedback about our coverage — we’d love to hear from you.
            <br />
            Our editorial and support teams are available 24×7 to respond to your queries. Please fill out the form below or reach out to us via our official channels.
          </p>

          {/* Contact Info Box */}
          <div
            style={{
              backgroundColor: darkMode ? "#1e293b" : "#f8fafc",
              padding: "20px",
              borderRadius: "12px",
              lineHeight: "1.8",
              fontSize: "1rem",
              color: textColor,
              transition: "background-color 0.4s ease, color 0.4s ease",
            }}
          >
            <h3
              style={{
                color: headingColor,
                fontSize: "1.3rem",
                marginBottom: "10px",
              }}
            >
              Contact Information
            </h3>
            <p>📍 <strong>Office:</strong> CyberForenX Headquarters, Mumbai, India</p>
            <p>📞 <strong>Newsroom:</strong> +91 98765 43210</p>
            <p>✉️ <strong>Email:</strong> contact@cyberforenxnews.com</p>
            <p>🕓 <strong>Hours:</strong> 24×7 News Support</p>

            {/* Social Links */}
            <div
              style={{
                marginTop: "15px",
                display: "flex",
                gap: "15px",
                justifyContent: isMobile ? "center" : "flex-start",
                fontSize: "1.5rem",
              }}
            >
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" style={{ color: "#ff0000" }}><FaYoutube /></a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" style={{ color: "#1877f2" }}><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: "#1da1f2" }}><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" style={{ color: "#e1306c" }}><FaInstagram /></a>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
          }}
        >
          <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
            <input type="text" placeholder="First Name" style={inputStyle(inputBg, inputText, borderColor)} required />
            <input type="text" placeholder="Last Name" style={inputStyle(inputBg, inputText, borderColor)} required />
          </div>
          <input type="email" placeholder="Email *" style={inputStyle(inputBg, inputText, borderColor)} required />
          <textarea placeholder="Message" rows="5" style={{ ...inputStyle(inputBg, inputText, borderColor), resize: "none" }} required></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: headingColor,
              color: "white",
              fontWeight: "600",
              border: "none",
              borderRadius: "8px",
              padding: "12px 0",
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

const inputStyle = (bg, color, border) => ({
  flex: 1,
  minWidth: "47%",
  padding: "12px 15px",
  borderRadius: "8px",
  border: `1px solid ${border}`,
  backgroundColor: bg,
  color,
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "all 0.4s ease",
});
