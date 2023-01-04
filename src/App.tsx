import React, { FC } from "react";
import Home from "pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Employees from "pages/Employees";

const App: FC = () => {
  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
