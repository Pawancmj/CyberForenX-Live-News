import React from "react";
import "./LiveBroadcast.css";

function LiveBroadcast() {
  return (
    <div className="live">
      <h2>🔴 Live Broadcast</h2>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/live_stream?channel=UC4R8DWoMoI7CAwX8_LjQHig"
        title="Live News"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default LiveBroadcast;
