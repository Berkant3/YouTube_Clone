import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Header from "./components/Header";
import VideoDetail from "./pages/VideoDetail/index";
import Undefined from "./pages/Undefined";
import Result from "./pages/Result";


const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/watch" element={<VideoDetail />} />
        <Route path="/results" element={<Result />} />
        <Route path="/*" element={<Undefined />} />
         
      </Routes>
    </BrowserRouter>
  );
};

export default App;
