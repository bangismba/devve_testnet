// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./pages/Register";
import Confirm from "./pages/Confirm";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <div className="p-4 bg-white shadow sticky top-0 z-10">
        <nav className="max-w-4xl mx-auto flex gap-4">
          <Link to="/" className="text-blue-600">Register</Link>
          <Link to="/confirm" className="text-blue-600">Confirm</Link>
          <Link to="/login" className="text-blue-600">Login</Link>
          <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
