import React from "react"
import BeachMP4 from "../images/beach.mp4"
import BeachWEBM from "../images/beach.webm"

export default () => (
  <div
    style={{
      backgroundColor: 'black',
    }}>
    <video
      autoPlay
      playsInline
      muted
      loop
      style={{
        opacity: 0.8,
        width: "100%"
      }}>
      <source src={BeachMP4} type="video/mp4" />
      <source src={BeachWEBM} type="video/webm" />
    </video>
  </div>
)