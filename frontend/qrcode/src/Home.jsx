import React from "react";
import { useState } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button} from "antd";
import "./index.css";
// import Webcam from "react-webcam";
// import { Html5QrcodeScanner } from "html5-qrcode";
import {useNavigate } from "react-router-dom";


function Home() {
  const [src, setsrc] = useState("");
  const [codeText, setcodeText] = useState("");
  //const [scanClicked, setscanClicked] = useState(false);
  // const [size, setSize] = useState("large"); // default is 'middle'
  // const [qrCodeMessage, setQrCodeMessage] = useState("");
  // const webcamRef = useRef(null);
  const navigate = useNavigate()

  let fetchObject = {
    method: "GET",
  };

  const inputHandler = (event) => {
    setcodeText(event.target.value);
  };

  const genrerateCode = async () => {
    try {
      const response = await fetch(`/code?codeText=${codeText}`, fetchObject);
      let data;
      console.log("response is here ======>>>>", response);
      if (response.ok) {
        alert("all godd");
        data = await response.json();
        console.log(data);
        let url = data.data;
        setsrc(url);
        setcodeText("");
      } else {
        alert("not good");
      }
    } catch (error) {
      return console.log(error.message);
    }
  };

  const downloadQRCode = () => {
    const link = document.createElement("a"); //a new a (anchor) element is created using the document.createElement () method.
    link.download = "QRCode.png"; //The download attribute of the a element is set to "qr-code.png", which specifies the name of the file to be downloaded.
    link.href = src; //The href attribute of the a element is set to the src of the image, which is the URL of the R code image generated.
    link.click(); //click() method is called on the link element to initiate the download of the image
    setsrc("");
  };

  const handleScanClicked = ()=>{
    
    navigate('/scan')
  }



  return (
    <>
      <div className="outer">
        <div className="inner">
          <h1 className="text" style={{color : "white" , marginBottom : "70px"}}>Get a QR code Now for your Website!</h1>
          <div className="input_div">
            <input
              type="text"
              placeholder="Enter Your Link"
              value={codeText}
              onChange={inputHandler}
            />
          </div>

          {src && <div style={{marginBottom : "20px"}}><img src={src} alt="QR code" width="150" height="150" /></div>}
          <div className="genratebtn">
            <button onClick={genrerateCode}>generate QR code</button>
            {/* {scanClicked && <Webcam audio={false} ref={webcamRef} />} */}
            {/* <button onClick={captureImage}>Capture Image</button> */}
            <button onClick={handleScanClicked}>read QR code</button>
          </div>
          <Button
            type="primary"
            icon={<DownloadOutlined />}
            size="large"
            onClick={downloadQRCode}
            style={{ marginTop: "20px" }}
          >
            Download
          </Button>
        </div>
        {/* <div id="reader"></div>
        <div>QR Code Message: {qrCodeMessage}</div> */}
      </div>
    </>
  );
}

export default Home;
