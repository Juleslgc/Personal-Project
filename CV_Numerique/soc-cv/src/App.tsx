import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Investigation from "./pages/Investigation";
import CV from "./pages/CV";

import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: "flex", background: "#000", color: "#00ff88", minHeight: "100vh", fontFamily: "monospace" }}>
        
        <Sidebar />

        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/investigation" element={<Investigation />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}