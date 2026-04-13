import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const menu = [
    { label: "Dashboard", path: "/" },
    { label: "Investigation", path: "/investigation" },
    { label: "CV", path: "/cv" },
  ];

  return (
    <div
      style={{
        width: open ? 200 : 60,
        transition: "0.3s",
        background: "#0a0a0a",
        borderRight: "1px solid #222",
        color: "#00ff88",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: open ? "flex-start" : "center",
        paddingTop: 20,
      }}
    >
      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          marginBottom: 20,
          background: "none",
          border: "1px solid #00ff88",
          color: "#00ff88",
          cursor: "pointer",
          padding: 5,
          width: open ? "90%" : 40,
        }}
      >
        {open ? "⬅" : "➡"}
      </button>

      {/* MENU */}
      {menu.map((item) => (
        <div
          key={item.path}
          onClick={() => navigate(item.path)}
          style={{
            padding: "10px",
            cursor: "pointer",
            width: "100%",
            textAlign: open ? "left" : "center",
            borderBottom: "1px solid #111",
          }}
        >
          {/* icône simple */}
          <span style={{ marginRight: open ? 10 : 0 }}>
            {item.label === "Dashboard" && "🖥"}
            {item.label === "Investigation" && "🧠"}
            {item.label === "CV" && "💼"}
          </span>

          {open && item.label}
        </div>
      ))}
    </div>
  );
}