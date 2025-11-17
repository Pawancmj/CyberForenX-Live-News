import React from "react";
import "./LiveBroadcast.css";

function LiveBroadcast() {
  const videos = [
    {
      title: "Live World News",
      link: "https://www.youtube.com/embed/Nq2wYlWFucg",
    },
    {
      title: "Breaking Headlines",
      link: "https://www.youtube.com/embed/Zk11vI-7czE",
    },
    {
      title: "Sports Live Now",
      link: "https://www.youtube.com/embed/21X5lGlDOfg",
    },
  ];

  return (
    <div className="live">
      <h2>🔴 Live Broadcast</h2>

      {/* 🎥 Main Live Video */}
      <div className="main-video">
        <iframe
          src={videos[0].link}
          title={videos[0].title}
          allowFullScreen
        ></iframe>
        <h3>{videos[0].title}</h3>
      </div>

      {/* 🎬 Extra Suggested Videos */}
      <div className="video-grid">
        {videos.slice(1).map((vid, i) => (
          <div className="video-card" key={i}>
            <iframe src={vid.link} title={vid.title} allowFullScreen></iframe>
            <p>{vid.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LiveBroadcast;

