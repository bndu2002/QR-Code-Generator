import React from "react";
import QrReader from "react-qr-scanner";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Scan() {
  // const readCode = async () => {
  //   try {
  //     const webcam = webcamRef.current;
  //     if (!webcam) {
  //       console.log("returnes");
  //       return; // Webcam not yet mounted, exit the function
  //     }
  //     console.log("after");
  //     console.log(webcam);
  //     const canvas = webcam.getCanvas();
  //     console.log("canvas", canvas);
  //     const imageDataURL = canvas.toDataURL();
  //     const response = await fetch("/read-qr-code", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ imageDataURL }),
  //     });

  //     if (response.ok) {
  //       alert("true");
  //     } else {
  //       alert("false");
  //     }

  //     // const html5QrcodeScanner = new Html5QrcodeScanner(
  //     //   'reader',
  //     //   { fps: 1000, qrbox: 20000 },
  //     //     /* verbose= */ false
  //     // );

  //     // html5QrcodeScanner.render((qrCodeMessage) => {
  //     //   setQrCodeMessage(qrCodeMessage);
  //     //   html5QrcodeScanner.stop();
  //     // })
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // if (scanClicked) {
  //   console.log("from if");
  //   readCode();
  // }

  // const handleScanClick = () => {
  //   setscanClicked(true);
  // };

  const [qrCode, setQrCode] = useState("");
  const qrRef = useRef(null);
  const navigate = useNavigate();

  //triend to call backedn api with sending qrCode in body or query but failed
  // const readCode = async () => {
  //   try {
  //     const response = await fetch(`/read-qr-code?qrCode=${qrCode}`, {
  //       method: "POST",
  //     });

  //     console.log(response.body);
  //     if (response.ok) {
  //       alert("true");
  //     } else {
  //       alert("false");
  //     }
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };

  // result -> object that contains information about the scanned QR code , can name anything
  const handleScan = (result) => {
    if (result) {
      console.log(result.text);
      let text = result.text;
      setQrCode(text);
      if (qrRef.current) {
        qrRef.current.stop();
      }
    }
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handleError = (error) => {
    console.error(error);
  };
  return (
    <div className="scan">
      <div className="scanned_data">
        {qrCode ? (
          <p>{qrCode}</p>
        ) : (
          <QrReader
            delay={300}
            onError={handleError}
            onScan={handleScan}
            style={{ width: "100%" }}
            facingMode="user"
            ref={qrRef}
          />
        )}
        <button className="back_btn" onClick={handleGoBack} style={{marginTop:"40px"}}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default Scan;
