import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterTurf from "./pages/RegisterTurf";
import Register from "./pages/Register";
import TurfListingPage from "./pages/turfListingPage";
import TurfDetailPage from "./pages/TurfDetailPage";
import Manager from "./pages/manager";

function App() {
  return (
    <div className=" bg-bg h-max ">
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Register />} />
           <Route path="/registerTurf" element={<RegisterTurf />} />
           <Route path="/turfListing" element={<TurfListingPage />} />
           <Route path="/turf/:turfId" element={<TurfDetailPage />} />
           <Route path="/manager" element={<Manager />} />
        </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
