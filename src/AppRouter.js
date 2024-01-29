import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import DataTable from "./components/DataTable";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/table" element={<DataTable />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
