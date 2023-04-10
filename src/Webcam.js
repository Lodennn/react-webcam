import React from "react";
import Webcam from "react-webcam";

export default () => {
  const [deviceId, setDeviceId] = React.useState({});
  const [devices, setDevices] = React.useState([]);

  const handleDevices = React.useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  React.useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  return (
    <>
      {devices.map((device, key) => (
        <div>
          <Webcam
            audio={false}
            videoConstraints={{ deviceId: device.deviceId }}
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
          </Webcam>
          {device.label || `Device ${key + 1}`}
        </div>
      ))}
    </>
  );
};
