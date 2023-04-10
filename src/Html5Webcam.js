import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const Html5Webcam = (props) => {
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  return (
    <Camera
      onTakePhoto={(dataUri) => {
        handleTakePhoto(dataUri);
      }}
    />
  );
};

export default Html5Webcam;
