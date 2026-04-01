import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingTelegram from "./LandingTelegram";
import Experts from "./Experts";
import ExpertProfile from "./ExpertProfile";
import "./index.css";
import Services from "./Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingTelegram />} />
        <Route path="/experts" element={<Experts />} />
        <Route path="/experts/:slug" element={<ExpertProfile />} />
        <Route path="/services" element={<Services />} />  {/* ← ЦІНИ */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
