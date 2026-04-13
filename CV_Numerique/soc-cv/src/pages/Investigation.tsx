import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

type Log = {
  time: string;
  level: "INFO" | "WARN" | "ALERT";
  message: string;
  ip: string;
  user: string;
};

export default function Investigation() {
  const navigate = useNavigate();

  const [filterIP, setFilterIP] = useState("");
  const [filterUser, setFilterUser] = useState("");

  // 📡 logs SOC réalistes (fixes → pas de bug)
  const logs: Log[] = useMemo(
    () => [
      { time: "10:01:01", level: "INFO", message: "Login success", ip: "192.168.1.10", user: "john" },
      { time: "10:01:05", level: "WARN", message: "Failed login attempt", ip: "185.23.54.12", user: "admin" },
      { time: "10:01:08", level: "WARN", message: "Failed login attempt", ip: "185.23.54.12", user: "admin" },
      { time: "10:01:12", level: "WARN", message: "Failed login attempt", ip: "185.23.54.12", user: "admin" },
      { time: "10:01:20", level: "ALERT", message: "Brute force pattern detected", ip: "185.23.54.12", user: "admin" },
      { time: "10:01:25", level: "INFO", message: "Login success", ip: "10.0.0.5", user: "service" },
    ],
    []
  );

  // 🔎 filtres simples
  const filteredLogs = logs.filter((log) => {
    return (
      (filterIP === "" || log.ip.includes(filterIP)) &&
      (filterUser === "" || log.user.includes(filterUser))
    );
  });

  // 🧠 analyse SOC simple
  const suspectIP = "185.23.54.12";

  const failedAttempts = logs.filter(
    (l) => l.ip === suspectIP && l.level === "WARN"
  ).length;

  const isBruteForce = failedAttempts >= 3;

  return (
    <div
      style={{
        padding: 20,
        fontFamily: "monospace",
        background: "#000",
        color: "#00ff88",
        minHeight: "100vh",
      }}
    >
      {/* HEADER */}
      <h1>🧠 SOC Investigation Panel</h1>

      {/* 🔎 FILTERS */}
      <div style={{ marginTop: 20 }}>
        <input
          placeholder="Filter IP"
          value={filterIP}
          onChange={(e) => setFilterIP(e.target.value)}
          style={{ marginRight: 10, padding: 5 }}
        />

        <input
          placeholder="Filter user"
          value={filterUser}
          onChange={(e) => setFilterUser(e.target.value)}
          style={{ padding: 5 }}
        />
      </div>

      {/* 📡 LOG STREAM */}
      <div
        style={{
          marginTop: 20,
          background: "#0a0a0a",
          padding: 10,
          height: 320,
          overflowY: "auto",
          border: "1px solid #222",
        }}
      >
        {filteredLogs.map((log, i) => (
          <div key={i} style={{ padding: "4px 0", borderBottom: "1px solid #222" }}>
            
            <span style={{ color: "#888" }}>[{log.time}]</span>{" "}

            <span
              style={{
                color:
                  log.level === "WARN"
                    ? "orange"
                    : log.level === "ALERT"
                    ? "red"
                    : "#00ff88",
                fontWeight: "bold",
              }}
            >
              {log.level}
            </span>{" "}

            <span>{log.message}</span>{" "}

            <span style={{ color: "#00bfff" }}>IP: {log.ip}</span>{" "}

            <span style={{ color: "#aaa" }}> user: {log.user}</span>
          </div>
        ))}
      </div>

      {/* 🧠 ANALYSIS PANEL */}
      <div
        style={{
          marginTop: 20,
          padding: 10,
          border: "1px solid #333",
          background: "#050505",
        }}
      >
        <h3>🧠 Analysis Summary</h3>

        <p>Suspect IP: {suspectIP}</p>
        <p>Failed attempts: {failedAttempts}</p>

        <p>
          Status:{" "}
          <span style={{ color: isBruteForce ? "red" : "green", fontWeight: "bold" }}>
            {isBruteForce ? "⚠️ Brute Force Detected" : "OK"}
          </span>
        </p>

        {isBruteForce && <p>MITRE ATT&CK: T1110 (Brute Force)</p>}
      </div>

      {/* 📄 CV BUTTON */}
      <button
        onClick={() => navigate("/cv")}
        style={{
          marginTop: 25,
          padding: 12,
          background: "darkgreen",
          color: "white",
          border: "1px solid lime",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        📄 Generate Final Report
      </button>
    </div>
  );
}