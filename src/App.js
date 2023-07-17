import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import "./index.css";

function App() {
  const [currentPage, setCurrectPage] = React.useState("/");
  const location = useLocation();

  React.useEffect(() => {
    setCurrectPage(location.pathname);
  }, [location]);

  return (
    <div className={`container vh-100 ${currentPage === "/" ? "home-page" : "signUp-page"}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
