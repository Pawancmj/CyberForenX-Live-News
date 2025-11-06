import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="contact"
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
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "30px" : "50px",
          textAlign: isMobile ? "center" : "left",
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
              color: "#38bdf8",
              marginBottom: "20px",
            }}
          >
            Get in Touch with CyberForenX Live News
          </h1>
          <p style={{ fontSize: "1.1rem", marginBottom: "10px" }}>
            We’re always open to hearing from our readers, partners, and the media.
          </p>
          <p
            style={{
              color: "#cbd5e1",
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
              backgroundColor: "rgba(15, 23, 42, 0.8)",
              padding: "20px",
              borderRadius: "12px",
              lineHeight: "1.8",
              fontSize: "1rem",
              color: "#e2e8f0",
            }}
          >
            <h3
              style={{
                color: "#38bdf8",
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
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                style={{ color: "#ff0000" }}
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                style={{ color: "#1877f2" }}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                style={{ color: "#1da1f2" }}
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                style={{ color: "#e1306c" }}
              >
                <FaInstagram />
              </a>
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
          <div
            style={{
              display: "flex",
              gap: "15px",
              flexWrap: "wrap",
            }}
          >
            <input type="text" placeholder="First Name" style={inputStyle} required />
            <input type="text" placeholder="Last Name" style={inputStyle} required />
          </div>
          <input type="email" placeholder="Email *" style={inputStyle} required />
          <textarea
            placeholder="Message"
            rows="5"
            style={{ ...inputStyle, resize: "none" }}
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#38bdf8",
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

const inputStyle = {
  flex: 1,
  minWidth: "47%",
  padding: "12px 15px",
  borderRadius: "8px",
  border: "1px solid #475569",
  backgroundColor: "#0f172a",
  color: "white",
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
};
