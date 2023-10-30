import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";

export const BASE_PATH = "/";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Not Authenticated Routes */}
        <Route path={`/${BASE_PATH}`} element={<Home />} />
        {/* Authenticated Routes */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
