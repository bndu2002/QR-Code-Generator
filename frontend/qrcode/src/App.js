import { Routes, Route } from "react-router-dom";
import Scan from "./Scan";
import Home from "./Home";




function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/scan" element={<Scan />} />
    </Routes>
  </>
}

export default App;
