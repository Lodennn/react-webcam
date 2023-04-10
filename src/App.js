import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Webcam from "react-webcam";
import WebcamComponent from "./Webcam";
import Html5Webcam from "./Html5Webcam";

function App() {
  const videoConstraints = {
    width: 1280,
    height: 720,
    // facingMode: "user",
    facingMode: { exact: "environment" },
  };

  return (
    <div className="App">
      {/* <Webcam
        audio={false}
        height={720}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      >
        {({ getScreenshot }) => (
          <button
            onClick={() => {
              const imageSrc = getScreenshot();
              console.log("imageSrc: ", imageSrc);
            }}
          >
            Capture photo
          </button>
        )}
      </Webcam> */}
      {/* <WebcamComponent /> */}
      <Html5Webcam />
    </div>
  );
}

export default App;
