import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Redirect } from "./pages/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="video-chamada/:id" element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
